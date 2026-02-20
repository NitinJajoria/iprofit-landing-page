"use client";

import { motion } from "framer-motion";
import CTAButton from "../UI/CTAButton";

const partnerFeatures = [
	{
		title: "Training & Enablement",
		description: "Comprehensive training programs and certification to get your team up to speed with iProfit ecosystem.",
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
				<path d="M6 12v5c3 3 9 3 12 0v-5" />
			</svg>
		),
	},
	{
		title: "Co-Branding Opportunities",
		description: "Joint marketing, events, and materials to grow your presence and credibility in the enterprise market.",
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
			</svg>
		),
	},
	{
		title: "Revenue Sharing",
		description: "Attractive commission structures and recurring revenue streams for every successful referral.",
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<line x1="12" y1="20" x2="12" y2="10" />
				<line x1="18" y1="20" x2="18" y2="4" />
				<line x1="6" y1="20" x2="6" y2="16" />
			</svg>
		),
	},
];

export default function ChannelPartner() {
	return (
		<>
			{/* New Partner Program Showcase */}
			<section className="relative overflow-hidden bg-[#F8FBFF] py-10 lg:py-16">
				{/* Background Elements */}
				<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
					<div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#008ADD]/5 blur-[120px]" />
					<div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#008ADD]/5 blur-[120px]" />
				</div>

				<div className="container relative z-10 mx-auto px-4 lg:px-8">
					{/* Section Header */}
					<div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
						<motion.span
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="mb-4 inline-block font-outfit text-xs font-black uppercase tracking-[0.3em] text-[#008ADD]"
						>
							PARTNER PROGRAM
						</motion.span>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="mb-6 font-outfit text-3xl font-bold leading-[1.2] text-[#0D1117] sm:text-4xl lg:text-5xl"
						>
							Become a Channel Partner
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="mx-auto max-w-2xl font-outfit text-base leading-relaxed text-[#6B7280] sm:text-lg"
						>
							Join the iProfit ecosystem and help IT companies transform their operations
							while growing your business through our structured partner network.
						</motion.p>
					</div>

					{/* 3-Column Features Grid */}
					<div className="mb-10 grid gap-6 md:grid-cols-3 lg:gap-8">
						{partnerFeatures.map((feature, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 + idx * 0.1 }}
								whileHover={{ y: -5, transition: { duration: 0.2 } }}
								className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all hover:border-[#008ADD]/20 hover:shadow-[0_20px_50px_-10px_rgba(0,138,221,0.1)]"
							>
								<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#008ADD]/5 text-[#008ADD] transition-colors group-hover:bg-[#008ADD] group-hover:text-white">
									{feature.icon}
								</div>
								<h3 className="mb-4 font-outfit text-xl font-bold text-[#0D1117]">
									{feature.title}
								</h3>
								<p className="font-outfit text-sm leading-relaxed text-[#6B7280]">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>

					{/* Center Action Button */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6 }}
						className="flex justify-center"
					>
						<CTAButton
							href="https://app.iprofit.in/#/pricing"
							showIcon
							className="!px-12"
						>
							Join the iProfit Partner Network
						</CTAButton>
					</motion.div>
				</div>
			</section>

			{/* Original Ready to Simplify CTA section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[#008ADD] to-[#0066B8] py-10 lg:py-16">
				{/* Background Decor */}
				<div className="pointer-events-none absolute inset-0 z-0 opacity-10">
					<div className="absolute top-0 left-0 h-full w-full bg-[url('/images/pattern.svg')] bg-repeat opacity-20" />
					<div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-white blur-[150px]" />
					<div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-black blur-[150px]" />
				</div>

				<div className="container relative z-10 mx-auto px-4 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<motion.h2
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className="mb-8 font-outfit text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
						>
							Ready to Simplify Your <br className="hidden sm:block" /> Business Operations?
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 15 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="mx-auto mb-12 max-w-2xl font-outfit text-lg leading-relaxed text-white/90"
						>
							Join 15+ enterprises and 11,000+ users who already run their entire business on iProfit.
							Start your free trial today — no credit card required.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="flex flex-col items-center justify-center gap-6 sm:flex-row"
						>
							<CTAButton
								href="https://app.iprofit.in/#/pricing"
								variant="white"
							>
								Start Free
							</CTAButton>
							<CTAButton
								href="https://calendly.com/iprofitsales/30min"
								variant="white"
								className="!bg-transparent !border-white/30 !text-white hover:!border-white"
							>
								Book Demo
							</CTAButton>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
							className="mt-12 font-outfit text-sm font-medium tracking-wide text-white/60"
						>
							14-day free trial &middot; No setup fees &middot; Cancel anytime
						</motion.p>
					</div>
				</div>
			</section>
		</>
	);
}
