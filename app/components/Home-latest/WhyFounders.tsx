"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";
import {
	Calculator,
	ChartColumn,
	ClipboardList,
	HandCoins,
	Landmark,
	FileChartColumn,
} from "lucide-react";

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

const DIAGRAM_MODULES = [
	{
		lines: ["Finance &", "Accounting"],
		icon: Calculator,
	},
	{
		lines: ["Inventory", "Management"],
		icon: ClipboardList,
	},
	{
		lines: ["Asset", "Management"],
		icon: Landmark,
	},
	{
		lines: ["HRMS &", "Payroll"],
		icon: HandCoins,
	},
	{
		lines: ["Project", "Management"],
		icon: FileChartColumn,
	},
	{
		lines: ["Dashboard &", "Analytics"],
		icon: ChartColumn,
	},
] as const;

const DIAGRAM_SIZE = 500;
const DIAGRAM_CX = DIAGRAM_SIZE / 2;
const DIAGRAM_CY = DIAGRAM_SIZE / 2;
const DIAGRAM_ORBIT_R = 150;
const DIAGRAM_NODE_R = 30;
const DIAGRAM_HUB_R = 70;

function getModulePosition(i: number) {
	const angle = (2 * Math.PI * i) / DIAGRAM_MODULES.length - Math.PI / 2;
	return {
		x: DIAGRAM_CX + DIAGRAM_ORBIT_R * Math.cos(angle),
		y: DIAGRAM_CY + DIAGRAM_ORBIT_R * Math.sin(angle),
	};
}

const FadeInUp = ({
	children,
	delay = 0,
}: {
	children: React.ReactNode;
	delay?: number;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 24 }}
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
		variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
		transition={{ duration: 0.45, ease: "easeOut" }}
	>
		{children}
	</motion.div>
);

function PlatformDiagram() {
	return (
		<svg
			viewBox={`0 0 ${DIAGRAM_SIZE} ${DIAGRAM_SIZE}`}
			xmlns="http://www.w3.org/2000/svg"
			className="w-full h-full"
		>
			<defs>
				<radialGradient id="hubGradient" cx="50%" cy="50%" r="65%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="100%" stopColor="#e5f0ff" />
				</radialGradient>
				<filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
					<feDropShadow
						dx="0"
						dy="3"
						stdDeviation="5"
						floodColor="rgba(15,23,42,0.15)"
					/>
				</filter>
				<filter id="hubShadow" x="-25%" y="-25%" width="150%" height="150%">
					<feDropShadow
						dx="0"
						dy="4"
						stdDeviation="8"
						floodColor="rgba(15,23,42,0.20)"
					/>
				</filter>
			</defs>

			<circle
				cx={DIAGRAM_CX}
				cy={DIAGRAM_CY}
				r={DIAGRAM_ORBIT_R}
				fill="none"
				stroke="#22c55e"
				strokeOpacity={0.35}
				strokeWidth="1.6"
			/>

			<g filter="url(#hubShadow)">
				<circle
					cx={DIAGRAM_CX}
					cy={DIAGRAM_CY}
					r={DIAGRAM_HUB_R}
					fill="url(#hubGradient)"
				/>
				<circle
					cx={DIAGRAM_CX}
					cy={DIAGRAM_CY}
					r={DIAGRAM_HUB_R}
					fill="none"
					// stroke="#d1d5db"
					// strokeWidth="1.5"
				/>
				<image
					href="/iProfit.png"
					x={DIAGRAM_CX - 48}
					y={DIAGRAM_CY - 18}
					width="96"
					height="36"
					preserveAspectRatio="xMidYMid meet"
				/>
			</g>

			{DIAGRAM_MODULES.map((mod, i) => {
				const p = getModulePosition(i);
				const dx = p.x - DIAGRAM_CX;
				const dy = p.y - DIAGRAM_CY;
				const dist = Math.sqrt(dx * dx + dy * dy);
				const ux = dx / dist;
				const uy = dy / dist;
				const lineStartX = DIAGRAM_CX + ux * (DIAGRAM_HUB_R + 4);
				const lineStartY = DIAGRAM_CY + uy * (DIAGRAM_HUB_R + 4);
				const lineEndX = p.x - ux * (DIAGRAM_NODE_R + 8);
				const lineEndY = p.y - uy * (DIAGRAM_NODE_R + 8);

				const angle = Math.atan2(dy, dx);
				const cos = Math.cos(angle);
				const sin = Math.sin(angle);

				const labelRadius = DIAGRAM_ORBIT_R + DIAGRAM_NODE_R + 20;

				let labelX = DIAGRAM_CX + labelRadius * cos;
				const labelY = DIAGRAM_CY + labelRadius * sin;
				let textAnchor: "start" | "end" | "middle" = "middle";

				if (cos > 0.3) {
					textAnchor = "start";
				} else if (cos < -0.3) {
					textAnchor = "end";
				}

				const marginX = 52;
				if (textAnchor === "start") {
					if (labelX < marginX) labelX = marginX;
					if (labelX > DIAGRAM_SIZE - marginX) labelX = DIAGRAM_SIZE - marginX;
				} else if (textAnchor === "end") {
					if (labelX < marginX) labelX = marginX;
					if (labelX > DIAGRAM_SIZE - marginX) labelX = DIAGRAM_SIZE - marginX;
				} else {
					if (labelX < marginX) labelX = marginX;
					if (labelX > DIAGRAM_SIZE - marginX) labelX = DIAGRAM_SIZE - marginX;
				}

				return (
					<g key={mod.lines[0]}>
						<line
							x1={lineStartX}
							y1={lineStartY}
							x2={lineEndX}
							y2={lineEndY}
							stroke="#22c55e"
							strokeWidth="1.5"
							strokeOpacity="0.7"
						/>
						<g filter="url(#nodeShadow)">
							<circle cx={p.x} cy={p.y} r={DIAGRAM_NODE_R} fill="#0ea5e9" />
							<circle
								cx={p.x}
								cy={p.y}
								r={DIAGRAM_NODE_R}
								fill="none"
								stroke="#ffffff"
								strokeWidth="2"
								opacity="0.9"
							/>
							<g transform={`translate(${p.x - 12}, ${p.y - 12})`}>
								<mod.icon className="w-6 h-6 text-white" />
							</g>
						</g>
						<text
							x={labelX}
							y={labelY}
							textAnchor={textAnchor}
							fontSize="13"
							fontWeight="500"
							fill="#111827"
							fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
						>
							{mod.lines.map((line, idx) => (
								<tspan key={idx} x={labelX} dy={idx === 0 ? 0 : 16}>
									{line}
								</tspan>
							))}
						</text>
					</g>
				);
			})}
		</svg>
	);
}

export default function WhyFounders() {
	return (
		<section
			id="why-iprofit"
			className="relative py-10 md:py-16 bg-white overflow-hidden"
		>
			{/* Decorative background blobs */}
			<div
				aria-hidden
				className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-25"
				style={{
					background: "radial-gradient(circle, #bae6fd 0%, transparent 68%)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-28 -right-28 w-[380px] h-[380px] rounded-full opacity-18"
				style={{
					background: "radial-gradient(circle, #ddd6fe 0%, transparent 68%)",
				}}
			/>

			<div className="relative mx-auto max-w-7xl px-6">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
					{/* ── Left: diagram ── */}
					<FadeInUp delay={0}>
						<div className="relative flex items-center justify-center">
							{/* Card shell */}
							<div className="absolute inset-0" />
							<div className="relative w-full max-w-[550px] mx-auto p-6">
								<PlatformDiagram />
							</div>
						</div>
					</FadeInUp>

					{/* Right list */}
					<div>
						<FadeInUp>
							<h2 className="font-outfit text-3xl font-bold text-[#0D1117] md:text-4xl">
								Why Founders Choose{" "}
								<span className="text-[#008ADD]">iProfit</span>
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
