"use client";

import { motion } from "framer-motion";
import {
    HiOutlineBriefcase,
    HiOutlineCalculator,
    HiOutlineUsers,
    HiOutlineCube,
    HiOutlineCpuChip,
    HiOutlineChartBar
} from "react-icons/hi2";

const features = [
    {
        id: "pm",
        title: "Project Management",
        desc: "Real-time records, automated compliance, clean reporting, smarter decision-making.",
        icon: HiOutlineBriefcase,
        variant: "gradient", // Blue gradient
        pos: "lg:col-start-1 lg:row-start-1",
    },
    {
        id: "inventory",
        title: "Inventory",
        desc: "Real-time tracking, automated reordering, and seamless supply chain visibility.",
        icon: HiOutlineCube,
        variant: "bordered",
        pos: "lg:col-start-1 lg:row-start-2 lg:-mt-12",
    },
    {
        id: "assets",
        title: "Asset Management",
        desc: "Centralized tracking for all IT and physical assets with lifecycle management.",
        icon: HiOutlineCpuChip,
        variant: "bordered",
        pos: "lg:col-start-2 lg:row-start-1 lg:mt-24",
    },
    {
        id: "finance",
        title: "Finance & Accounting",
        desc: "Automated bookkeeping, multi-entity support, and instant financial health audits.",
        icon: HiOutlineCalculator,
        variant: "bordered",
        pos: "lg:col-start-3 lg:row-start-1 lg:mt-6",
    },
    {
        id: "analytics",
        title: "Analytics",
        desc: "Transform raw data into actionable insights with visual BI dashboards.",
        icon: HiOutlineChartBar,
        variant: "bordered",
        pos: "lg:col-start-2 lg:row-start-2 lg:mt-12",
    },
    {
        id: "hrms",
        title: "HRMS & Payroll",
        desc: "End-to-end employee lifecycle from hiring to retirement, with 1-click payroll.",
        icon: HiOutlineUsers,
        variant: "gradient",
        pos: "lg:col-start-3 lg:row-start-2 lg:-mt-6",
    },
];

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
        {children}
    </motion.div>
);

export default function FeaturesSection() {
    return (
        <section className="relative bg-[#F8FAFC]/30 py-10 lg:py-16 overflow-hidden">
            <div className="container relative z-10 mx-auto px-6">
                {/* Header */}
                <div className="mb-10 text-center">
                    <FadeInUp>
                        <span className="mb-4 inline-block font-outfit text-sm font-black uppercase tracking-[0.2em] text-[#008ADD]">
                            Our features
                        </span>
                        <h2 className="font-outfit text-[40px] font-bold leading-tight text-[#0F172A] sm:text-[48px] lg:text-[52px]">
                            Your Business Functions Seamlessly <br className="hidden sm:block" /> Connected
                        </h2>
                    </FadeInUp>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-16 max-w-7xl mx-auto">
                    {features.map((feature, idx) => (
                        <div key={feature.id} className={`${feature.pos} relative`}>
                            <FadeInUp delay={idx * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className={`group relative p-10 rounded-[2.5rem] transition-all duration-500 overflow-hidden ${feature.variant === "gradient"
                                        ? "bg-gradient-to-br from-[#008ADD] to-[#01BDD4] text-white shadow-[0_30px_60px_-15px_rgba(0,138,221,0.3)]"
                                        : "bg-white border-3 border-[#008ADD] text-[#1E293B] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:shadow-blue-500/10"
                                        }`}
                                >
                                    {/* Background Light Pattern for Bordered Cards */}
                                    {feature.variant === "bordered" && (
                                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top_right,#008ADD08,transparent_50%)]" />
                                    )}

                                    <div className="relative z-10">
                                        <div className="mb-8 flex items-center justify-between">
                                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${feature.variant === "gradient" ? "bg-white/20" : "bg-blue-50"
                                                }`}>
                                                <feature.icon className={`h-6 w-6 ${feature.variant === "gradient" ? "text-white" : "text-[#008ADD]"}`} />
                                            </div>
                                        </div>

                                        <h3 className={`mb-4 font-outfit text-2xl font-bold ${feature.variant === "gradient" ? "text-white" : "text-[#0F172A]"
                                            }`}>
                                            {feature.title}
                                        </h3>

                                        <p className={`font-outfit text-base font-medium leading-relaxed ${feature.variant === "gradient" ? "text-white/80" : "text-slate-500"
                                            }`}>
                                            {feature.desc}
                                        </p>
                                    </div>

                                    {/* Corner Decoration */}
                                    <div className={`absolute -bottom-6 -right-6 h-24 w-24 rounded-full blur-3xl opacity-20 ${feature.variant === "gradient" ? "bg-white/30" : "bg-[#008ADD]/20"
                                        }`} />
                                </motion.div>
                            </FadeInUp>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
