// import { unstable_noStore as noStore } from "next/cache";
import { Leaderboard } from "@/components/leaderboard";
//import { Legend } from "@/components/legend";
import leaderboard from "../leaderboard.json";

export const revalidate = 300; // every 5 minutes

export default function Home() {
	const data = (leaderboard as { name: string; points: number }[]) ?? [];
	const updatedAt = Date.now();

	return (
		<main className="flex flex-col items-center justify-start py-20">
			{/* <Legend updatedAt={updatedAt} data={data} /> */}
			<Leaderboard data={data} />
		</main>
	);
}
