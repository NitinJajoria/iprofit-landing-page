"use client";

// import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";
import {
	HiOutlineCodeBracket,
	HiOutlineCube,
	HiOutlinePaintBrush,
	HiOutlineUserGroup,
	HiOutlineServerStack,
} from "react-icons/hi2";
import CTAButton from "../UI/CTAButton";

// const testimonialCards = [
// 	{
// 		id: 1,
// 		name: "Vishal Sood",
// 		role: "CEO - AlmaBay",
// 		image: "/vishalsood.jpg",
// 		description:
// 			"CEO of AlmaBay with experience in building and scaling technology-driven platforms. Focused on product strategy, partnerships, and business growth.",
// 		link: "https://www.linkedin.com/in/vishal-sood-3b41b720/?originalSubdomain=in",
// 	},
// 	{
// 		id: 2,
// 		name: "Vikram R. Singh",
// 		role: "CEO - Antier",
// 		image: "/vikramsingh.jpg",
// 		description:
// 			"CEO of Antier with extensive experience in blockchain, fintech, and enterprise technology solutions. Leads global teams delivering large-scale digital transformation.",
// 		link: "https://www.linkedin.com/in/vikramrsingh/?originalSubdomain=in",
// 	},
// 	{
// 		id: 3,
// 		name: "Maninder Bajwa",
// 		role: "CEO & Founder",
// 		image: "/maninderbajwa.jpg",
// 		description:
// 			"Founder and CEO with experience in building and scaling IT services and consulting companies. Specializes in enterprise solutions and strategic leadership.",
// 		link: "https://www.linkedin.com/in/manindersinghbajwa/?originalSubdomain=in",
// 	},
// ];

const audiences = [
	{
		title: "IT Service Companies",
		description:
			"Manage projects, timesheets, invoicing, and payroll for your delivery teams.",
		icon: HiOutlineCodeBracket,
	},
	{
		title: "Software & SaaS Companies",
		description:
			"Track product development costs, manage subscriptions, and automate operations.",
		icon: HiOutlineCube,
	},
	{
		title: "Digital Agencies",
		description:
			"Handle client billing, project profitability, and team allocation from one place.",
		icon: HiOutlinePaintBrush,
	},
	{
		title: "IT Consulting Firms",
		description:
			"Streamline bench management, resource allocation, and consultant payroll.",
		icon: HiOutlineUserGroup,
	},
	{
		title: "Managed IT Services",
		description:
			"Track inventory, assets, SLAs, and field team productivity in real time.",
		icon: HiOutlineServerStack,
	},
];

const FadeInUp = ({
	children,
	delay = 0,
}: {
	children: React.ReactNode;
	delay?: number;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.6, delay, ease: "easeOut" }}
	>
		{children}
	</motion.div>
);

export default function WhoUses({ }: {
	title?: string;
	subtitle?: string;
	showIndustries?: boolean;
	isTestimonial?: boolean;
}) {
	// Default mode: homepage "Who It's For" section
	return (
		<section className="relative bg-[#FAFBFF] py-10">
			<div className="container z-10 mx-auto px-6 lg:px-20">
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
								Whether you are 10 people or 250, if you have outgrown Excel and
								Tally — iProfit is your next step.
							</p>
							<CTAButton
								href="https://app.iprofit.in/#/pricing"
								variant="primary"
							>
								Start Free Trial
							</CTAButton>
						</FadeInUp>
					</div>

					{/* Right: Audience Cards */}
					<div className="space-y-4 lg:w-[60%]">
						{audiences.map((item, i) => (
							<FadeInUp key={i} delay={i * 0.1}>
								<div className="group flex items-start gap-4 h-full rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#008ADD] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#008ADD] group-hover:text-white">
										<item.icon className="h-6 w-6" />
									</div>
									<div>
										<h3 className="mb-1 font-outfit text-xl font-bold text-[#0F172A] transition-colors group-hover:text-[#008ADD]">
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
				</div>
			</div>
		</section>
	);
}
