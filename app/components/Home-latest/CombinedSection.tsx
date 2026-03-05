"use client";

import { motion } from "framer-motion";
import {
	TrendingUp,
	IndianRupee,
	BarChart3,
	Package,
	Target,
	ShieldAlert,
	Users,
	LayoutDashboard,
} from "lucide-react";
import { HiCheck } from "react-icons/hi2";

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
	{ icon: LayoutDashboard, label: "KPIs by Section" },
	{ icon: Users, label: "Cross‑Team Collaboration" },
];

const reasons = [
	{
		title: "Built for Indian Compliance",
		desc: "GST, TDS, PF, ESI, and payroll statutory requirements built right in.",
	},
	{
		title: "Simple Onboarding",
		desc: "Get up and running in days, not months. We handle migration and setup.",
	},
	{
		title: "Modular & Scalable",
		desc: "Start with what you need, add modules as you grow. No vendor lock-in.",
	},
	{
		title: "Replaces Multiple Tools",
		desc: "One platform instead of 5+ disconnected tools. Massive cost savings.",
	},
	{
		title: "Cloud-Based & Secure",
		desc: "Enterprise-grade security with 99.9% uptime. Access from anywhere.",
	},
];

export default function CombinedSection() {
	return (
		<section className="relative md:py-16 py-10 overflow-hidden">
			<div className="mx-auto container px-10">
				<div className="max-w-7xl mx-auto grid items-start gap-12 lg:gap-20 lg:grid-cols-2">
					{/* left Content : Business Intelligence */}
					<div className="bg-[#F0F9FF] p-6 rounded-2xl">
						<FadeInUp>
							<p className="mb-3 text-sm font-semibold tracking-wider text-[#008ADD] uppercase">
								Business Intelligence
							</p>
							<h2 className="font-outfit text-3xl font-bold text-[#0D1117] md:text-4xl">
								Total Visibility. Smarter Decisions.
							</h2>
							<p className="mt-4 text-lg leading-relaxed text-slate-500">
								Get a 360-degree view of your business from a single dashboard.
								Accessible on desktop and mobile, wherever you are.
							</p>

							<StaggerContainer className="mt-8 grid lg:grid-cols-2 gap-4">
								{insights.map((item) => (
									<StaggerItem key={item.label}>
										<div className="group flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-blue-100">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 transition-colors group-hover:bg-[#008ADD] group-hover:text-white">
												<item.icon className="h-5 w-5 text-[#008ADD] transition-colors group-hover:text-white" />
											</div>
											<span className="text-sm font-medium text-[#1E293B]">
												{item.label}
											</span>
										</div>
									</StaggerItem>
								))}
							</StaggerContainer>
						</FadeInUp>
					</div>

					{/* Right Content: Why Founders */}
					<div className="p-6">
						<FadeInUp>
							<p className="mb-3 text-sm font-semibold tracking-wider text-[#008ADD] uppercase">
								Why Founders Choose Us
							</p>
							<h2 className="font-outfit text-3xl font-bold text-[#0D1117] md:text-4xl">
								Why Founders Choose iProfit
							</h2>
						</FadeInUp>

						<StaggerContainer className="mt-8 flex flex-col gap-5">
							{reasons.map((r, idx) => (
								<StaggerItem key={idx}>
									<div className="flex gap-4 group">
										<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0fdf4] transition-colors group-hover:bg-[#22c55e] group-hover:text-white">
											<HiCheck className="h-4 w-4 text-[#22c55e] transition-colors group-hover:text-white" />
										</div>
										<div>
											<h3 className="font-semibold text-[#0D1117]">
												{r.title}
											</h3>
											<p className="mt-1 text-sm leading-relaxed text-slate-500">
												{r.desc}
											</p>
										</div>
									</div>
								</StaggerItem>
							))}
						</StaggerContainer>
					</div>
				</div>
			</div>
		</section>
	);
}
