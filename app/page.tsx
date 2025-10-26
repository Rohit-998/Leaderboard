import { Leaderboard } from "@/components/leaderboard";
import leaderboard from "../leaderboard.json";
import redis from "@/lib/redis";

export const revalidate = 300;

export default async function Home() {
  const cacheKey = "leaderboard_data";
  let data;

  try {
    if (redis) {
      const cached = await redis.get(cacheKey);
      if (cached) {
        data = JSON.parse(cached);
      } else {
        data = leaderboard;
        await redis.set(cacheKey, JSON.stringify(data), "EX", 300);
      }
    } else {
      console.warn("Redis not initialized, using local data");
      data = leaderboard;
    }
  } catch (err) {
    console.warn("Redis unavailable:", (err as Error).message);
    data = leaderboard;
  }

  return (
    <main className="flex flex-col items-center justify-start py-20">
      <Leaderboard data={data} />
    </main>
  );
}
