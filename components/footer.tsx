import Image from "next/image";
import {
	EnvelopeClosedIcon,
	InstagramLogoIcon,
	TwitterLogoIcon,
	LinkedInLogoIcon,
	SewingPinIcon,
} from "@radix-ui/react-icons";

export function Footer() {
	return (
		<div className="footer overflow-hidden">
			<footer id="footer" className="relative flex items-center justify-between py-10 max-md:flex-col md:h-80">
				<div className="flex w-[30vw] flex-col items-center justify-center font-sans max-md:w-fit md:translate-x-16">
					<Image src="/gdg.svg" alt="logo" className="h-10 w-auto" width={75} height={35} />
					<p className="pt-4 text-center text-2xl text-slate-100 max-md:text-xl">Google Developer Groups</p>
					<div className="flex items-center justify-center gap-2">
						<span className="text-md text-blue-500">On Campus</span>
						<span>•</span>
						<span className="text-md text-slate-300">Ramdeobaba University</span>
					</div>
				</div>
				<div className="flex w-[50vw] flex-col items-center justify-center gap-4 max-md:w-[95vw] max-md:py-8 md:items-start">
					<div className="flex flex-col gap-8">
						<div className="flex items-center">
							<SewingPinIcon className="mx-12 scale-[2] text-slate-100" />
							<div className="text-md w-2/3 text-slate-100 max-md:text-sm">
								Ramdeobaba University , Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013
							</div>
						</div>
						<div className="flex items-center py-4">
							<EnvelopeClosedIcon className="ml-12 mr-6 scale-[1.8] text-slate-100" />
							<a
								href="mailto:contact@gdgrbu.dev"
								className="text-md mx-6 text-left text-slate-100 underline underline-offset-2 max-md:text-sm"
							>
								contact@gdgrbu.tech
							</a>
						</div>
					</div>
					<div className="flex items-center justify-between gap-12 py-4 md:ml-10">
						<div className="text-md text-slate-100">Follow Us</div>
						<div className="flex gap-8">
							<a href="https://www.instagram.com/gdg_rbu/" target="_blank">
								<InstagramLogoIcon className="scale-150 cursor-pointer text-slate-100 transition-all hover:scale-[1.8]" />
							</a>
							<a href="https://x.com/gdsc_rcoem">
								<TwitterLogoIcon className="scale-150 cursor-pointer text-slate-100 transition-all hover:scale-[1.8]" />
							</a>
							<a href="https://in.linkedin.com/company/gdsc-rcoem">
								<LinkedInLogoIcon className="scale-150 cursor-pointer text-slate-100 transition-all hover:scale-[1.8]" />
							</a>
						</div>
					</div>
				</div>
				{/* <Image
					src="/images/shapes.svg"
					alt="shapes"
					className="absolute bottom-0 -z-10 overflow-clip max-md:scale-[4] md:-bottom-12 lg:-bottom-24"
					height={1080}
					width={2000}
				/> */}
			</footer>
		</div>
	);
}
