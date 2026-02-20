"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "../UI/CTAButton";

const highlights = [
	{
		title: "Unified System",
		description: "Run all core operations without switching tools.",
		image: "/Why/W1.png",
	},
	{
		title: "Made for India",
		description: "GST-ready, payroll-ready, compliant by design.",
		image: "/Why/W2.png",
	},
	{
		title: "Easy to Use",
		description: "Clear UI, fast onboarding, no technical setup.",
		image: "/Why/W3.png",
	},
	{
		title: "Scales with You",
		description: "Start with one module, add more anytime.",
		image: "/Why/W4.png",
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

export default function Why() {
	return (
		<section id="why" className="relative bg-white py-12 lg:py-20 overflow-hidden">
			<div className="container mx-auto px-6">
				{/* The Large Rounded Container */}
				<div className="relative rounded-[3rem] lg:rounded-[5rem] bg-[#F0F9FF] p-10 lg:p-24 overflow-hidden">

					{/* Header */}
					<div className="relative z-10 mb-16 text-center">
						<FadeInUp>
							<h2 className="mb-6 font-outfit text-[32px] font-bold leading-tight text-[#0F172A] sm:text-[40px] lg:text-[48px]">
								Why iprofit - Everything you need to run <br /> your business in one place.
							</h2>
							<p className="mx-auto max-w-2xl font-outfit text-lg font-medium leading-relaxed text-slate-500/80">
								iProfit helps you manage finance, HR, inventory, assets, and projects with ease and clarity
							</p>
						</FadeInUp>
					</div>

					{/* Grid */}
					<div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{highlights.map((item, idx) => (
							<FadeInUp key={item.title} delay={idx * 0.1}>
								<div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
									{/* Image Area */}
									<div className="relative aspect-[4/3] w-full overflow-hidden">
										<Image
											src={item.image}
											alt={item.title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-110"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
									</div>

									{/* Text Area */}
									<div className="flex flex-1 flex-col p-8 text-center items-center">
										<h3 className="mb-3 font-outfit text-2xl font-bold text-[#0F172A]">
											{item.title}
										</h3>
										<p className="font-outfit text-sm font-medium leading-relaxed text-slate-500">
											{item.description}
										</p>
									</div>
								</div>
							</FadeInUp>
						))}
					</div>

					{/* Footer CTA */}
					<div className="relative z-10 mt-16 flex justify-center">
						<FadeInUp delay={0.4}>
							<CTAButton href="/contact" variant="primary" className="px-10 h-12 text-sm font-bold">
								Book a Live Demo
							</CTAButton>
						</FadeInUp>
					</div>

					{/* Subtle Background decoration */}
					<div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl" />
					<div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-blue-100/20 blur-3xl" />
				</div>
			</div>
		</section>
	);
}
