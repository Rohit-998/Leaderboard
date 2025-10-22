import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Questrial } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const productSans = localFont({
	src: "./fonts/ProductSans.woff",
	variable: "--font-sans",
});

const mainFont = Questrial({
	subsets: ["latin"],
	weight: "400",
	style: ["normal"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Google Cloud Study Jams Leaderboard",
	description: "Made by GDG RBU",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${mainFont.className} ${productSans.variable}`}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
