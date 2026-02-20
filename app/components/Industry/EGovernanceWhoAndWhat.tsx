import BookDemoButton from "../BookDemoButton";
import Link from "next/link";

const whoItems = [
	{
		id: "01",
		text: "State and central government departments",
		bg: "bg-[#FEFCE8]",
	},
	{
		id: "02",
		text: "Municipal corporations and urban local bodies",
		bg: "bg-white",
	},
	{ id: "03", text: "Public sector undertakings (PSUs)", bg: "bg-[#FEFCE8]" },
	{ id: "04", text: "Government agencies and authorities", bg: "bg-white" },
	{ id: "05", text: "Public institutions and boards", bg: "bg-[#FEFCE8]" },
];

const whatItems = [
	{ id: "01", text: "Inventory management", bg: "bg-white" },
	{ id: "02", text: "Asset management", bg: "bg-[#FEFCE8]" },
	{ id: "03", text: "Project management", bg: "bg-white" },
	{ id: "04", text: "Finance & accounting", bg: "bg-[#FEFCE8]" },
	{ id: "05", text: "HRMS & payroll", bg: "bg-white" },
];

export default function EGovernanceWhoAndWhat() {
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

				{/* What You Get with InGov ERP */}
				<div className="flex flex-col items-center">
					<div className="w-full max-w-[600px]">
						<h2
							className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium mb-12 text-center md:text-left lg:whitespace-nowrap leading-tight lg:leading-[80px]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							What You Get with InGov ERP
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

			{/* Digital Governance Section */}
			<div className="mb-24 text-center max-w-5xl mx-auto">
				<h2
					className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium mb-6 text-[#080808]"
					style={{ fontFamily: "'Outfit', sans-serif", lineHeight: "100%" }}
				>
					Digital Governance with Control & Confidence
				</h2>
				<p
					className="text-[20px] sm:text-[24px] mb-10 text-[#080808] font-normal"
					style={{ fontFamily: "'Outfit', sans-serif" }}
				>
					Government organisations require accuracy, accountability, and
					compliance—not just automation.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{[
						"Financial discipline",
						"Complete audit trails",
						"Inter-department transparency",
						"Citizen-focused service delivery",
					].map((text, i) => (
						<div
							key={i}
							className="bg-white border border-black rounded-[12px] p-4 shadow-[4px_4px_0px_0px_#000]"
						>
							<p
								className="text-[18px] font-medium"
								style={{ fontFamily: "'Outfit', sans-serif" }}
							>
								{text}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Trusted for Public Sector Section */}
			<div className="mb-24 bg-[#0085D0] text-white rounded-[40px] p-8 sm:p-12 lg:p-16 border border-black shadow-[8px_8px_0px_0px_#000]">
				<h2
					className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium mb-12 text-center"
					style={{ fontFamily: "'Outfit', sans-serif" }}
				>
					Trusted for Public Sector Needs
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						"Designed for long-term public deployments",
						"Supports policy-driven workflows",
						"Scales across departments and regions",
						"100% Quality Assurance",
						"100% Accountability",
					].map((text, i) => (
						<div key={i} className="flex items-start gap-4">
							<div className="h-6 w-6 rounded-full bg-white shrink-0 mt-1 flex items-center justify-center">
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#0085D0"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<polyline points="20 6 9 17 4 12"></polyline>
								</svg>
							</div>
							<p
								className="text-[18px] sm:text-[20px] font-medium"
								style={{ fontFamily: "'Outfit', sans-serif" }}
							>
								{text}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Final CTA */}
			<div className="text-center max-w-6xl mx-auto mb-24">
				<h2
					className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium mb-6 text-[#080808]"
					style={{ fontFamily: "'Outfit', sans-serif", lineHeight: "100%" }}
				>
					Ready to Modernise Governance Operations?
				</h2>
				<p
					className="text-[20px] sm:text-[24px] mb-10 text-[#080808] font-normal"
					style={{ fontFamily: "'Outfit', sans-serif" }}
				>
					Move from manual processes to secure, transparent, and citizen-centric
					digital governance.
				</p>

				<div className="flex flex-col items-center gap-6 mt-10">
					<div className="flex flex-col items-center gap-4 mb-4">
						<p
							className="text-[18px] sm:text-[20px] font-medium text-[#080808]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							👉 Contact Us for a Consultation
						</p>
						<p
							className="text-[18px] sm:text-[20px] font-medium text-[#080808]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							👉 Learn how InGov ERP supports efficient governance and
							accountable administration.
						</p>
					</div>

					<Link href="/contact">
						<button className="bg-[#161C2D] text-white px-10 py-4 rounded-full text-[18px] font-medium hover:bg-opacity-90 transition-all shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] cursor-pointer">
							Contact Sales
						</button>
					</Link>
				</div>
			</div>

			{/* Pricing & Engagement */}
			<div className="bg-[#FEFCE8] border border-black rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-[8px_8px_0px_0px_#000] mb-12">
				<div className="max-w-4xl mx-auto text-center">
					<h2
						className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium mb-6 text-[#080808]"
						style={{ fontFamily: "'Outfit', sans-serif" }}
					>
						Pricing & Engagement
					</h2>
					<h3
						className="text-[24px] sm:text-[28px] font-bold mb-8 text-[#0085D0]"
						style={{ fontFamily: "'Outfit', sans-serif" }}
					>
						Enterprise | Customised Pricing
					</h3>
					<p
						className="text-[18px] sm:text-[20px] mb-8 font-medium"
						style={{ fontFamily: "'Outfit', sans-serif" }}
					>
						Government deployments are structured based on:
					</p>
					<div className="flex flex-wrap justify-center gap-6 mb-12">
						{[
							"Department size",
							"Scope of modules",
							"Integration requirements",
						].map((text, i) => (
							<div
								key={i}
								className="bg-white border border-black rounded-full px-6 py-2 shadow-[2px_2px_0px_0px_#000]"
							>
								<p
									className="text-[16px] sm:text-[18px] font-medium"
									style={{ fontFamily: "'Outfit', sans-serif" }}
								>
									{text}
								</p>
							</div>
						))}
					</div>
					<Link
						href="/contact"
						className="text-[18px] sm:text-[20px] font-bold text-[#080808] hover:underline"
						style={{ fontFamily: "'Outfit', sans-serif" }}
					>
						👉 Contact Us to Discuss Your Requirements
					</Link>
				</div>
			</div>
		</section>
	);
}
