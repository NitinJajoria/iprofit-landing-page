import BookDemoButton from "../BookDemoButton";

const whoItems = [
	{ id: "01", text: "IT Services & Consulting Companies", bg: "bg-[#FEFCE8]" },
	{ id: "02", text: "Software Development Agencies", bg: "bg-white" },
	{ id: "03", text: "Digital & Tech Consulting Firms", bg: "bg-[#FEFCE8]" },
	{ id: "04", text: "Managed Services Providers", bg: "bg-white" },
	{
		id: "05",
		text: "SaaS Services & Implementation Partners",
		bg: "bg-[#FEFCE8]",
	},
];

const whatItems = [
	{ id: "01", text: "Project management", bg: "bg-white" },
	{ id: "02", text: "HR & payroll", bg: "bg-[#FEFCE8]" },
	{ id: "03", text: "Accounting & compliance", bg: "bg-white" },
	{ id: "04", text: "Centralised dashboards", bg: "bg-[#FEFCE8]" },
	{ id: "05", text: "Role-based access", bg: "bg-white" },
];

export default function IndustryWhoAndWhat() {
	return (
		<section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-24">
				{/* Who Is This For? */}
				<div className="flex flex-col items-center">
					<div className="w-full max-w-[600px]">
						<h2
							className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium mb-12 text-center md:text-start lg:whitespace-nowrap leading-tight lg:leading-[80px]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							Who Is This For?
						</h2>
						<div className="space-y-6 max-w-[500px]">
							{whoItems.map((item) => (
								<div
									key={item.id}
									className={`${item.bg} border border-black rounded-[12px] p-6 flex items-center gap-6 shadow-[4px_4px_0px_0px_#000] min-h-[90px]`}
								>
									<span
										className="text-[24px] font-bold shrink-0"
										style={{ fontFamily: "'Outfit', sans-serif" }}
									>
										{item.id}
									</span>
									<span
										className="text-[18px] sm:text-[20px] font-medium"
										style={{ fontFamily: "'Outfit', sans-serif" }}
									>
										{item.text}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* What You Get with iProfit */}
				<div className="flex flex-col items-center">
					<div className="w-full max-w-[600px]">
						<h2
							className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium mb-12 text-center md:text-start lg:whitespace-nowrap leading-tight lg:leading-[80px]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							What You Get with iProfit
						</h2>
						<div className="space-y-6 max-w-[500px]">
							{whatItems.map((item) => (
								<div
									key={item.id}
									className={`${item.bg} border border-black rounded-[12px] p-6 flex items-center gap-6 shadow-[4px_4px_0px_0px_#000] min-h-[90px]`}
								>
									<span
										className="text-[24px] font-bold shrink-0"
										style={{ fontFamily: "'Outfit', sans-serif" }}
									>
										{item.id}
									</span>
									<span
										className="text-[18px] sm:text-[20px] font-medium"
										style={{ fontFamily: "'Outfit', sans-serif" }}
									>
										{item.text}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Final CTA */}
			<div className="text-center max-w-6xl mx-auto">
				<h2
					className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium mb-6 text-[#080808]"
					style={{ fontFamily: "'Outfit', sans-serif", lineHeight: "100%" }}
				>
					Ready to Simplify Operations & Improve Margins?
				</h2>
				<p
					className="text-[24px] sm:text-[30px] lg:text-[36px] mb-10 text-[#080808] font-normal"
					style={{ fontFamily: "'Outfit', sans-serif", lineHeight: "100%" }}
				>
					Stop managing your IT business on spreadsheets and disconnected tools.
				</p>

				<div className="flex flex-col items-center gap-6">
					<BookDemoButton
						href="https://calendly.com/iprofitsales/30min"
						className="px-10 py-4 text-[18px]"
					>
						Book a Free Demo with Our Product Expert
					</BookDemoButton>

					<button
						className="px-8 py-3 rounded-full border border-[#008ADD] text-[#008ADD] text-[14px] sm:text-[16px] font-medium hover:bg-[#008ADD]/5 transition-colors"
						style={{ fontFamily: "'Outfit', sans-serif" }}
					>
						See how iProfit can bring clarity, control, and profitability to
						your IT services business.
					</button>
				</div>
			</div>
		</section>
	);
}
