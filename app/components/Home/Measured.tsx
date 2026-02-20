"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
	{
		label: "Visibility",
		text: "Real-time view across finance, HR, sales, inventory, and operations",
		icon: (
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
				<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		),
	},
	{
		label: "Accountability",
		text: "Performance metrics across every department, tracked automatically",
		icon: (
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
				<path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
	},
	{
		label: "Foresight",
		text: "Actionable insights to anticipate risks and optimize resources early",
		icon: (
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
				<path d="M12 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M18 20V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M6 20V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
	},
];

export default function Measured() {
	return (
		<section className="relative bg-white py-10 lg:py-16 overflow-hidden">
			{/* Subtle top border accent */}
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#008ADD]/20 to-transparent" />

			<div className="container relative z-10 mx-auto px-6 lg:px-20">
				{/* Centered Header */}
				<div className="mb-10 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="font-outfit text-[32px] font-bold leading-tight tracking-tight text-[#0F172A] sm:text-[42px] lg:text-[52px]">
							What gets measured
							<span className="text-[#008ADD]"> gets managed</span>
						</h2>
						<p className="mx-auto mt-6 max-w-2xl font-outfit text-lg font-medium leading-relaxed text-slate-500">
							One dashboard for your entire business — track KPIs, monitor cash flow, and manage operations from anywhere.
						</p>
					</motion.div>
				</div>

				<div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
					{/* Left: Highlights */}
					<div className="lg:w-1/2">
						<div className="grid gap-8">
							{highlights.map((item, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-60px" }}
									transition={{ duration: 0.6, delay: i * 0.1 }}
									className="group flex items-start gap-6"
								>
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#008ADD] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#008ADD] group-hover:text-white">
										{item.icon}
									</div>
									<div>
										<p className="mb-1.5 font-outfit text-[13px] font-black uppercase tracking-[0.2em] text-[#008ADD]">
											{item.label}
										</p>
										<p className="font-outfit text-[17px] font-medium leading-relaxed text-slate-600">
											{item.text}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.5 }}
							className="mt-10 flex items-center gap-2 rounded-full bg-slate-50 px-4 py-1.5 w-fit border border-slate-100"
						>
							<div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
							<span className="font-outfit text-xs font-bold uppercase tracking-wider text-slate-400">
								Available on Web & Mobile
							</span>
						</motion.div>
					</div>

					{/* Right: Streamlined Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="relative lg:w-2/5"
					>
						<div className="relative z-10">
							<Image
								src="/measured.png"
								alt="iProfit unified business dashboard"
								width={600}
								height={500}
								className="h-auto w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
								priority
							/>
						</div>

						{/* Background light glow */}
						<div className="absolute -inset-10 z-0 bg-blue-50/50 blur-[100px] rounded-full" />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
