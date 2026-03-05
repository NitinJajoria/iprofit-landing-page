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
		<section className="relative bg-white py-10 lg:py-14">
			{/* Subtle top border accent */}
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#008ADD]/20 to-transparent" />

			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-6xl">
					{/* Editorial two-column header */}
					<div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="lg:max-w-[55%]">
							<h2 className="font-manrope font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0B] text-[32px] sm:text-[40px] lg:text-[50px]">
								Growing Fast Should Not
								<br className="hidden sm:block" />
								<span className="text-[#008ADD]"> Feel Chaotic</span>
							</h2>
						</div>
						<div className="lg:max-w-[35%] lg:pb-1">
							<p className="font-inter text-[15px] leading-[1.7] text-[#6B7280] sm:text-[16px]">
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
								<p className="mb-3 font-manrope text-[13px] font-bold uppercase tracking-[0.08em] text-[#008ADD]">
									{item.before}
								</p>
								<p className="font-outfit text-[16px] leading-[1.65] text-[#374151] lg:text-[17px]">
									{item.insight}
								</p>
							</motion.div>
						))}
					</div>

					{/* Solution — not a card, just a confident statement */}
					{/* <motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.6 }}
						className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between"
					>
						<div className="lg:max-w-[60%]">
							<p className="font-manrope text-[24px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#0A0A0B] sm:text-[28px] lg:text-[32px]">
								iProfit replaces the patchwork.{" "}
								<span className="text-[#6B7280]">
									Finance, HR, Payroll, Inventory, Projects — one system, always in sync.
								</span>
							</p>
						</div>
						<div className="shrink-0">
							<Link
								href="https://calendly.com/iprofitsales/30min"
								className="group inline-flex items-center gap-3 font-manrope text-[15px] font-bold text-[#008ADD] transition-colors hover:text-[#006BB3] sm:text-[16px]"
							>
								See how it works
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#008ADD] text-white transition-all group-hover:bg-[#006BB3]">
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
										<path
											d="M5 12H19M19 12L13 6M19 12L13 18"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							</Link>
						</div>
					</motion.div> */}
				</div>
			</div>
		</section>
	);
}
