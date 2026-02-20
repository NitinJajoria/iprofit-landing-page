import BookDemoButton from "../BookDemoButton";

const whoItems = [
	{
		id: "01",
		text: "MSMEs across manufacturing, trading & services",
		bg: "bg-[#FEFCE8]",
	},
	{
		id: "02",
		text: "Startups looking to streamline operations",
		bg: "bg-white",
	},
	{
		id: "03",
		text: "Growing businesses moving beyond spreadsheets",
		bg: "bg-[#FEFCE8]",
	},
	{
		id: "04",
		text: "Founders who want control without complexity",
		bg: "bg-white",
	},
];

const whatItems = [
	{ id: "01", text: "Inventory management", bg: "bg-white" },
	{ id: "02", text: "Asset management", bg: "bg-[#FEFCE8]" },
	{ id: "03", text: "Project management", bg: "bg-white" },
	{ id: "04", text: "Finance & accounting", bg: "bg-[#FEFCE8]" },
];

export default function MSMEWhoAndWhat() {
	return (
		<section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-24">
				{/* Who Is This For? */}
				<div className="flex flex-col items-center">
					<div className="w-full max-w-[600px]">
						<h2
							className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium mb-12 text-center md:text-left lg:whitespace-nowrap leading-tight lg:leading-[80px]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							Who Is This For?
						</h2>
						<div className="space-y-6 max-w-[600px]">
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
							className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium mb-12 text-center md:text-left lg:whitespace-nowrap leading-tight lg:leading-[80px]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							What You Get with iProfit
						</h2>
						<div className="space-y-6 max-w-[600px]">
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

			{/* Simple. Affordable. Scalable. */}
			<div className="text-center max-w-5xl mx-auto">
				<h2
					className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium mb-12 text-[#080808]"
					style={{ fontFamily: "'Outfit', sans-serif", lineHeight: "100%" }}
				>
					Simple. Affordable. Scalable.
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
					{[
						{
							title: "Affordable",
							desc: "Cost-effective plans for growing businesses",
						},
						{ title: "Easy to Use", desc: "Simple, intuitive interface" },
						{ title: "Regulatory Ready", desc: "GST & compliance built-in" },
						{
							title: "Scalable",
							desc: "Grows with you—from startup to mid-size enterprise",
						},
					].map((item, i) => (
						<div
							key={i}
							className="bg-white border border-black rounded-[12px] p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col gap-2"
						>
							<p
								className="text-[20px] font-bold text-[#0085D0]"
								style={{ fontFamily: "'Outfit', sans-serif" }}
							>
								{item.title}
							</p>
							<p
								className="text-[16px] font-medium"
								style={{ fontFamily: "'Outfit', sans-serif" }}
							>
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
