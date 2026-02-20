import PricingBackground from "@/app/components/Pricing/PricingBackground";
import PricingCards from "@/app/components/Pricing/PricingCards";
import Link from "next/link";

export default function PricingPage() {
	return (
		<div className="relative min-h-screen overflow-x-hidden">
			{/* Background Layer */}
			<div className="absolute inset-0 bg-white -z-20" />
			<PricingBackground />

			<div className="relative z-10 pt-32 pb-10 md:pb-20">
				<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
					{/* Plan Badge */}
					<div
						className="mb-8 inline-flex items-center rounded-full px-6 py-1.5"
						style={{
							background:
								"linear-gradient(white, white) padding-box, linear-gradient(180deg, #5466FA 0%, #F0F5FF 100%) border-box",
							border: "1px solid transparent",
						}}
					>
						<span
							className="text-[14px] font-semibold text-[#0085FF]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							Plan
						</span>
					</div>

					{/* Title */}
					<h1 className="mb-16 text-center text-[#080808] font-outfit font-medium text-[42px] sm:text-[64px] lg:text-[78px] leading-[1.15] tracking-[-1.5px] sm:tracking-[-2.5px] lg:tracking-[-3.6px]">
						Flexible & Simple
					</h1>

					{/* Pricing Cards */}
					<PricingCards />

					{/* Contact Us Button */}
					<div className="mt-16 flex justify-center">
						<Link
							href="/contact"
							className="inline-flex h-14 items-center justify-center rounded-full bg-[#0085FF] px-10 font-outfit text-[16px] font-medium text-white transition-transform hover:scale-105 shadow-[0_10px_20px_-5px_rgba(0,133,255,0.3)]"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
