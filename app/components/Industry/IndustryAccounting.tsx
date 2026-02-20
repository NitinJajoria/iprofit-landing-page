import Image from "next/image";
import GradientFrame from "../GradientFrame";

const accountingPoints = [
	{ id: 1, text: "End-to-end accounting in one system" },
	{ id: 2, text: "GST-ready invoicing & reporting" },
	{ id: 3, text: "TDS & statutory compliance tracking" },
	{ id: 4, text: "Real-time P&L, cash flow & balance sheets" },
	{ id: 5, text: "Client-wise and project-wise financial reports" },
];

export default function IndustryAccounting() {
	return (
		<section className="bg-white px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-20">
				<div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-[80px]">
					{/* Left Content */}
					<div className="w-full lg:flex-1">
						<h2
							className="text-center md:text-start mb-10 text-[32px] leading-[40px] sm:text-[40px] sm:leading-[44px] lg:text-[47.1px] lg:leading-[48px]"
							style={{
								fontFamily: "'Inter', sans-serif",
								fontWeight: 500,
								letterSpacing: "-1.2px",
								color: "#080808",
							}}
						>
							Accounting & Compliance Without the Headache
						</h2>

						<div className="space-y-6">
							{accountingPoints.map((point) => (
								<div key={point.id} className="flex items-center gap-6">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] font-outfit text-[18px] font-semibold text-[#4F46E5]">
										{point.id}
									</div>
									<p
										className="text-[18px] leading-[28px] lg:text-[21px] lg:leading-[32px]"
										style={{
											fontFamily: "'Outfit', sans-serif",
											fontWeight: 500,
											letterSpacing: "-0.5px",
											color: "#161C2D",
										}}
									>
										{point.text}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Right Content: Image with GradientFrame */}
					<div className="relative flex w-full justify-center lg:flex-1 lg:justify-end">
						<div className="w-full max-w-[540px]">
							<GradientFrame
								aspectRatio="aspect-[540/528]"
								className="flex items-center justify-center rounded-[24px]"
							>
								<div className="relative h-full w-full">
									<Image
										src="/industry/it1.png"
										alt="Accounting Dashboard"
										fill
										className="object-contain"
									/>
								</div>
							</GradientFrame>
						</div>
					</div>
				</div>

				{/* Footer Text */}
				<div className="mt-12 lg:mt-16">
					<p
						className="text-center text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] lg:text-[36px] lg:leading-[48px]"
						style={{
							fontFamily: "'Inter', sans-serif",
							fontWeight: 500,
							letterSpacing: "-1.2px",
							color: "#111827",
						}}
					>
						Your finance team always knows where the business stands.
					</p>
				</div>
			</div>
		</section>
	);
}
