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
const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

const StaggerContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
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
        <section className="relative md:py-16 py-10 bg-[#F1F5F9]/20 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left Content: Text & Grid */}
                    <div className="order-2 lg:order-1">
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

                            <StaggerContainer className="mt-8 grid grid-cols-2 gap-4">
                                {insights.map((item) => (
                                    <StaggerItem key={item.label}>
                                        <div className="group flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-blue-100">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 transition-colors group-hover:bg-[#008ADD] group-hover:text-white">
                                                <item.icon className="h-5 w-5 text-[#008ADD] transition-colors group-hover:text-white" />
                                            </div>
                                            <span className="text-sm font-medium text-[#1E293B]">{item.label}</span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </FadeInUp>
                    </div>

                    {/* Right Content: Visual Dashboard Mock */}
                    <div className="order-1 lg:order-2">
                        <FadeInUp delay={0.2}>
                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl relative group">
                                {/* Shimmer decoration */}
                                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                                    <motion.div
                                        animate={{ x: ['-200%', '200%'] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[45deg]"
                                    />
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="h-4 w-32 rounded bg-slate-100" />
                                        <div className="flex gap-2">
                                            <div className="h-8 w-16 rounded-lg bg-slate-50 border border-slate-100" />
                                            <div className="h-8 w-16 rounded-lg bg-[#008ADD] opacity-10" />
                                        </div>
                                    </div>

                                    {/* Line chart mock */}
                                    <div className="relative h-48 w-full mb-6">
                                        <svg viewBox="0 0 400 150" className="h-full w-full" fill="none">
                                            {/* Grid lines */}
                                            {[0, 37, 75, 112, 150].map((y) => (
                                                <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#f1f5f9" strokeWidth="1" />
                                            ))}
                                            {/* Area */}
                                            <motion.path
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                d="M0,120 C50,100 100,60 150,80 C200,100 250,30 300,50 C350,70 380,20 400,30 L400,150 L0,150Z"
                                                fill="#008ADD"
                                                fillOpacity="0.05"
                                            />
                                            {/* Line */}
                                            <motion.path
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                                d="M0,120 C50,100 100,60 150,80 C200,100 250,30 300,50 C350,70 380,20 400,30"
                                                stroke="#008ADD"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            />
                                            {/* Dot */}
                                            <motion.circle
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 1, type: "spring" }}
                                                cx="300" cy="50" r="5" fill="#008ADD"
                                            />
                                            <motion.circle
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                cx="300" cy="50" r="10" fill="#008ADD" fillOpacity="0.2"
                                            />
                                        </svg>
                                    </div>

                                    {/* Bottom stats cards */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { label: "Revenue", val: "24.5L", color: "#008ADD", bg: "bg-blue-50" },
                                            { label: "Expenses", val: "18.2L", color: "#EF4444", bg: "bg-rose-50" },
                                            { label: "Profit", val: "6.3L", color: "#10B981", bg: "bg-emerald-50" }
                                        ].map((stat, i) => (
                                            <div key={stat.label} className={`rounded-xl ${stat.bg} p-3 text-center transition-transform hover:-translate-y-1`}>
                                                <p className="text-[10px] font-black uppercase tracking-tight text-slate-400 mb-1">{stat.label}</p>
                                                <p className="text-lg font-bold" style={{ color: stat.color }}>{stat.val}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </section>
    );
}
