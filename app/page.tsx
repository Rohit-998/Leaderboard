import { Leaderboard } from "@/components/leaderboard";
import redis from "@/lib/redis";

export const revalidate = 300;

export default async function Home() {
  const cacheKey = "leaderboard_data";
  let data;

  if (!redis) {
    throw new Error("Redis not initialized");
  }

  try {
    const cached = await redis.get(cacheKey);

    if (!cached) {
      throw new Error(`No data found in Redis for key: ${cacheKey}`);
    }

    data = JSON.parse(cached);
  } catch (err) {
    console.error("Redis error:", err);
    throw new Error("Redis unavailable or missing data");
  }

  return (
    <main className="flex flex-col items-center justify-start py-20">
      <Leaderboard data={data} />
    </main>
  );
}
