import Image from "next/image";

const solutionSteps = [
	{
		id: 1,
		text: "Track projects by: Client - Team - Timeline - Cost vs revenue",
	},
	{
		id: 2,
		text: "Assign employees to projects and track utilisation",
	},
	{
		id: 3,
		text: "Get real-time visibility into",
	},
];

export default function IndustrySolution() {
	return (
		<section className="bg-white px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-[1400px]">
				{/* Header Section */}
				<div className="mb-8 text-center lg:mb-12">
					<h2
						className="mb-6 text-[32px] sm:text-[40px] lg:text-[48px]"
						style={
							{
								fontFamily: "'Outfit', sans-serif",
								fontWeight: 500,
								lineHeight: "1.2",
								"--desktop-lh": "80px",
								color: "#080808",
							} as any
						}
					>
						<span className="lg:leading-[var(--desktop-lh)]">
							How iProfit Solves This for IT Services Companies
						</span>
					</h2>
					<h3
						className="mb-4 text-[20px] sm:text-[24px] lg:text-[28px]"
						style={{
							fontFamily: "'Outfit', sans-serif",
							fontWeight: 400,
							lineHeight: "1.2",
							color: "#080808",
						}}
					>
						iProfit is an all-in-one ERP designed specifically for service-based
						IT businesses.
					</h3>
					<p
						className="text-[18px] sm:text-[20px] lg:text-[22px]"
						style={{
							fontFamily: "'Outfit', sans-serif",
							fontWeight: 400,
							lineHeight: "1.6",
							color: "#31373D",
						}}
					>
						From project execution to payroll and accounting, everything works
						from a single source of truth.
					</p>
				</div>

				{/* Main Content Box */}
				<div className="mx-auto max-w-[1233px] rounded-[30px] border-b-[11px] border-[#BED2FE] bg-white px-6 py-10 sm:px-12 lg:px-[80px] lg:py-[60px]">
					<div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-[60px]">
						{/* Left Content: Image */}
						<div className="relative w-full lg:flex-1">
							<div className="relative aspect-[680/540] w-full">
								<Image
									src="/industry/it2.png"
									alt="Solution Dashboard"
									fill
									className="object-contain"
								/>
							</div>
						</div>

						{/* Right Content: Text */}
						<div className="relative w-full lg:flex-1">
							<h4
								className="text-center md:text-start mb-10 text-[24px] sm:text-[28px] lg:text-[32px]"
								style={{
									fontFamily: "'Outfit', sans-serif",
									fontWeight: 600,
									lineHeight: "1.2",
									color: "#080808",
								}}
							>
								Project Management That Shows Real Profitability
							</h4>

							<div className="space-y-8">
								{solutionSteps.map((step) => (
									<div key={step.id} className="flex items-start gap-6">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] font-outfit text-[18px] font-semibold text-[#4F46E5]">
											{step.id}
										</div>
										<p
											className="pt-1 text-[16px] sm:text-[18px] lg:text-[19px]"
											style={{
												fontFamily: "'Outfit', sans-serif",
												fontWeight: 400,
												lineHeight: "1.6",
												color: "#31373D",
											}}
										>
											{step.text}
										</p>
									</div>
								))}
							</div>

							{/* Bottom Right Image */}
							<div className="absolute -bottom-6 -right-6 h-20 w-20 lg:-bottom-10 lg:-right-10 lg:h-28 lg:w-28">
								<Image
									src="/Payroll/C2.png"
									alt="Icon"
									fill
									className="object-contain"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom CTA Pill */}
				<div className="mt-12 flex justify-center">
					<div
						className="rounded-full bg-[#0085D0] px-8 py-4 text-white cursor-pointer"
						style={{
							fontFamily: "'Outfit', sans-serif",
							fontWeight: 500,
							fontSize: "16px",
						}}
					>
						Know which projects make money—and which don&apos;t.
					</div>
				</div>
			</div>
		</section>
	);
}
