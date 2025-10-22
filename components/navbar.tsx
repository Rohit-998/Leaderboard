import Image from "next/image";

export function Navbar() {
	return (
		<nav className="sticky top-0 z-20 flex select-none items-center justify-start gap-16 overflow-visible border-b-2 border-accent p-4 drop-shadow backdrop-blur-md max-md:gap-0">
			<div className="flex items-center justify-center gap-4">
				<Image src={"/gdg.svg"} className="h-8 w-10" alt="logo" height={48} width={48} />
				<h3 className="font-sans text-xl font-medium tracking-wide text-primary">Google Clouds Study Jams</h3>
			</div>
		</nav>
	);
}
