"use client";

import { motion } from "framer-motion";

const withIProfit = [
    "One unified system for all teams",
    "Contextual data & smart alerts",
    "Proactive project tracking",
    "Aligned cross-functional teams",
    "Single source of truth",
    "Built-in compliance automation",
];

const withoutIProfit = [
    "Scattered tools across teams",
    "Missed follow-ups & deadlines",
    "Poor project visibility",
    "Reactive firefighting",
    "Data in silos – Excel, email, chat",
    "Compliance risk every quarter",
];

const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-500">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CrossIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose-400">
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function ComparisonSection() {
    return (
        <section className="relative overflow-hidden bg-white py-10 lg:py-16">
            {/* High-Fidelity Background Elements */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                {/* Mesh Gradients */}
                <div
                    className="absolute -top-[10%] -left-[10%] h-[60%] w-[60%] rounded-full blur-[120px] opacity-40"
                    style={{ background: "radial-gradient(circle, rgba(225, 29, 72, 0.1) 0%, rgba(255, 255, 255, 0) 70%)" }}
                />
                <div
                    className="absolute -bottom-[10%] -right-[10%] h-[60%] w-[60%] rounded-full blur-[120px] opacity-40"
                    style={{ background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(255, 255, 255, 0) 70%)" }}
                />

                {/* Floating Data Nodes (Animated) */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute h-1 w-1 rounded-full bg-[#008ADD]"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + (i % 3) * 30}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#008ADD]/10 bg-[#008ADD]/5 px-4 py-1.5"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#008ADD] animate-pulse" />
                        <span className="font-outfit text-xs font-black uppercase tracking-[0.2em] text-[#008ADD]">
                            The Ultimate Transformation
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-outfit text-4xl font-bold leading-tight text-[#0D1117] sm:text-5xl lg:text-5xl"
                    >
                        The Difference is <span className="text-[#008ADD]">Clear</span>
                    </motion.h2>
                </div>

                {/* Side-by-Side Comparison Layout */}
                <div className="relative mx-auto max-w-6xl py-6">
                    <div className="relative flex flex-col lg:flex-row lg:items-center justify-center gap-5">

                        {/* Card 1: Without iProfit */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="relative z-10 w-full lg:w-[48%] flex"
                        >
                            <div className="group relative w-full rounded-[2.5rem] bg-[#1a1a1a] p-8 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] sm:p-12 overflow-hidden flex flex-col">
                                {/* Card Decoration */}
                                <div className="absolute top-0 right-0 h-32 w-32 bg-rose-500/10 blur-[60px]" />

                                <div className="relative mb-10 flex items-center justify-between">
                                    <h3 className="font-outfit text-2xl font-bold text-white sm:text-3xl">Without iProfit</h3>
                                    <div className="h-px flex-1 mx-4 bg-white/10" />
                                    <span className="rounded-full bg-rose-500/10 px-3 py-1 font-outfit text-[10px] font-black uppercase tracking-widest text-rose-400 border border-rose-500/20">
                                        Inefficient
                                    </span>
                                </div>

                                <ul className="space-y-6 flex-1">
                                    {withoutIProfit.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + idx * 0.1 }}
                                            className="flex items-center gap-5 group/item"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 transition-all group-hover/item:bg-rose-500/20 group-hover/item:scale-110">
                                                <CrossIcon />
                                            </div>
                                            <span className="font-outfit text-base font-medium text-white/60 transition-colors group-hover/item:text-white/90 sm:text-lg">
                                                {item}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Central Versus Element - Positioned Absolutely to overlap */}
                        <div className="relative lg:static flex items-center justify-center lg:z-30 py-6 lg:py-0 lg:-mx-10 shrink-0">
                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                    boxShadow: [
                                        "0 0 40px rgba(0,138,221,0.2)",
                                        "0 0 60px rgba(0,138,221,0.4)",
                                        "0 0 40px rgba(0,138,221,0.2)"
                                    ]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#008ADD]/10"
                            >
                                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-gradient-to-br from-[#008ADD] to-[#0066B8] flex items-center justify-center text-white font-black text-xs lg:text-sm tracking-tighter italic">
                                    VS
                                </div>
                            </motion.div>
                        </div>

                        {/* Card 2: With iProfit */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="relative z-20 w-full lg:w-[48%] flex"
                        >
                            {/* Premium Glassmorphism Container */}
                            <div className="group relative w-full rounded-[2.5rem] border border-white/20 bg-white/70 backdrop-blur-3xl p-8 shadow-[0_60px_120px_-30px_rgba(0,138,221,0.2)] sm:p-12 overflow-hidden flex flex-col">

                                {/* Interactive Glow Element */}
                                <div className="absolute -top-20 -right-20 h-64 w-64 bg-[#008ADD]/10 blur-[80px] group-hover:bg-[#008ADD]/20 transition-colors duration-700" />

                                <div className="relative mb-10 flex items-center justify-between">
                                    <h3 className="font-outfit text-2xl font-bold text-[#0D1117] sm:text-3xl">With iProfit</h3>
                                    <div className="h-px flex-1 mx-4 bg-[#008ADD]/10" />
                                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-outfit text-[10px] font-black uppercase tracking-widest text-emerald-600 border border-emerald-500/20">
                                        optimized
                                    </span>
                                </div>

                                <ul className="space-y-6 flex-1">
                                    {withIProfit.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + idx * 0.1 }}
                                            className="flex items-center gap-5 group/item"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 shadow-sm transition-all group-hover/item:bg-emerald-500 group-hover/item:text-white group-hover/item:scale-110">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-colors group-hover/item:text-white">
                                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="font-outfit text-base font-bold text-[#4B5563] transition-colors group-hover/item:text-[#0D1117] sm:text-lg">
                                                {item}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
                                    <motion.div
                                        animate={{
                                            x: ['-200%', '200%'],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[45deg]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
