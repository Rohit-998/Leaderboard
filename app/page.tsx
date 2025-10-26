import { Leaderboard } from "@/components/leaderboard";
import redis from "@/lib/redis";

export const revalidate = 300; // ISR

export default async function Home() {
  const cacheKey = "leaderboard_data";

  if (!redis) {
    console.warn("Redis not initialized at build time, returning empty data");
    return (
      <main className="flex flex-col items-center justify-start py-20">
        <Leaderboard data={[]} />
      </main>
    );
  }

  try {
    const cached = await redis.get(cacheKey);

    if (!cached) {
      throw new Error(`Missing Redis key: ${cacheKey}`);
    }

    const data = JSON.parse(cached);

    return (
      <main className="flex flex-col items-center justify-start py-20">
        <Leaderboard data={data} />
      </main>
    );
  } catch (err) {
    console.error("Redis error:", err);
    return (
      <main className="flex flex-col items-center justify-start py-20">
        <Leaderboard data={[]} />
        <p className="text-red-500 mt-6">Redis unavailable or bad data</p>
      </main>
    );
  }
}
