"use client";

import { motion } from "framer-motion";

const storySteps = [
	{
		id: 1,
		content:
			"iProfit was built for one purpose — to give SME owners a clean, reliable, all-in-one system that removes operational chaos and brings clarity.",
		side: "right",
	},
	{
		id: 2,
		content: "No enterprise complexity. No heavy IT. No bloated features.",
		side: "left",
	},
	{
		id: 3,
		content:
			"Just a smooth, modern platform made for Indian business realities.",
		side: "right",
	},
];

export default function TeamStory() {
	return (
		<section className="bg-white py-10 md:py-20 overflow-hidden">
			<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-10 md:mb-20 text-center text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#080808]"
					style={{ fontFamily: "'Urbanist', sans-serif", lineHeight: "100%" }}
				>
					Our Story
				</motion.h2>

				<div className="relative mx-auto max-w-5xl">
					{/* Vertical Line */}
					<div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#E5E7EB] hidden md:block" />

					<div className="space-y-12 md:space-y-24">
						{storySteps.map((step, index) => (
							<div
								key={step.id}
								className={`relative flex items-center justify-between md:justify-normal ${step.side === "left" ? "md:flex-row-reverse" : ""}`}
							>
								{/* Dot on line */}
								<motion.div
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2, duration: 0.4 }}
									className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#0085D0] shadow-[0_0_0_4px_rgba(0,133,208,0.2)] hidden md:block z-10"
								/>

								{/* Content Card */}
								<motion.div
									initial={{
										opacity: 0,
										x: step.side === "right" ? 50 : -50,
									}}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{ duration: 0.8, ease: "easeOut" }}
									className={`w-full md:w-[45%] rounded-[24px] border border-black p-8 shadow-[4px_4px_0px_0px_#000] bg-white`}
								>
									<p
										className="text-[18px] sm:text-[20px] lg:text-[22px] text-[#4E4E4E]"
										style={{
											fontFamily: "'Outfit', sans-serif",
											fontWeight: 400,
											lineHeight: "1.6",
										}}
									>
										{step.content}
									</p>
								</motion.div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
