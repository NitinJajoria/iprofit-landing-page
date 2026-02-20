import BookDemoButton from "../BookDemoButton";

export default function MSMEFinalCTA() {
	return (
		<section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
			{/* Simplified Growth & Compliance Section */}
			<div className="mb-24 text-center max-w-5xl mx-auto">
				<h2
					className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium mb-6 text-[#080808]"
					style={{ fontFamily: "'Outfit', sans-serif", lineHeight: "100%" }}
				>
					Simplified Growth & Compliance for MSMEs
				</h2>
				<p
					className="text-[20px] sm:text-[24px] mb-10 text-[#080808] font-normal"
					style={{ fontFamily: "'Outfit', sans-serif" }}
				>
					MSMEs often struggle to balance growth with compliance.
				</p>
				<p
					className="text-[18px] sm:text-[20px] mb-10 text-[#080808] font-medium max-w-3xl mx-auto"
					style={{ fontFamily: "'Outfit', sans-serif" }}
				>
					iProfit helps you manage finance, HR, inventory, and assets
					seamlessly—while staying audit-ready.
				</p>
				<div className="flex flex-wrap justify-center gap-6">
					{["100% Business Transparency", "100% Growth Confidence"].map(
						(text, i) => (
							<div
								key={i}
								className="bg-white border border-black rounded-[12px] p-4 shadow-[4px_4px_0px_0px_#000]"
							>
								<p
									className="text-[18px] font-bold text-[#0085D0]"
									style={{ fontFamily: "'Outfit', sans-serif" }}
								>
									{text}
								</p>
							</div>
						)
					)}
				</div>
			</div>

			{/* Final CTA Section */}
			<div className="text-center max-w-6xl mx-auto">
				<h2
					className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium mb-6 text-[#080808]"
					style={{ fontFamily: "'Outfit', sans-serif", lineHeight: "100%" }}
				>
					Ready to Run Your Business with Confidence?
				</h2>
				<p
					className="text-[20px] sm:text-[24px] mb-10 text-[#080808] font-normal"
					style={{ fontFamily: "'Outfit', sans-serif" }}
				>
					Stop managing your business on spreadsheets and disconnected tools.
				</p>

				<div className="flex flex-col items-center gap-6 mt-10">
					<div className="flex flex-col items-center gap-4 mb-4">
						<p
							className="text-[18px] sm:text-[20px] font-medium text-[#080808]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							👉 Book a Free Demo with Our Product Expert
						</p>
						<p
							className="text-[18px] sm:text-[20px] font-medium text-[#080808]"
							style={{ fontFamily: "'Outfit', sans-serif" }}
						>
							👉 See how iProfit helps MSMEs and startups grow with clarity,
							control, and confidence.
						</p>
					</div>

					<BookDemoButton
						href="https://calendly.com/iprofitsales/30min"
						className="px-10 py-4 text-[18px]"
					>
						Book a Free Demo
					</BookDemoButton>
				</div>
			</div>
		</section>
	);
}
