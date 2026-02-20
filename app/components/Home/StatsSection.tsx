"use client";

import { motion } from "framer-motion";
import {
    HiOutlineBuildingOffice2,
    HiOutlineUsers,
    HiOutlineCurrencyRupee,
    HiOutlineStar
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
        number: "16+ Crore",
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

export default function StatsSection() {
    return (
        <section className="relative bg-white py-10 lg:py-16 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                {/* The Premium Container */}
                <div className="relative rounded-[3rem] lg:rounded-[4rem] bg-[#F0F9FF] p-10 lg:p-20 overflow-hidden">

                    {/* Header */}
                    <div className="relative z-10 mb-16 text-center">
                        <FadeInUp>
                            <span className="mb-4 block font-outfit text-sm font-black uppercase tracking-[0.2em] text-[#008ADD]">
                                Proof & Impact
                            </span>
                            <h2 className="font-outfit text-[36px] font-bold leading-tight text-[#0F172A] sm:text-[44px] lg:text-[52px]">
                                Numbers That Speak
                            </h2>
                        </FadeInUp>
                    </div>

                    {/* Stats Grid */}
                    <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, idx) => (
                            <FadeInUp key={stat.label} delay={idx * 0.1}>
                                <div className="group flex flex-col items-center rounded-[2rem] bg-white p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                                    {/* Icon */}
                                    <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bgColor} ${stat.color} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                        <stat.icon className="h-7 w-7" />
                                    </div>

                                    {/* Number */}
                                    <div className={`mb-3 font-outfit text-3xl font-black lg:text-4xl ${stat.color}`}>
                                        {stat.number}
                                    </div>

                                    {/* Label */}
                                    <div className="font-outfit text-sm font-bold leading-relaxed text-slate-400">
                                        {stat.label}
                                    </div>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>

                    {/* Background Decorations */}
                    <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-100/30 blur-[120px]" />
                    <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-100/20 blur-[120px]" />
                </div>
            </div>
        </section>
    );
}
