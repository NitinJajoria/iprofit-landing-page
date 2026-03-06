"use client";

import { motion } from "framer-motion";
import {
	HiOutlineBuildingOffice2,
	HiOutlineUsers,
	HiOutlineCurrencyRupee,
	HiOutlineStar,
} from "react-icons/hi2";

const stats = [
	{
		number: "15+",
		label: "Enterprises Live",
		icon: HiOutlineBuildingOffice2,
		color: "text-[#008ADD]",
		bgColor: "bg-blue-50",
	},
	{
		number: "11,000+",
		label: "Employees Managed Monthly",
		icon: HiOutlineUsers,
		color: "text-[#008ADD]",
		bgColor: "bg-blue-50",
	},
	{
		number: "16+ Cr",
		label: "Salaries Processed Monthly",
		icon: HiOutlineCurrencyRupee,
		color: "text-emerald-500",
		bgColor: "bg-emerald-50",
	},
	{
		number: "90+",
		label: "NPS Score",
		icon: HiOutlineStar,
		color: "text-indigo-500",
		bgColor: "bg-indigo-50",
	},
];

const FadeInUp = ({
	children,
	delay = 0,
}: {
	children: React.ReactNode;
	delay?: number;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.6, delay, ease: "easeOut" }}
	>
		{children}
	</motion.div>
);

export default function StatsSection() {
	return (
		<section className="relative bg-white py-10 overflow-hidden">
			<div className="container mx-auto px-6 lg:px-10">
				{/* Premium Light Container */}
				<div className="relative rounded-[3rem] lg:rounded-[4rem] bg-gradient-to-b from-[#F0F9FF] to-[#FFFFFF] py-10 px-10 overflow-hidden border border-blue-100/50 shadow-[0_20px_50px_-20px_rgba(0,138,221,0.1)]">
					{/* Background Data Grid Pattern */}
					<div
						className="absolute inset-0 opacity-[0.05] pointer-events-none"
						style={{
							backgroundImage: "radial-gradient(#008ADD 1px, transparent 1px)",
							backgroundSize: "40px 40px",
						}}
					/>

					{/* Soft Gradient Orbs */}
					<div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-400/5 blur-[120px] -translate-y-1/2 translate-x-1/4" />
					<div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#008ADD]/5 blur-[100px] translate-y-1/2 -translate-x-1/4" />

					{/* Header */}
					<div className="relative z-10 mb-24 flex flex-col items-center text-center">
						<FadeInUp>
							<div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#008ADD]/5 border border-[#008ADD]/10 px-5 py-2">
								<span className="font-outfit text-[11px] font-black uppercase tracking-[0.3em] text-[#008ADD]">
									Enterprise Impact
								</span>
							</div>
							<h2 className="font-outfit text-[44px] font-bold leading-[1.1] text-[#0D1117] sm:text-[56px] lg:text-[72px] tracking-tighter">
								Numbers That{" "}
								<span className="text-[#008ADD] relative">
									Speak
									<svg
										className="absolute -bottom-2 left-0 w-full"
										viewBox="0 0 200 8"
										fill="none"
									>
										<motion.path
											initial={{ pathLength: 0 }}
											whileInView={{ pathLength: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 1, delay: 0.5 }}
											d="M2 6C30 2 170 2 198 6"
											stroke="#008ADD"
											strokeWidth="4"
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</h2>
							<p className="mt-4 text-lg text-slate-500 font-outfit max-w-xl mx-auto">
								Real world data driven by 15+ years of enterprise excellence.
							</p>
						</FadeInUp>
					</div>

					{/* Stats Items - No Cards, Editorial Grid Approach */}
					<div className="relative z-10 grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:gap-y-0">
						{stats.map((stat, idx) => (
							<FadeInUp key={stat.label} delay={idx * 0.1}>
								<div className="group relative flex flex-col items-center px-6">
									{/* Vertical Separator for Desktop */}
									{idx !== 0 && (
										<div className="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-px bg-gradient-to-b from-transparent via-[#008ADD]/10 to-transparent hidden lg:block" />
									)}

									{/* Watermark Index */}
									{/* <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-[0.06] font-outfit text-9xl font-black text-[#008ADD] select-none transition-all duration-700 group-hover:opacity-[0.12] group-hover:-translate-y-4">
										0{idx + 1}
									</div> */}

									{/* Floating Node Icon */}
									<div
										className={`mb-10 flex h-20 w-20 items-center justify-center rounded-[2.5rem] bg-white text-[#008ADD] shadow-[0_15px_30px_rgba(0,138,221,0.08)] transition-all duration-700 group-hover:bg-[#008ADD] group-hover:text-white group-hover:scale-110 group-hover:rotate-[360deg] group-hover:shadow-[0_20px_40px_rgba(0,138,221,0.3)] border border-[#008ADD]/5 relative z-10`}
									>
										<stat.icon className="h-9 w-9" />
										{/* Orbit ring */}
										<div className="absolute inset-[-10px] rounded-[3rem] border border-[#008ADD]/10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
									</div>

									{/* Impact Number */}
									<div
										className={`mb-3 font-outfit text-5xl font-black lg:text-7xl tracking-tighter ${stat.color} transition-all duration-500 group-hover:scale-105 relative z-10`}
									>
										{stat.number}
										<div className="absolute -bottom-1 left-0 h-1.5 bg-current rounded-full transition-all duration-700 w-0 group-hover:w-full opacity-20" />
									</div>

									{/* Descriptive Label */}
									<div className="font-outfit text-sm font-extrabold uppercase tracking-[0.2em] text-[#1E293B] group-hover:text-[#008ADD] transition-colors text-center max-w-[180px] leading-[1.6]">
										{stat.label}
									</div>
								</div>
							</FadeInUp>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
