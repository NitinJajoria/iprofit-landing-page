"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CTAButton from "../UI/CTAButton";

export default function HeroVideo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects for floating cards
    const y1 = useTransform(scrollY, [0, 500], [0, -100]);
    const y2 = useTransform(scrollY, [0, 500], [0, 80]);
    const rotate1 = useTransform(scrollY, [0, 500], [0, 15]);
    const rotate2 = useTransform(scrollY, [0, 500], [0, -10]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] overflow-hidden bg-[#F8FBFF] pt-32 pb-16 lg:pt-40 lg:pb-24 flex items-center">
            {/* Mesh Gradient Background for Left Side */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div
                    className="absolute top-1/4 left-0 w-[50%] h-[50%] rounded-full blur-[120px]"
                    style={{ background: "radial-gradient(circle, rgba(0, 138, 221, 0.08) 0%, rgba(248, 251, 255, 0) 70%)" }}
                />
            </div>

            {/* Curved background decoration */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-15">
                <motion.svg
                    animate={{
                        rotate: [0, 5, 0],
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-[-10%] top-[-10%] h-[120%] w-auto text-[#008ADD]/30"
                >
                    <path
                        d="M850,200 Q950,500 850,800"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="4 8"
                    />
                    <path
                        d="M800,150 Q920,500 800,850"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="4 8"
                    />
                    <path
                        d="M750,100 Q890,500 750,900"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="4 8"
                    />
                </motion.svg>
            </div>

            {/* Background Glows */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#008ADD]/10 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#008ADD]/5 blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-20">
                <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center">
                    {/* Left Content */}
                    <div className="w-full text-center lg:w-1/2 lg:text-left">
                        {/* Badge */}
                        <div className="mb-6 flex justify-center lg:justify-start">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 rounded-full border border-[#008ADD]/20 bg-[#008ADD]/5 px-4 py-1.5 backdrop-blur-md"
                            >
                                <span className="h-2 w-2 rounded-full bg-[#008ADD] animate-pulse" />
                                <span className="font-outfit text-sm font-medium tracking-wide text-[#008ADD]">
                                    Made in India, Built for Indian Businesses
                                </span>
                            </motion.div>
                        </div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="mb-6 font-outfit text-4xl font-bold leading-[1.1] tracking-tight text-[#0D1117] sm:text-5xl lg:text-6xl"
                        >
                            Stop Juggling Tools.{" "}
                            <br className="hidden sm:block" />
                            <span className="text-[#008ADD]">Run Everything</span> from One Place.
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-10 max-w-xl font-outfit text-lg font-normal leading-relaxed text-[#4B5563] lg:mx-0"
                        >
                            iProfit unifies Finance, HR & Payroll, Inventory, Projects, and Assets
                            into a single ERP — so your team spends less time on admin and more time growing.
                        </motion.p>

                        {/* CTA Buttons - Using Reusable Component */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mb-12 flex flex-col items-center gap-5 sm:flex-row lg:justify-start"
                        >
                            <CTAButton href="https://app.iprofit.in/#/pricing" variant="primary">
                                Start Free
                            </CTAButton>
                            <CTAButton href="https://calendly.com/iprofitsales/30min" variant="outline" showIcon>
                                Watch Demo
                            </CTAButton>
                        </motion.div>
                    </div>

                    {/* Right Content Area with Image and Floating Cards */}
                    <div className="relative w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative mx-auto w-full max-w-2xl bg-white rounded-3xl border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,10,20,0.1)] p-4 overflow-visible"
                        >
                            {/* iProfit UI Image */}
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200">
                                <Image
                                    src="/video/hero-img1.png"
                                    alt="iProfit Dashboard"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Overlay Inner Shadow */}
                                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]" />
                            </div>

                            {/* Floating Stat Card 1 - Payroll Users (With Parallax) */}
                            <motion.div
                                style={{ y: y1, rotate: rotate2 }}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{
                                    x: -50,
                                    opacity: 1,
                                    transition: { duration: 0.8, delay: 0.5 }
                                }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                className="absolute top-10 -left-8 md:-left-12 z-20 w-48 rounded-2xl border border-white/50 bg-white/90 p-5 shadow-[0_20px_40px_rgba(0,138,221,0.15)] backdrop-blur-xl"
                            >
                                <p className="font-outfit text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Payroll Users</p>
                                <p className="mt-2 font-outfit text-3xl font-bold text-[#0D1117]">11,000+</p>
                                <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-[#008ADD]">
                                    <span className="h-2 w-2 rounded-full bg-[#008ADD] animate-pulse" />
                                    Active Monthly
                                </div>
                            </motion.div>

                            {/* Floating Stat Card 2 - Salaries Processed (With Parallax) */}
                            <motion.div
                                style={{ y: y2, rotate: rotate1 }}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{
                                    x: 40,
                                    opacity: 1,
                                    transition: { duration: 0.8, delay: 0.8 }
                                }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                className="absolute bottom-10 -right-8 md:-right-12 z-20 w-60 rounded-2xl border border-white/50 bg-white/90 p-5 shadow-[0_20px_40px_rgba(0,138,221,0.15)] backdrop-blur-xl"
                            >
                                <p className="font-outfit text-xs font-bold uppercase tracking-wider text-[#0D1117]">Salaries Processed</p>
                                <p className="mt-1 font-outfit text-2xl font-black text-[#008ADD]">16Cr+ <span className="text-[10px] font-medium text-gray-500">/MO</span></p>
                                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "90%" }}
                                        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                                        className="h-full rounded-full bg-gradient-to-r from-[#008ADD] to-[#0077C2] shadow-[0_0_15px_rgba(0,138,221,0.4)]"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background Floating Decor */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -bottom-10 -left-10 hidden h-32 w-32 rounded-full border-2 border-[#008ADD]/10 lg:block blur-sm"
                        />
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[-20%] right-[-10%] hidden h-64 w-64 rounded-full border-2 border-[#008ADD]/5 lg:block blur-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
