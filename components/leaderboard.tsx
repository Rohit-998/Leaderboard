"use client";
import Fuse from "fuse.js";
import { useEffect, useMemo, useState } from "react";
import { LBTable } from "@/components/table";
import { columns } from "@/components/columns";
import { Search } from "@/components/search";

export function Leaderboard(props: { data: { name: string; points: number }[] }) {
	let { data } = props;
	if (!data) {
		data = [];
	}
	const [lbData, setLbData] = useState<{ name: string; points: number }[]>([]);
	const [search, setSearch] = useState("");

	// keep a sorted version for ranking (highest points = rank 1)
	const sortedData = useMemo(() => [...data].sort((a, b) => b.points - a.points), [data]);

	// Fuse built from the original data
	const fuse = useMemo(() => new Fuse(data, { keys: ["name"], threshold: 0.4 }), [data]);

	useEffect(() => {
		if (search.length > 0) {
			const results = fuse.search(search).map((r) => r.item);
			// ensure search results are displayed in rank order (points desc)
			results.sort((a, b) => b.points - a.points);
			setLbData(results);
		} else {
			// show the full leaderboard in rank order
			setLbData(sortedData);
		}
	}, [search, sortedData, fuse]);

	const rank = (entry: { name: string; points: number }) => {
		return sortedData.findIndex((e) => e.name === entry.name) + 1;
	};

	const rows = lbData.map((r) => ({
		rank: rank(r),
		name: r.name,
		points: r.points,
	}));

	return (
		<div id="leaderboard" className="my-4 flex w-4/5 flex-col gap-4 max-md:w-[92vw]">
			<Search search={search} setSearch={setSearch} />
			<LBTable columns={columns} data={rows} />
		</div>
	);
}

export interface LBData {
	name: string;
	points: number;
}
