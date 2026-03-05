"use client";

import { motion } from "framer-motion";
import { GitFork, Hourglass, Lock } from "lucide-react";

const painPoints = [
	{
		before: "Tally + Excel + WhatsApp",
		insight:
			"Your data lives in 5 places. Nothing syncs. Every report is a manual merge.",
		icon: GitFork,
	},
	{
		before: "Week-long month-end closes",
		insight:
			"Finance chases HR, HR chases ops, errors compound, compliance deadlines slip.",
		icon: Hourglass,
	},
	{
		before: "No cross-department visibility",
		insight:
			"Leadership makes decisions on gut feel because real numbers take days to compile.",
		icon: Lock,
	},
];

export default function Feedback() {
	return (
		<section className="relative bg-white py-10 md:py-16">
			{/* Subtle top border accent */}
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#008ADD]/20 to-transparent" />

			<div className="container mx-auto px-10">
				<div className="max-w-7xl mx-auto">
					{/* Editorial two-column header */}
					<div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="lg:max-w-[55%]">
							<h2 className="font-outfit font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0B] text-[32px] sm:text-[40px] lg:text-[50px]">
								Growing Fast Should Not
								<br className="hidden sm:block" />
								<span className="text-[#008ADD]"> Feel Chaotic</span>
							</h2>
						</div>
						<div className="lg:max-w-[35%] lg:pb-1">
							<p className="font-outfit text-[15px] leading-[1.7] text-[#6B7280] sm:text-[16px]">
								Most IT companies between 10–250 people run on a patchwork of
								disconnected tools. It works — until it doesn&apos;t.
							</p>
						</div>
					</div>

					{/* Pain points — editorial column layout */}
					<div className="grid grid-cols-1 gap-0 border-t border-[#E5E7EB] sm:grid-cols-3">
						{painPoints.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{ duration: 0.5, delay: i * 0.12 }}
								className={`group border-b border-[#E5E7EB] py-8 sm:border-b-0 sm:py-10 lg:py-12 ${
									i < 2 ? "sm:border-r sm:border-[#E5E7EB]" : ""
								} ${i === 0 ? "sm:pr-8 lg:pr-10" : i === 1 ? "sm:px-8 lg:px-10" : "sm:pl-8 lg:pl-10"}`}
							>
								<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#008ADD] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#008ADD] group-hover:text-white">
									<item.icon className="h-6 w-6" strokeWidth={1.5} />
								</div>
								<p className="mb-3 font-outfit text-[13px] font-bold uppercase tracking-[0.08em] text-[#008ADD]">
									{item.before}
								</p>
								<p className="font-outfit text-[16px] leading-[1.65] text-[#374151] lg:text-[17px]">
									{item.insight}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
