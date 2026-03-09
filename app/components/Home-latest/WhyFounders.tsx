"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";

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

const MODULES = [
	{
		label: "Assets",
		icon: "🏢",
		color: "#0ea5e9",
		bg0: "#e0f2fe",
		bg1: "#bae6fd",
		text: "#0369a1",
	},
	{
		label: "Analytics",
		icon: "📊",
		color: "#7c3aed",
		bg0: "#ede9fe",
		bg1: "#ddd6fe",
		text: "#5b21b6",
	},
	{
		label: "Finance",
		icon: "💰",
		color: "#06b6d4",
		bg0: "#cffafe",
		bg1: "#a5f3fc",
		text: "#0e7490",
	},
	{
		label: "Projects",
		icon: "📋",
		color: "#65a30d",
		bg0: "#ecfccb",
		bg1: "#d9f99d",
		text: "#3f6212",
	},
	{
		label: "HR",
		icon: "👥",
		color: "#e11d48",
		bg0: "#ffe4e6",
		bg1: "#fecdd3",
		text: "#9f1239",
	},
];

const SVG_SIZE = 420;
const CX = SVG_SIZE / 2; // 210
const CY = SVG_SIZE / 2; // 210
const ORBIT_R = 148; // orbit radius
const NODE_R = 46; // module bubble radius
const HUB_R = 66; // centre hub radius

function getPos(i: number) {
	const angle = (2 * Math.PI * i) / MODULES.length - Math.PI / 2;
	return {
		x: CX + ORBIT_R * Math.cos(angle),
		y: CY + ORBIT_R * Math.sin(angle),
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
			viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
			xmlns="http://www.w3.org/2000/svg"
			className="w-full h-full"
		>
			<defs>
				{/* Module radial fills */}
				{MODULES.map((m, i) => (
					<radialGradient
						key={`bg-${i}`}
						id={`bg-${i}`}
						cx="38%"
						cy="32%"
						r="68%"
					>
						<stop offset="0%" stopColor={m.bg0} />
						<stop offset="100%" stopColor={m.bg1} />
					</radialGradient>
				))}
				{/* Spoke line gradients */}
				{MODULES.map((m, i) => (
					<linearGradient
						key={`lg-${i}`}
						id={`lg-${i}`}
						x1={CX}
						y1={CY}
						x2={getPos(i).x}
						y2={getPos(i).y}
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0%" stopColor={m.color} stopOpacity="0.8" />
						<stop offset="100%" stopColor={m.color} stopOpacity="0.2" />
					</linearGradient>
				))}
				{/* Hub gradient */}
				<radialGradient id="hub-fill" cx="38%" cy="32%" r="72%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="100%" stopColor="#dbeafe" />
				</radialGradient>
				{/* Glow filter */}
				<filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
					<feGaussianBlur stdDeviation="3.5" result="b" />
					<feMerge>
						<feMergeNode in="b" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
				{/* Drop shadow */}
				<filter id="dshadow" x="-25%" y="-25%" width="150%" height="150%">
					<feDropShadow
						dx="0"
						dy="3"
						stdDeviation="7"
						floodColor="rgba(30,64,175,0.10)"
					/>
				</filter>
				{/* Clip each module bubble */}
				{MODULES.map((_, i) => {
					const p = getPos(i);
					return (
						<clipPath key={`clip-${i}`} id={`clip-${i}`}>
							<circle cx={p.x} cy={p.y} r={NODE_R} />
						</clipPath>
					);
				})}
			</defs>

			{/* ── Outer dashed orbit ring ── */}
			<circle
				cx={CX}
				cy={CY}
				r={ORBIT_R}
				fill="none"
				stroke="rgba(99,130,237,0.20)"
				strokeWidth="1.5"
				strokeDasharray="7 9"
			/>

			{/* ── Spokes ── */}
			{MODULES.map((m, i) => {
				const p = getPos(i);
				const dx = p.x - CX,
					dy = p.y - CY;
				const dist = Math.sqrt(dx * dx + dy * dy);
				const ux = dx / dist,
					uy = dy / dist;
				const x1 = CX + ux * (HUB_R + 5);
				const y1 = CY + uy * (HUB_R + 5);
				const x2 = p.x - ux * (NODE_R + 5);
				const y2 = p.y - uy * (NODE_R + 5);
				const len = Math.hypot(x2 - x1, y2 - y1);
				return (
					<line
						key={`spoke-${i}`}
						x1={x1}
						y1={y1}
						x2={x2}
						y2={y2}
						stroke={`url(#lg-${i})`}
						strokeWidth="1.8"
						filter="url(#glow)"
						strokeDasharray={len}
						strokeDashoffset={len}
						style={{
							animation: `wfDrawLine 0.9s ${0.35 + i * 0.14}s ease forwards`,
						}}
					/>
				);
			})}

			{/* ── Travelling particles ── */}
			{MODULES.map((m, i) => {
				const p = getPos(i);
				const dx = p.x - CX,
					dy = p.y - CY;
				const dist = Math.sqrt(dx * dx + dy * dy);
				const ux = dx / dist,
					uy = dy / dist;
				const x1 = CX + ux * (HUB_R + 5);
				const y1 = CY + uy * (HUB_R + 5);
				const x2 = p.x - ux * (NODE_R + 5);
				const y2 = p.y - uy * (NODE_R + 5);
				return (
					<circle
						key={`particle-${i}`}
						r="3.5"
						fill={m.color}
						filter="url(#glow)"
						opacity="0.9"
					>
						<animateMotion
							dur="2.4s"
							repeatCount="indefinite"
							begin={`${0.9 + i * 0.48}s`}
							path={`M ${x1},${y1} L ${x2},${y2}`}
						/>
					</circle>
				);
			})}

			{/* ── Module bubbles ── */}
			{MODULES.map((m, i) => {
				const { x, y } = getPos(i);
				return (
					<g key={`mod-${i}`} filter="url(#dshadow)">
						{/* Fill */}
						<circle cx={x} cy={y} r={NODE_R} fill={`url(#bg-${i})`} />
						{/* Border */}
						<circle
							cx={x}
							cy={y}
							r={NODE_R}
							fill="none"
							stroke={m.color}
							strokeWidth="1.5"
							strokeOpacity="0.45"
						/>
						{/* Shine */}
						<ellipse
							cx={x - NODE_R * 0.18}
							cy={y - NODE_R * 0.22}
							rx={NODE_R * 0.42}
							ry={NODE_R * 0.26}
							fill="rgba(255,255,255,0.42)"
						/>
						{/* Icon */}
						<text
							x={x}
							y={y + 4}
							textAnchor="middle"
							dominantBaseline="middle"
							fontSize="22"
						>
							{m.icon}
						</text>
						{/* Label */}
						<text
							x={x}
							y={y + NODE_R - 9}
							textAnchor="middle"
							fontSize="8.5"
							fontWeight="700"
							fill={m.text}
							letterSpacing="0.10em"
							fontFamily="ui-sans-serif, system-ui, sans-serif"
						>
							{m.label.toUpperCase()}
						</text>
					</g>
				);
			})}

			{/* ── Hub pulse ring ── */}
			<circle
				cx={CX}
				cy={CY}
				r={HUB_R}
				fill="none"
				stroke="rgba(59,130,246,0.22)"
				strokeWidth="2"
			>
				<animate
					attributeName="r"
					values={`${HUB_R};${HUB_R + 12};${HUB_R}`}
					dur="3s"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="opacity"
					values="0.55;0;0.55"
					dur="3s"
					repeatCount="indefinite"
				/>
			</circle>

			{/* ── Centre hub ── */}
			<g filter="url(#dshadow)">
				<circle cx={CX} cy={CY} r={HUB_R} fill="url(#hub-fill)" />
				<circle
					cx={CX}
					cy={CY}
					r={HUB_R}
					fill="none"
					stroke="rgba(99,130,237,0.38)"
					strokeWidth="2"
				/>
				{/* Shine */}
				<ellipse
					cx={CX - 16}
					cy={CY - 20}
					rx="26"
					ry="16"
					fill="rgba(255,255,255,0.60)"
				/>
				{/* Logo as SVG image */}
				<image
					href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iProfit-Fs6nCTJOnVonPcC0aUjB4QnvUBamf8.png"
					x={CX - 46}
					y={CY - 18}
					width="92"
					height="36"
					preserveAspectRatio="xMidYMid meet"
				/>
			</g>

			{/* ── Keyframe for spoke draw animation ── */}
			<style>{`@keyframes wfDrawLine { to { stroke-dashoffset: 0; } }`}</style>
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
							<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50/50 border border-slate-100/80 shadow-2xl shadow-slate-100" />
							<div className="relative w-full max-w-[500px] mx-auto p-6 sm:p-10">
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
