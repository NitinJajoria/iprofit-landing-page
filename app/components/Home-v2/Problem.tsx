"use client";

import { motion } from "framer-motion";
import {
	HiOutlineRectangleStack,
	HiOutlineClock,
	HiOutlineEyeSlash,
} from "react-icons/hi2";

const painPoints = [
	{
		before: "Tally + Excel + WhatsApp",
		insight:
			"Your data lives in 5 places. Nothing syncs. Every report is a manual merge.",
		icon: HiOutlineRectangleStack,
	},
	{
		before: "Week-long month-end closes",
		insight:
			"Finance chases HR, HR chases ops, errors compound, compliance deadlines slip.",
		icon: HiOutlineClock,
	},
	{
		before: "No cross-department visibility",
		insight:
			"Leadership makes decisions on gut feel because real numbers take days to compile.",
		icon: HiOutlineEyeSlash,
	},
];

export default function Feedback() {
	return (
		<section className="relative bg-white py-10 overflow-hidden">
			{/* Dynamic Background Elements */}
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#008ADD]/30 to-transparent" />
			<div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-50" />
			<div className="absolute -right-20 bottom-0 w-80 h-80 bg-slate-50 rounded-full blur-[100px]" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="mx-auto max-w-6xl">
					{/* Integrated Editorial Header */}
					<div className="mb-16 flex flex-col gap-10 lg:flex-row lg:items-center">
						<div className="lg:w-3/5">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100/50">
									<span className="flex h-2 w-2 rounded-full bg-rose-500" />
									<span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">
										The Problem
									</span>
								</div>
								<h2 className="font-manrope text-[40px] font-extrabold leading-[1.1] tracking-tight text-[#0A0A0B] sm:text-[50px] lg:text-[64px]">
									Growing Fast Should <br />
									Not Feel{" "}
									<span className="relative inline-block">
										<span className="relative z-10 text-[#008ADD]">
											Chaotic
										</span>
										<motion.span
											initial={{ scaleX: 0 }}
											whileInView={{ scaleX: 1 }}
											viewport={{ once: true }}
											transition={{ delay: 0.8, duration: 0.8 }}
											className="absolute bottom-2 left-0 h-3 w-full bg-[#008ADD]/10 origin-left"
										/>
									</span>
								</h2>
							</motion.div>
						</div>
						<div className="lg:w-2/5 lg:pl-10">
							<motion.p
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2, duration: 0.6 }}
								className="font-inter text-lg leading-relaxed text-slate-500 italic border-l-4 border-[#008ADD]/20 pl-6"
							>
								"Most IT companies run on a patchwork of disconnected tools. It
								works until the scale introduces friction you can't ignore."
							</motion.p>
						</div>
					</div>

					{/* Storytelling Layout - Multi-directional Flow (No Cards) */}
					<div className="space-y-20 relative">
						{/* Background connecting path line */}
						<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#008ADD]/20 via-[#008ADD]/5 to-transparent -translate-x-1/2 hidden lg:block" />

						{painPoints.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 60 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.8, delay: i * 0.1 }}
								className={`group relative flex flex-col items-center gap-16 lg:flex-row ${
									i % 2 === 1 ? "lg:flex-row-reverse" : ""
								}`}
							>
								{/* Premium Node Icon (Matches Stats) */}
								<div className="lg:w-1/2 flex justify-center">
									<div className="relative">
										{/* Watermark Index - Matches Stats style */}
										<div
											className={`absolute -top-16 ${i % 2 === 1 ? "-right-8" : "-left-8"} opacity-[0.05] font-outfit text-[120px] font-black text-[#008ADD] select-none transition-all duration-700 group-hover:opacity-[0.15] group-hover:-translate-y-4`}
										>
											0{i + 1}
										</div>

										<div
											className={`flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#008ADD] shadow-[0_20px_40px_rgba(0,138,221,0.08)] transition-all duration-700 group-hover:bg-[#008ADD] group-hover:text-white group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_30px_60px_rgba(0,138,221,0.3)] border border-[#008ADD]/5 relative z-10`}
										>
											<item.icon className="h-10 w-10" />

											{/* Rotating Orbit ring - Same as Stats */}
											<div className="absolute inset-[-8px] rounded-full border border-[#008ADD]/10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none animate-[spin_10s_linear_infinite]" />

											{/* Core Pulse */}
											<div className="absolute inset-0 rounded-full bg-[#008ADD]/10 animate-ping group-hover:hidden" />
										</div>

										{/* Visual Accent Gloom */}
										<div className="absolute inset-0 bg-[#008ADD]/20 blur-[60px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
									</div>
								</div>

								{/* Refined Content */}
								<div
									className={`lg:w-1/2 text-center ${i % 2 === 1 ? "lg:text-right" : "lg:text-left"} relative z-10`}
								>
									<h3 className="mb-6 font-manrope text-2xl lg:text-4xl font-extrabold text-[#0D1117] leading-tight transition-colors group-hover:text-[#008ADD]">
										{item.before}
									</h3>

									<div className="relative">
										<p className="font-outfit text-lg lg:text-xl leading-relaxed text-slate-500 transition-all duration-500 group-hover:text-slate-900 group-hover:translate-x-1">
											{item.insight}
										</p>
										{/* Highlight accent on hover */}
										<div
											className={`absolute top-0 bottom-0 -left-6 w-1 bg-[#008ADD] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ${i % 2 === 1 ? "hidden" : ""}`}
										/>
										<div
											className={`absolute top-0 bottom-0 -right-6 w-1 bg-[#008ADD] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ${i % 2 === 0 ? "hidden" : ""}`}
										/>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
