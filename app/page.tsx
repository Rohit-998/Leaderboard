import { Leaderboard } from "@/components/leaderboard";
import leaderboard from "../leaderboard.json";
import redis from "@/lib/redis";

export const revalidate = 300;

export default async function Home() {
  // Try fetching leaderboard data from Redis
  const cacheKey = "leaderboard_data";
  let data;

  const cached = await redis.get(cacheKey);
  if (cached) {
    data = JSON.parse(cached);
  } else {
    data = leaderboard as { name: string; points: number }[];
    // Save in Redis cache
    await redis.set(cacheKey, JSON.stringify(data), "EX", 300); // expires in 5 mins
  }

  return (
    <main className="flex flex-col items-center justify-start py-20">
      <Leaderboard data={data} />
    </main>
  );
}
