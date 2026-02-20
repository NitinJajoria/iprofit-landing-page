"use client";

import { motion } from "framer-motion";
import CTAButton from "../UI/CTAButton";

const outcomes = [
	{
		title: "60-70% Reduction in Admin Time",
		description: "Automate repetitive tasks across HR, Finance, and Operations.",
		color: "bg-[#F3E8FF]", // Purple
		textColor: "text-purple-900",
		iconColor: "bg-purple-200/50",
		size: "lg:col-span-4 lg:row-span-2",
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
			</svg>
		)
	},
	{
		title: "Auto-Sync Across Departments",
		description: "One entry, instant reflection everywhere - no duplicate work.",
		color: "bg-[#FFE4E6]", // Pink
		textColor: "text-rose-900",
		iconColor: "bg-rose-200/50",
		size: "lg:col-span-8 lg:row-span-1",
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
				<path d="M21 2v6h-6M3 22v-6h6M21 13a9 9 0 1 1-3-7.7L21 8M3 11a9 9 0 0 1 3 7.7L3 16" />
			</svg>
		)
	},
	{
		title: "Consistent Operations",
		description: "Standardized workflows reduce errors and improve output quality.",
		color: "bg-[#FEF9C3]", // Yellow
		textColor: "text-yellow-900",
		iconColor: "bg-yellow-200/50",
		size: "lg:col-span-4 lg:row-span-1",
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
				<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
			</svg>
		)
	},
	{
		title: "Centralized Visibility",
		description: "Real-time dashboards for every department and project.",
		color: "bg-[#DCFCE7]", // Sage/Green
		textColor: "text-emerald-900",
		iconColor: "bg-emerald-200/50",
		size: "lg:col-span-4 lg:row-span-1",
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
				<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
			</svg>
		)
	},
	{
		title: "Zero Compliance Anxiety",
		description: "Built-in Indian compliance for GST, TDS, PF, and payroll filings.",
		color: "bg-[#DBEAFE]", // Blue
		textColor: "text-blue-900",
		iconColor: "bg-blue-200/50",
		size: "lg:col-span-12 lg:row-span-1",
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
			</svg>
		)
	},
];

export default function Achieve() {
	return (
		<section className="bg-white py-10 lg:py-16">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Section Header */}
				<div className="mb-20 text-center">
					<motion.span
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-4 inline-block font-outfit text-sm font-black uppercase tracking-[0.2em] text-[#008ADD]"
					>
						WHAT YOU ACHIEVE
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="font-outfit text-4xl font-bold leading-tight text-[#0D1117] sm:text-5xl lg:text-6xl"
					>
						Outcomes That Actually <br className="hidden sm:block" /> Move the Needle
					</motion.h2>
				</div>

				{/* Bento Grid */}
				<div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 auto-rows-fr">
					{outcomes.map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
							className={`relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 ${item.color} ${item.size} group transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1`}
						>
							<div className="relative z-10 flex h-full flex-col justify-between">
								<div>
									<div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconColor} ${item.textColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm`}>
										{item.icon}
									</div>
									<h3 className={`mb-4 font-outfit text-2xl font-bold leading-tight ${item.textColor} sm:text-3xl`}>
										{item.title}
									</h3>
								</div>
								<p className={`font-outfit text-lg font-medium leading-relaxed ${item.textColor} opacity-60`}>
									{item.description}
								</p>
							</div>

							{/* Subtle background decoration */}
							<div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/30 blur-3xl transition-transform duration-700 group-hover:scale-150" />
							<div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-black/5 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
						</motion.div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="mt-10 text-center">
					<CTAButton variant="primary" href="https://calendly.com/iprofitsales/30min" showIcon>
						Watch Demo
					</CTAButton>
				</div>
			</div>
		</section>
	);
}
