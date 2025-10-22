import { ColumnDef } from "@tanstack/react-table";

export type Columns = {
	rank: number;
	name: string;
	points: number;
};

export const columns: ColumnDef<Columns>[] = [
	{
		accessorKey: "rank",
		header: () => <div className="w-[2rem] text-center">Rank</div>,
		cell: ({ getValue }) => {
			const value = getValue<number>();
			const className = `w-[2rem] flex items-center h-8 text-center text-primary font-medium pl-4`;
			return <div className={className}>{value}</div>;
		},
	},
	{
		accessorKey: "name",
		header: "Name",
		cell: ({ getValue }) => <div className="text-primary">{getValue<string>()}</div>,
	},
	{
		accessorKey: "points",
		header: () => <div className="text-center">Points</div>,
		cell: ({ getValue }) => <div className="text-center text-primary">{getValue<number>()}</div>,
	},
];
