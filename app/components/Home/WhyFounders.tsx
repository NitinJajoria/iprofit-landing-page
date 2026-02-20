"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";
import Image from "next/image";

// Animation wrappers as per reference
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

export default function WhyFounders() {
    return (
        <section id="why-iprofit" className="relative md:py-16 py-10 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left visual */}
                    <FadeInUp>
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl bg-[linear-gradient(135deg,#008ADD10,#0ea5e910)]" />
                            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
                                <div className="mb-6 flex items-center gap-3">
                                    <img
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iProfit-Fs6nCTJOnVonPcC0aUjB4QnvUBamf8.png"
                                        alt="iProfit logo"
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <p className="font-outfit text-2xl font-bold leading-snug text-[#0F172A]">
                                    Not just software.
                                    <br />
                                    <span className="text-[#008ADD]">Your operating backbone.</span>
                                </p>

                                <div className="mt-6 relative h-[250px] w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50/50">
                                    <Image
                                        src="/why-founders.png"
                                        alt="Why Founders Choose iProfit Visual"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeInUp>

                    {/* Right list */}
                    <div>
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
                                            <h3 className="font-semibold text-[#0D1117]">{r.title}</h3>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-500">{r.desc}</p>
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
