"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const painPoints = [
	{
		before: "Tally + Excel + WhatsApp",
		insight: "Your data lives in 5 places. Nothing syncs. Every report is a manual merge.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="2" y="3" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
				<rect x="14" y="3" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
				<rect x="8" y="14" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
				<path d="M6 10V12.5H12M18 10V12.5H12M12 12.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" />
			</svg>
		),
	},
	{
		before: "Week-long month-end closes",
		insight: "Finance chases HR, HR chases ops, errors compound, compliance deadlines slip.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
				<path d="M12 7V12L15.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M3.5 12H2M22 12H20.5M12 3.5V2M12 22V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
	},
	{
		before: "No cross-department visibility",
		insight: "Leadership makes decisions on gut feel because real numbers take days to compile.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
				<path d="M3 3L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
	},
];

export default function Feedback() {
	return (
		<section className="relative bg-white py-20 sm:py-28 lg:py-32">
			{/* Subtle top border accent */}
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#008ADD]/20 to-transparent" />

			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-6xl">
					{/* Editorial two-column header */}
					<div className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
						<div className="lg:max-w-[55%]">
							<h2 className="font-manrope text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0B] sm:text-[40px] lg:text-[50px]">
								You&apos;ve outgrown the
								<br className="hidden sm:block" />
								<span className="text-[#008ADD]"> duct-tape stack.</span>
							</h2>
						</div>
						<div className="lg:max-w-[35%] lg:pb-1">
							<p className="font-inter text-[15px] leading-[1.7] text-[#6B7280] sm:text-[16px]">
								Most IT companies between 10–250 people
								run on a patchwork of disconnected tools.
								It works — until it doesn&apos;t.
							</p>
						</div>
					</div>

					{/* Pain points — editorial column layout */}
					<div className="mb-16 grid grid-cols-1 gap-0 border-t border-[#E5E7EB] sm:grid-cols-3 lg:mb-20">
						{painPoints.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{ duration: 0.5, delay: i * 0.12 }}
								className={`border-b border-[#E5E7EB] py-8 sm:border-b-0 sm:py-10 lg:py-12 ${
									i < 2 ? "sm:border-r sm:border-[#E5E7EB]" : ""
								} ${i === 0 ? "sm:pr-8 lg:pr-10" : i === 1 ? "sm:px-8 lg:px-10" : "sm:pl-8 lg:pl-10"}`}
							>
								<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F4F6] text-[#9CA3AF]">
									{item.icon}
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
					<motion.div
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
					</motion.div>
				</div>
			</div>
		</section>
	);
}
