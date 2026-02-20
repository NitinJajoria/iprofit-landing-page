"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "white";
    className?: string;
    showIcon?: boolean;
}

export default function CTAButton({
    href,
    children,
    variant = "primary",
    className = "",
    showIcon = false,
}: CTAButtonProps) {
    const baseStyles = "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-outfit text-xs sm:text-sm font-black uppercase tracking-[0.2em] transition-all active:scale-[0.98]";

    const variants = {
        primary: "bg-[#008ADD] text-white shadow-[0_8px_30px_rgba(0,138,221,0.25)] hover:shadow-[0_12px_40px_rgba(0,138,221,0.35)] hover:bg-[#0077C2]",
        secondary: "bg-[#0D1117] text-white shadow-[0_8px_30px_rgba(13,17,23,0.2)] hover:shadow-[0_12px_40px_rgba(13,17,23,0.3)]",
        outline: "border-2 border-[#008ADD]/30 bg-white/50 text-[#008ADD] backdrop-blur-md hover:border-[#008ADD] hover:bg-white hover:shadow-[0_8px_25px_rgba(0,138,221,0.1)]",
        white: "bg-white text-[#008ADD] shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:bg-gray-50 hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)]",
    };

    const sizes = "h-12 px-8 sm:px-10";

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className={`w-full sm:w-auto ${className}`}
        >
            <Link
                href={href}
                className={`${baseStyles} ${variants[variant]} ${sizes}`}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                    {showIcon && (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform group-hover:translate-x-1"
                        >
                            <path
                                d="M5 12H19M19 12L13 6M19 12L13 18"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
        </motion.div>
    );
}
