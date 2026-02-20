import Link from "next/link";

const stats = [
	{ value: "15+", label: "Enterprises Live" },
	{ value: "11,000+", label: "Payroll Users" },
	{ value: "16Cr+", label: "Salaries Processed/mo" },
	{ value: "90+", label: "NPS Score" },
];

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-[#F8FBFF] to-white pt-28 pb-8 lg:pt-36 lg:pb-12">
			{/* Subtle background decoration */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#008ADD]/[0.04] blur-3xl" />
				<div className="absolute -bottom-20 -left-40 h-[400px] w-[400px] rounded-full bg-[#008ADD]/[0.03] blur-3xl" />
			</div>

			<div className="container relative z-10 mx-auto px-4">
				{/* Badge */}
				<div className="mb-8 flex justify-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-[#008ADD]/20 bg-[#008ADD]/[0.06] px-5 py-2">
						<span className="h-2 w-2 rounded-full bg-[#008ADD]" />
						<span className="font-outfit text-[13px] font-medium tracking-wide text-[#008ADD] sm:text-[14px]">
							Made in India, Built for Indian Businesses
						</span>
					</div>
				</div>

				{/* Main Heading */}
				<h1 className="mx-auto mb-6 max-w-4xl text-center font-outfit text-[36px] font-semibold leading-[1.1] tracking-tight text-[#0D1117] sm:text-[52px] lg:text-[64px]">
					Stop Juggling Tools.{" "}
					<br className="hidden sm:block" />
					<span className="text-[#008ADD]">Run Everything</span> from One Place.
				</h1>

				{/* Subheading */}
				<p className="mx-auto mb-10 max-w-2xl text-center font-outfit text-[16px] font-normal leading-[1.7] text-[#4B5563] sm:text-[18px]">
					iProfit unifies Finance, HR & Payroll, Inventory, Projects, and Assets
					into a single ERP — so your team spends less time on admin and more time growing the business.
				</p>

				{/* CTA Buttons */}
				<div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
					<Link
						href="https://app.iprofit.in/#/pricing"
						className="inline-flex h-[52px] w-full items-center justify-center rounded-xl bg-[#008ADD] px-8 font-outfit text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(0,138,221,0.3)] transition-all hover:bg-[#0077C2] hover:shadow-[0_6px_20px_rgba(0,138,221,0.4)] sm:h-[56px] sm:w-auto sm:px-10 sm:text-[16px]"
					>
						Start Free — No Credit Card Needed
					</Link>
					<Link
						href="https://calendly.com/iprofitsales/30min"
						className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-8 font-outfit text-[15px] font-medium text-[#0D1117] transition-all hover:border-gray-300 hover:bg-gray-50 sm:h-[56px] sm:w-auto sm:px-10 sm:text-[16px]"
					>
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
								stroke="#008ADD"
								strokeWidth="2"
							/>
							<path d="M10 8L16 12L10 16V8Z" fill="#008ADD" />
						</svg>
						Watch Demo
					</Link>
				</div>

				{/* Stats Bar */}
				<div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white/80 px-6 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:px-10 sm:py-7">
					<div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-gray-100">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="flex flex-col items-center text-center"
							>
								<span className="font-outfit text-[28px] font-bold tracking-tight text-[#0D1117] sm:text-[32px]">
									{stat.value}
								</span>
								<span className="mt-1 font-outfit text-[12px] font-medium text-[#6B7280] sm:text-[13px]">
									{stat.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
