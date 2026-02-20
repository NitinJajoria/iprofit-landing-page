import Image from "next/image";
import BookDemoButton from "../BookDemoButton";
import GradientFrame from "../GradientFrame";

const advantageSections = [
	{
		title: "Inventory Management with Full Traceability",
		points: [
			"Centralised inventory tracking across departments",
			"Real-time visibility of stock movement",
			"Reduced wastage and pilferage",
			"Improved procurement planning",
		],
		conclusion: "Know where public resources are used—at all times.",
		image: "/industry/egov1.png",
		icon: "🔹",
	},
	{
		title: "Asset Management for Public Infrastructure",
		points: [
			"Track government assets across locations",
			"Assign assets to departments or officials",
			"Monitor asset lifecycle and utilisation",
			"Prevent loss, misuse, or duplication",
		],
		conclusion: "Protect public assets with complete transparency.",
		image: "/industry/egov2.png",
		icon: "🔹",
	},
	{
		title: "Project Management for Government Programs",
		points: [
			"Plan and monitor public-sector projects",
			"Track timelines, budgets, and milestones",
			"Enable inter-department coordination",
			"Identify delays and bottlenecks early",
		],
		conclusion: "Deliver government projects on time and within budget.",
		image: "/industry/egov3.png",
		icon: "🔹",
	},
	{
		title: "Finance & Accounting with Audit-Ready Controls",
		points: [
			"End-to-end government accounting workflows",
			"Real-time financial visibility and MIS reporting",
			"Strong audit trails and approvals",
			"Budget utilisation and fund tracking",
		],
		conclusion: "Ensure financial discipline and audit compliance at scale.",
		image: "/industry/egov4.png",
		icon: "🔹",
	},
	{
		title: "HRMS & Payroll for Public Institutions",
		points: [
			"Employee records and service details",
			"Attendance and leave management",
			"Payroll processing with statutory compliance",
			"Role-based access and approvals",
		],
		conclusion: "Manage government workforce efficiently and compliantly.",
		image: "/industry/egov5.png",
		icon: "🔹",
	},
];

export default function EGovernanceAdvantage() {
	return (
		<section className="bg-white px-4 py-0 sm:px-6 sm:py-0 lg:px-8 lg:py-0">
			<div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
				{/* Header Section */}
				<div className="mb-16 text-center lg:mb-24">
					<h2
						className="mb-6 text-[32px] sm:text-[40px] lg:text-[48px]"
						style={{
							fontFamily: "'Outfit', sans-serif",
							fontWeight: 500,
							lineHeight: "1.2",
							color: "#080808",
						}}
					>
						How InGov ERP Enables Digital Governance
					</h2>
					<div className="mx-auto max-w-4xl space-y-4">
						<p
							className="text-[18px] sm:text-[20px] lg:text-[22px]"
							style={{
								fontFamily: "'Outfit', sans-serif",
								fontWeight: 400,
								color: "#31373D",
							}}
						>
							InGov ERP, powered by iProfit, is designed specifically for
							e-Governance and public-sector operations.
						</p>
						<p
							className="text-[18px] sm:text-[20px] lg:text-[22px]"
							style={{
								fontFamily: "'Outfit', sans-serif",
								fontWeight: 400,
								color: "#31373D",
							}}
						>
							It helps government bodies digitise workflows, strengthen
							financial discipline, and improve transparency, while staying
							aligned with Digital India and state IT initiatives.
						</p>
						<p
							className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold"
							style={{
								fontFamily: "'Outfit', sans-serif",
								color: "#080808",
							}}
						>
							All operations function from a secure, integrated, and auditable
							ERP platform.
						</p>
					</div>
				</div>

				{/* Advantage Sections */}
				<div className="space-y-20 lg:space-y-[140px]">
					{advantageSections.map((section, index) => {
						const isEven = index % 2 === 0;
						return (
							<div
								key={index}
								className={`flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-[140px] ${
									!isEven ? "lg:flex-row-reverse" : ""
								}`}
							>
								{/* Mobile Title */}
								<h3 className="text-center md:text-start order-1 w-full font-inter text-[28px] font-semibold leading-[1.1] tracking-[-0.8px] text-[#111827] sm:text-[36px] lg:hidden">
									{section.title}
								</h3>

								{/* Image Section */}
								<div className="relative order-2 w-full max-w-[480px] lg:max-w-[540px] lg:flex-1">
									<GradientFrame>
										<div className="relative h-full w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
											<Image
												src={section.image}
												alt={section.title}
												fill
												className="object-contain"
											/>
										</div>
									</GradientFrame>
								</div>

								{/* Text Content */}
								<div className="order-3 w-full lg:flex-1">
									<h3 className="mb-6 hidden font-inter text-[32px] font-semibold leading-[1.1] tracking-[-0.8px] text-[#111827] sm:text-[40px] lg:block lg:text-[40px] lg:leading-[48px] lg:tracking-[-1.2px]">
										{section.title}
									</h3>
									<div className="flex flex-col items-center md:items-start mb-10 space-y-6">
										<ul className="space-y-3">
											{section.points.map((point, pIndex) => (
												<li
													key={pIndex}
													className="flex items-start gap-3 font-outfit text-[16px] text-[#31373D] lg:text-[19px]"
												>
													<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#008ADD]"></span>
													{point}
												</li>
											))}
										</ul>
										<div className="flex items-center gap-2 font-outfit text-[16px] font-semibold text-[#080808] lg:text-[19px]">
											<span>✅</span>
											{section.conclusion}
										</div>
									</div>
									<div className="flex justify-center md:justify-start w-full">
										<BookDemoButton
											href="https://calendly.com/iprofitsales/30min"
											className="h-[52px] px-10 text-[16px]"
										>
											Book a Demo
										</BookDemoButton>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* View All Button */}
				{/* <div className="mt-20 text-center sm:mt-24 lg:mt-[100px]">
					<BookDemoButton className="h-[52px] px-12 text-[16px]">
						View All
					</BookDemoButton>
				</div> */}
			</div>
		</section>
	);
}
