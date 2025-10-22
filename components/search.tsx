import { Input } from "@/components/ui/input";

export function Search({ search, setSearch }: SearchProps) {
	return (
		<Input
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			className="h-12 rounded-md border-accent-foreground text-lg shadow-lg"
			type="text"
			placeholder="Search"
		/>
	);
}

interface SearchProps {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}
