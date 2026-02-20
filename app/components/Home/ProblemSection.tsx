"use client";

import { motion } from "framer-motion";
import {
    HiOutlineCalculator,
    HiOutlineFolderOpen,
    HiOutlineLinkSlash,
    HiOutlineTableCells,
    HiOutlineShieldExclamation,
    HiOutlineExclamationTriangle
} from "react-icons/hi2";

const problems = [
    {
        title: "Payroll Stress Every Month",
        desc: "Manual calculations, missed deadlines, and compliance worries drain your team.",
        icon: HiOutlineCalculator,
        highlight: false,
    },
    {
        title: "Project Profitability Confusion",
        desc: "No visibility into which projects actually make money and which ones bleed cash.",
        icon: HiOutlineFolderOpen,
        highlight: true,
    },
    {
        title: "Disconnected Finance & HR",
        desc: "Data lives in silos. Decisions are made with incomplete information.",
        icon: HiOutlineLinkSlash,
        highlight: false,
    },
    {
        title: "Manual Excel Tracking",
        desc: "Spreadsheets everywhere - fragile, error-prone, and impossible to scale.",
        icon: HiOutlineTableCells,
        highlight: false,
    },
    {
        title: "Compliance Anxiety",
        desc: "GST filings, TDS, PF - keeping up with Indian compliance is a full-time job.",
        icon: HiOutlineShieldExclamation,
        highlight: false,
    },
    {
        title: "Multiple Tools, Zero Sync",
        desc: "Five different tools that don't talk to each other. You're the glue holding it together.",
        icon: HiOutlineExclamationTriangle,
        highlight: false,
    },
];

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

export default function ProblemSection() {
    return (
        <section className="bg-white py-10 lg:py-16 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Header */}
                <div className="mb-20 text-center">
                    <FadeInUp>
                        <span className="mb-4 inline-block font-outfit text-sm font-black uppercase tracking-[0.2em] text-[#008ADD]">
                            THE PROBLEM
                        </span>
                        <h2 className="mb-6 font-outfit text-[40px] font-bold leading-tight text-[#0D1117] sm:text-[48px] lg:text-[56px]">
                            Growing Fast Should <br className="hidden sm:block" /> Not Feel Chaotic
                        </h2>
                        <p className="mx-auto max-w-2xl font-outfit text-lg font-medium leading-relaxed text-slate-500">
                            If any of these sound familiar, you are not alone. Most IT companies hit these walls between 10 and 250 employees.
                        </p>
                    </FadeInUp>
                </div>

                {/* Staggered Grid */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {problems.map((problem, idx) => (
                        <FadeInUp key={idx} delay={idx * 0.1}>
                            <div className={`group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${problem.highlight
                                ? "bg-[#008ADD] shadow-2xl shadow-blue-500/30"
                                : "bg-white border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-blue-100"
                                }`}>
                                {/* Overlapping Icon Container */}
                                <div className={`absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg ${problem.highlight ? "bg-white text-[#008ADD]" : "bg-[#FEE2E2] text-[#EF4444]"
                                    }`}>
                                    <problem.icon className="h-7 w-7" />
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className={`mb-3 font-outfit text-2xl font-bold leading-tight ${problem.highlight ? "text-white" : "text-[#1E293B]"
                                        }`}>
                                        {problem.title}
                                    </h3>
                                    <p className={`font-outfit text-base font-medium leading-relaxed ${problem.highlight ? "text-blue-50" : "text-slate-500"
                                        }`}>
                                        {problem.desc}
                                    </p>
                                </div>

                                {/* Subtle decoration for highlight card */}
                                {problem.highlight && (
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                                        <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-black/5 blur-3xl" />
                                    </div>
                                )}
                            </div>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
