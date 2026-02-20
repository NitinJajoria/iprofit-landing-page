import BookDemoButton from "../BookDemoButton";

const benefits = [
	"Structured project planning & tracking",
	"Resource allocation tools",
	"Budget vs. actual reporting",
	"Real-time dashboards",
	"Improved delivery timelines and cost control",
];

export default function ProjectSummary() {
	return (
		<section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
			<div className="flex flex-col gap-24">
				{/* Top: Key Benefits */}
				<div className="flex flex-col items-center text-center">
					<h2
						className="mb-12 text-[32px] font-medium leading-tight text-[#080808] sm:text-[40px] lg:text-[48px]"
						style={{ fontFamily: "'Outfit', sans-serif" }}
					>
						Key Benefits at a Glance
					</h2>
					<div className="w-full max-w-5xl flex flex-wrap justify-center gap-6">
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className="w-75 flex items-center gap-4 rounded-[12px] border border-black bg-white p-6 shadow-[4px_4px_0px_0px_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
							>
								<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#008ADD] text-white">
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</span>
								<span
									className="text-left text-[16px] font-medium text-[#080808] sm:text-[18px]"
									style={{ fontFamily: "'Outfit', sans-serif" }}
								>
									{benefit}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Bottom: CTA */}
				<div className="flex flex-col items-center text-center">
					<div className="max-w-4xl">
						<h2
							className="mb-6 text-[32px] font-medium leading-tight text-[#080808] sm:text-[40px] lg:text-[48px]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							See How iProfit Transforms Project Execution
						</h2>
						<p
							className="mb-10 text-[18px] font-normal leading-relaxed text-[#31373D] sm:text-[20px] lg:text-[24px]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							From planning and execution to budgeting and collaboration —
							iProfit helps organisations deliver projects faster, control
							costs, and improve accountability.
						</p>
						<BookDemoButton
							href="https://calendly.com/iprofitsales/30min"
							className="h-[64px] px-12 text-[18px] font-bold"
						>
							👉 Book a Call with a Project Expert
						</BookDemoButton>
					</div>
				</div>
			</div>
		</section>
	);
}
