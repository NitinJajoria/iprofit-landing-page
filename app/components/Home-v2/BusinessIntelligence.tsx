"use client";

import { motion } from "framer-motion";
import {
	TrendingUp,
	IndianRupee,
	BarChart3,
	Package,
	Target,
	ShieldAlert,
} from "lucide-react";

// Animation wrappers inspired by the reference snippet
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

const StaggerContainer = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true }}
		variants={{
			hidden: {},
			visible: {
				transition: {
					staggerChildren: 0.1,
				},
			},
		}}
		className={className}
	>
		{children}
	</motion.div>
);

const StaggerItem = ({ children }: { children: React.ReactNode }) => (
	<motion.div
		variants={{
			hidden: { opacity: 0, y: 10 },
			visible: { opacity: 1, y: 0 },
		}}
		transition={{ duration: 0.4 }}
	>
		{children}
	</motion.div>
);

const insights = [
	{ icon: IndianRupee, label: "Track Cash Flow" },
	{ icon: TrendingUp, label: "Monitor Payroll Liabilities" },
	{ icon: BarChart3, label: "Review Margins" },
	{ icon: Package, label: "Control Inventory" },
	{ icon: Target, label: "Measure Performance" },
	{ icon: ShieldAlert, label: "Anticipate Risks" },
];

export default function BusinessIntelligence() {
	return (
		<section className="relative py-10 bg-[#F1F5F9]/10 overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none">
				<div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl" />
			</div>

			<div className="mx-auto max-w-7xl px-6 relative z-10">
				<div className="flex flex-col items-center text-center max-w-5xl mx-auto">
					<FadeInUp>
						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#008ADD]/10 bg-[#008ADD]/5 px-4 py-1.5">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008ADD] opacity-75"></span>
								<span className="relative inline-flex h-2 w-2 rounded-full bg-[#008ADD]"></span>
							</span>
							<p className="text-xs font-bold tracking-widest text-[#008ADD] uppercase">
								Business Intelligence
							</p>
						</div>

						<h2 className="font-outfit text-3xl font-bold text-[#0D1117] md:text-5xl tracking-tight leading-tight">
							Total Visibility. <span className="text-[#008ADD]">Smarter Decisions.</span>
						</h2>

						<p className="mt-6 text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto">
							Get a 360-degree view of your business from a single dashboard.
							Accessible on desktop and mobile, wherever you are.
						</p>

						<div className="mt-12 w-full">
							<StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{insights.map((item) => (
									<StaggerItem key={item.label}>
										<div className="group relative flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1">
											<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-[#008ADD] group-hover:scale-110">
												<item.icon className="h-6 w-6 text-[#008ADD] transition-colors duration-300 group-hover:text-white" />
											</div>
											<div className="text-left">
												<span className="block text-base font-semibold text-[#1E293B] group-hover:text-[#008ADD] transition-colors">
													{item.label}
												</span>
												<span className="text-xs text-slate-400 font-medium">Auto-synced data</span>
											</div>
											<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
												<div className="h-1.5 w-1.5 rounded-full bg-[#008ADD]" />
											</div>
										</div>
									</StaggerItem>
								))}
							</StaggerContainer>
						</div>
					</FadeInUp>
				</div>
			</div>
		</section>
	);
}
