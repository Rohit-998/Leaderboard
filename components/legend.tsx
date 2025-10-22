//import { LBData } from "./leaderboard";
//
//export function Legend(props: LegendProps) {
//	const { updatedAt, data } = props;
//	const totalBlue = data.filter((r) => r.color === "blue").length;
//	const totalGreen = data.filter((r) => r.color === "green").length;
//
//	let localUpdatedAt = new Date(updatedAt).getTime() + (11 * 60 * 60 * 1000) / 2;
//
// return (
//		<div className="my-4 flex w-2/5 flex-col items-center justify-center gap-4 rounded-md border border-accent-foreground p-4 max-md:w-[92vw]">
//			<div className="flex w-full flex-col lg:w-2/3">
//				<p className="text-center uppercase text-primary">Legend</p>
//				<div className="flex justify-around max-md:flex-col">
//					<div className="blue flex h-8 items-center justify-center border-accent pl-4 text-primary max-md:justify-between max-md:border-b-[1px]">
//						Both Tracks{" "}
//						<span className="ml-2 flex w-8 items-center justify-center rounded-md bg-blue-200 text-black">
//							{totalBlue}
//						</span>
//					</div>
//					<div className="green flex h-8 items-center justify-center pl-4 text-primary max-md:justify-between">
//						Single Track{" "}
//						<span className="ml-2 flex w-8 items-center justify-center rounded-md bg-green-200 text-black">
//							{totalGreen}
//						</span>
//					</div>
//				</div>
//				<span className="p-2 text-center text-sm font-light text-gray-400 drop-shadow-md">
//					Last Updated: {new Date(localUpdatedAt).toLocaleString()}
//				</span>
//			</div>
//		</div>
//	);
//}

//interface LegendProps {
//	updatedAt: number;
//	data: LBData[];
//}
