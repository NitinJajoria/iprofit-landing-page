"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	HiOutlineCodeBracket,
	HiOutlineCube,
	HiOutlinePaintBrush,
	HiOutlineUserGroup,
	HiOutlineServerStack
} from "react-icons/hi2";
import CTAButton from "../UI/CTAButton";

const testimonialCards = [
	{
		id: 1,
		name: "Vishal Sood",
		role: "CEO - AlmaBay",
		image: "/vishalsood.jpg",
		description:
			"CEO of AlmaBay with experience in building and scaling technology-driven platforms. Focused on product strategy, partnerships, and business growth.",
		link: "https://www.linkedin.com/in/vishal-sood-3b41b720/?originalSubdomain=in",
	},
	{
		id: 2,
		name: "Vikram R. Singh",
		role: "CEO - Antier",
		image: "/vikramsingh.jpg",
		description:
			"CEO of Antier with extensive experience in blockchain, fintech, and enterprise technology solutions. Leads global teams delivering large-scale digital transformation.",
		link: "https://www.linkedin.com/in/vikramrsingh/?originalSubdomain=in",
	},
	{
		id: 3,
		name: "Maninder Bajwa",
		role: "CEO & Founder",
		image: "/maninderbajwa.jpg",
		description:
			"Founder and CEO with experience in building and scaling IT services and consulting companies. Specializes in enterprise solutions and strategic leadership.",
		link: "https://www.linkedin.com/in/manindersinghbajwa/?originalSubdomain=in",
	},
];

const audiences = [
	{
		title: "IT Service Companies",
		description: "Manage projects, timesheets, invoicing, and payroll for your delivery teams.",
		icon: HiOutlineCodeBracket,
	},
	{
		title: "Software & SaaS Companies",
		description: "Track product development costs, manage subscriptions, and automate operations.",
		icon: HiOutlineCube,
	},
	{
		title: "Digital Agencies",
		description: "Handle client billing, project profitability, and team allocation from one place.",
		icon: HiOutlinePaintBrush,
	},
	{
		title: "IT Consulting Firms",
		description: "Streamline bench management, resource allocation, and consultant payroll.",
		icon: HiOutlineUserGroup,
	},
	{
		title: "Managed IT Services",
		description: "Track inventory, assets, SLAs, and field team productivity in real time.",
		icon: HiOutlineServerStack,
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

export default function WhoUses({
	title = "Who Uses iProfit",
	subtitle = "Designed for growing IT Companies (10-250 employees)",
	showIndustries = true,
	isTestimonial = false,
}: {
	title?: string;
	subtitle?: string;
	showIndustries?: boolean;
	isTestimonial?: boolean;
}) {
	// Testimonial mode (used by other pages)
	if (isTestimonial) {
		return (
			<section className="relative bg-white py-10 lg:py-16 overflow-hidden">
				<div className="container relative z-10 mx-auto px-6 lg:px-20">
					<div className="mb-16 text-center lg:mb-24">
						<FadeInUp>
							<span className="mb-4 block font-outfit text-sm font-black uppercase tracking-[0.2em] text-[#008ADD]">
								{title}
							</span>
							<h2 className="mx-auto max-w-3xl font-outfit text-[32px] font-bold leading-tight text-[#0F172A] sm:text-[40px] lg:text-[48px]">
								{subtitle}
							</h2>
						</FadeInUp>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{testimonialCards.map((item, idx) => (
							<FadeInUp key={item.id} delay={idx * 0.1}>
								<div className="group flex h-full flex-col rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">
									<div className="relative mb-8 flex items-center gap-5">
										<div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl shadow-md border-2 border-white">
											<Image
												src={item.image}
												alt={item.name}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-110"
											/>
										</div>
										<div className="flex-1">
											<h4 className="font-outfit text-lg font-bold text-[#0F172A]">
												{item.name}
											</h4>
											<p className="font-outfit text-sm font-medium text-slate-500">
												{item.role}
											</p>
										</div>
										<Link
											href={item.link}
											target="_blank"
											className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all hover:bg-[#0077B5] hover:text-white"
										>
											<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
												<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
											</svg>
										</Link>
									</div>
									<div className="mb-6 h-px w-full bg-gradient-to-r from-slate-100 to-transparent" />
									<p className="font-outfit text-base font-medium leading-relaxed text-slate-500">
										&quot;{item.description}&quot;
									</p>
								</div>
							</FadeInUp>
						))}
					</div>
				</div>
			</section>
		);
	}

	// Default mode: homepage "Who It's For" section
	return (
		<section className="relative bg-[#FAFBFF] py-10 lg:py-16 overflow-hidden">
			<div className="container relative z-10 mx-auto px-6 lg:px-20">
				<div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">

					{/* Left: Content */}
					<div className="lg:sticky lg:top-32 lg:w-[40%]">
						<FadeInUp>
							<span className="mb-4 inline-block font-outfit text-sm font-black uppercase tracking-[0.2em] text-[#008ADD]">
								Who It&apos;s For
							</span>
							<h2 className="mb-6 font-outfit text-[36px] font-bold leading-tight text-[#0F172A] sm:text-[44px]">
								Designed for Growing IT Companies
							</h2>
							<p className="mb-10 font-outfit text-lg font-medium leading-relaxed text-slate-500/80">
								Whether you are 10 people or 250, if you have outgrown Excel and Tally — iProfit is your next step.
							</p>
							<CTAButton
								href="https://app.iprofit.in/#/pricing"
								variant="primary"
							>
								Start Free Trial
							</CTAButton>
						</FadeInUp>
					</div>

					{/* Right: Audience Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-[60%]">
						{audiences.map((item, i) => (
							<FadeInUp key={i} delay={i * 0.1}>
								<div className="group h-full rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1">
									<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#008ADD] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#008ADD] group-hover:text-white">
										<item.icon className="h-6 w-6" />
									</div>
									<h3 className="mb-3 font-outfit text-xl font-bold text-[#0F172A] transition-colors group-hover:text-[#008ADD]">
										{item.title}
									</h3>
									<p className="font-outfit text-sm font-medium leading-relaxed text-slate-500">
										{item.description}
									</p>
								</div>
							</FadeInUp>
						))}
					</div>
				</div>
			</div>

			{/* Background decorations */}
			<div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-50/50 blur-[100px]" />
			<div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-50/50 blur-[100px]" />
		</section>
	);
}
