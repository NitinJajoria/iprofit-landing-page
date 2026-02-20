"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";
import CTAButton from "../UI/CTAButton";

interface FeatureBlock {
    label: string;
    title: string;
    desc: string;
    bullets: string[];
    color: string;
    reversed?: boolean;
    image: string;
}

const features: FeatureBlock[] = [
    {
        label: "Finance",
        title: "Finance & Accounting",
        desc: "Clean books, full compliance, real-time reports. Never chase numbers again.",
        bullets: [
            "GST-ready invoicing and billing",
            "Automated bank reconciliation",
            "Real-time P&L and cash flow dashboards",
        ],
        color: "#1e40af",
        image: "/advantage/finance.png",
    },
    {
        label: "HR",
        title: "HRMS & Payroll",
        desc: "From attendance to payslips, handle your entire HR lifecycle with ease.",
        bullets: [
            "Biometric & geo-fenced attendance",
            "Leave management with approval flows",
            "One-click statutory-compliant payroll",
        ],
        color: "#0ea5e9",
        reversed: true,
        image: "/advantage/hrms-payroll.png",
    },
    {
        label: "Projects",
        title: "Project Management",
        desc: "Plan, allocate, track, and measure margins per project with full transparency.",
        bullets: [
            "Resource planning & allocation",
            "Time tracking per task and project",
            "Real-time margin and profitability analysis",
        ],
        color: "#2563eb",
        image: "/advantage/project-management.png",
    },
    {
        label: "Assets",
        title: "Asset Management",
        desc: "Track every asset from procurement to disposal. Know what you own and where.",
        bullets: [
            "Full asset lifecycle tracking",
            "Allocation and utilization reports",
            "Automated depreciation calculations",
        ],
        color: "#22c55e",
        reversed: true,
        image: "/solution/asset-big.png",
    },
];

const FadeInUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function Modules() {
    return (
        <section id="modules" className="relative py-10 lg:py-16 bg-white overflow-hidden">
            <div className="container relative z-10 mx-auto px-6 lg:px-20">

                {/* Section Header */}
                <FadeInUp className="mb-10 lg:mb-16 text-center">
                    <span className="mb-4 inline-block font-outfit text-sm font-black uppercase tracking-[0.2em] text-[#008ADD]">
                        Deep Dive
                    </span>
                    <h2 className="mx-auto max-w-3xl font-outfit text-[36px] font-bold leading-tight text-[#0F172A] sm:text-[44px] lg:text-[52px]">
                        Every Module, Purpose-Built
                    </h2>
                </FadeInUp>

                {/* Feature Blocks Loop */}
                <div className="flex flex-col gap-10 lg:gap-20">
                    {features.map((feat) => (
                        <div
                            key={feat.title}
                            className={`flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 ${feat.reversed ? "lg:direction-rtl" : ""
                                }`}
                        >
                            {/* Content Column */}
                            <div className={`flex flex-col ${feat.reversed ? "lg:direction-ltr lg:order-2" : ""}`}>
                                <FadeInUp delay={0.1}>
                                    <span
                                        className="mb-6 inline-block rounded-xl px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-sm"
                                        style={{ backgroundColor: `${feat.color}10`, color: feat.color }}
                                    >
                                        {feat.label}
                                    </span>
                                    <h3 className="mb-6 font-outfit text-[32px] font-bold leading-tight text-[#0F172A] lg:text-[40px]">
                                        {feat.title}
                                    </h3>
                                    <p className="mb-8 font-outfit text-lg font-medium leading-relaxed text-slate-500">
                                        {feat.desc}
                                    </p>
                                    <ul className="mb-10 flex flex-col gap-5">
                                        {feat.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-4 text-slate-600">
                                                <div
                                                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full shadow-sm"
                                                    style={{ backgroundColor: feat.color }}
                                                />
                                                <span className="font-outfit text-base font-medium">
                                                    {bullet}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <CTAButton
                                        href="/contact"
                                        variant="primary"
                                        className="!w-fit"
                                    >
                                        Learn More <HiOutlineArrowRight className="ml-2 h-4 w-4" />
                                    </CTAButton>
                                </FadeInUp>
                            </div>

                            {/* Image Column */}
                            <div className={`${feat.reversed ? "lg:order-1" : ""}`}>
                                <FadeInUp delay={0.2}>
                                    <div className="relative group">
                                        {/* Glow Behind Image */}
                                        <div
                                            className="absolute -inset-10 z-0 opacity-10 blur-[80px] rounded-full transition-opacity group-hover:opacity-20"
                                            style={{ backgroundColor: feat.color }}
                                        />
                                        <div className="relative z-10">
                                            <div className="relative aspect-[4/3] w-full">
                                                <Image
                                                    src={feat.image}
                                                    alt={feat.title}
                                                    fill
                                                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </FadeInUp>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section background decoration */}
            <div className="absolute top-0 left-0 h-full w-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-blue-50/40 blur-[100px]" />
                <div className="absolute bottom-1/4 -left-24 h-96 w-96 rounded-full bg-slate-50/50 blur-[100px]" />
            </div>
        </section>
    );
}
