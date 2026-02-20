"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
	{
		id: 1,
		author: "Vishal Sood",
		position: "CEO, AlmaBay",
		company: "AlmaBay",
		quote: "iProfit cleaned up our entire operations — finance, inventory, payroll — everything runs smooth now. We finally have one place to see how the business is actually doing.",
		image: "/Testimonials/vishal.png",
		rating: 5,
	},
	{
		id: 2,
		author: "Maninder Bajwa",
		position: "Founder & CEO",
		company: "iScuela",
		quote: "Scaling our educational platform required a robust back-end for HR and Finance. iProfit provided exactly that. The automation level in payroll is unmatched.",
		image: "/Testimonials/maninderbajwa.jpg",
		rating: 5,
	},
	{
		id: 3,
		author: "Vikram Singh",
		position: "Managing Director",
		company: "V-Trans",
		quote: "Managing logistics and assets was a nightmare before iProfit. Now, we track everything in real-time. The productivity gains have been significant for our entire team.",
		image: "/Testimonials/vikramsingh.jpg",
		rating: 5,
	},
];

// Inline Icon Components for zero dependencies
const QuoteIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
		<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 1.5-1 4-3 6" />
		<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 1.5-1 4-3 6" />
	</svg>
);

const StarIcon = ({ size = 16, fill = "currentColor" }: { size?: number; fill?: string }) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={fill} />
	</svg>
);

const ArrowLeftIcon = ({ size = 24 }: { size?: number }) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M19 12H5M5 12L12 19M5 12L12 5" />
	</svg>
);

const ArrowRightIcon = ({ size = 24 }: { size?: number }) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M5 12H19M19 12L12 5M19 12L12 19" />
	</svg>
);

export default function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const nextTestimonial = () => {
		setDirection(1);
		setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
	};

	const prevTestimonial = () => {
		setDirection(-1);
		setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
	};

	const activeTestimonial = TESTIMONIALS[activeIndex];

	const getRelativeIndex = (offset: number) => {
		return (activeIndex + offset + TESTIMONIALS.length) % TESTIMONIALS.length;
	};

	const variants: any = {
		enter: (dir: number) => ({
			opacity: 0,
			x: dir > 0 ? 50 : -50,
			scale: 0.95
		}),
		center: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: { duration: 0.5, ease: "easeOut" }
		},
		exit: (dir: number) => ({
			opacity: 0,
			x: dir > 0 ? -50 : 50,
			scale: 0.95,
			transition: { duration: 0.3, ease: "easeIn" }
		})
	};

	return (
		<section className="relative overflow-hidden bg-[#F8FBFF] py-10 lg:py-20">
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
				<div
					className="absolute bottom-1/4 right-0 w-[60%] h-[60%] rounded-full blur-[120px]"
					style={{ background: "radial-gradient(circle, rgba(0, 138, 221, 0.1) 0%, rgba(248, 251, 255, 0) 70%)" }}
				/>
			</div>

			<div className="container relative z-10 mx-auto px-4 lg:px-8">
				<div className="mx-auto mb-16 max-w-4xl text-center lg:mb-20">
					<motion.span
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-4 inline-block font-outfit text-xs font-black uppercase tracking-[0.3em] text-[#008ADD]"
					>
						CLIENT STORIES
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="mb-6 font-outfit text-3xl font-bold leading-[1.2] text-[#0D1117] sm:text-4xl lg:text-5xl"
					>
						Trusted by Industry Leaders
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="mx-auto max-w-2xl font-outfit text-base text-[#6B7280] sm:text-lg"
					>
						Discover how iProfit is helping businesses automate operations and drive significant growth.
					</motion.p>
				</div>

				<div className="grid gap-12 lg:grid-cols-12 lg:items-center">
					<div className="hidden lg:col-span-3 lg:flex flex-col gap-8 justify-center">
						<motion.div
							onClick={() => { setDirection(-1); setActiveIndex(getRelativeIndex(-1)); }}
							className="group cursor-pointer flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl opacity-60 hover:opacity-100"
							whileHover={{ x: -10 }}
						>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl grayscale group-hover:grayscale-0 transition-all shadow-md">
								<Image
									src={TESTIMONIALS[getRelativeIndex(-1)].image}
									alt="Previous"
									fill
									className="object-cover"
								/>
							</div>
							<div className="min-w-0">
								<h4 className="truncate font-outfit text-sm font-bold text-[#0D1117]">{TESTIMONIALS[getRelativeIndex(-1)].author}</h4>
								<p className="truncate text-[10px] uppercase tracking-wider text-[#6B7280]">{TESTIMONIALS[getRelativeIndex(-1)].company}</p>
							</div>
						</motion.div>

						<div className="relative pl-4">
							<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008ADD] rounded-full" />
							<div className="flex items-center gap-4 p-6 rounded-2xl border border-[#008ADD]/20 bg-white shadow-2xl">
								<div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg ring-4 ring-[#008ADD]/5">
									<Image
										src={activeTestimonial.image}
										alt="Active"
										fill
										className="object-cover"
									/>
								</div>
								<div className="min-w-0">
									<h4 className="truncate font-outfit text-base font-bold text-[#0D1117]">{activeTestimonial.author}</h4>
									<div className="flex gap-0.5 mt-1 text-[#F59E0B]">
										{[...Array(5)].map((_, i) => <StarIcon key={i} size={12} fill="#F59E0B" />)}
									</div>
								</div>
							</div>
						</div>

						<motion.div
							onClick={() => { setDirection(1); setActiveIndex(getRelativeIndex(1)); }}
							className="group cursor-pointer flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl opacity-60 hover:opacity-100"
							whileHover={{ x: -10 }}
						>
							<div className="relative h-16 w-16 overflow-hidden rounded-xl grayscale group-hover:grayscale-0 transition-all shadow-md">
								<Image
									src={TESTIMONIALS[getRelativeIndex(1)].image}
									alt="Next"
									fill
									className="object-cover"
								/>
							</div>
							<div className="min-w-0">
								<h4 className="truncate font-outfit text-sm font-bold text-[#0D1117]">{TESTIMONIALS[getRelativeIndex(1)].author}</h4>
								<p className="truncate text-[10px] uppercase tracking-wider text-[#6B7280]">{TESTIMONIALS[getRelativeIndex(1)].company}</p>
							</div>
						</motion.div>
					</div>

					<div className="lg:col-span-4 [perspective:1000px]">
						<AnimatePresence mode="wait" custom={direction}>
							<motion.div
								key={activeIndex}
								custom={direction}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,138,221,0.25)] ring-1 ring-gray-100"
							>
								<Image
									src={activeTestimonial.image}
									alt={activeTestimonial.author}
									fill
									className="object-cover"
									priority
								/>
								<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 lg:hidden text-center">
									<h3 className="font-outfit text-xl font-bold text-white">{activeTestimonial.author}</h3>
									<p className="text-sm text-white/70">{activeTestimonial.position}</p>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					<div className="lg:col-span-5 lg:pl-12">
						<div className="relative">
							<motion.div
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="hidden lg:block absolute -top-20 left-0 pointer-events-none opacity-10"
							>
								<QuoteIcon size={80} className="text-[#008ADD]" />
							</motion.div>

							<AnimatePresence mode="wait" custom={direction}>
								<motion.div
									key={activeIndex}
									custom={direction}
									variants={variants}
									initial="enter"
									animate="center"
									exit="exit"
									className="space-y-8"
								>
									<p className="font-outfit text-2xl font-medium italic leading-relaxed text-[#0D1117] md:text-2xl text-center lg:text-left">
										&ldquo;{activeTestimonial.quote}&rdquo;
									</p>

									<div className="text-center lg:text-left">
										<h3 className="font-outfit text-2xl font-bold text-[#0D1117]">{activeTestimonial.author}</h3>
										<p className="font-outfit text-base font-medium text-[#008ADD]">{activeTestimonial.position}</p>
										<div className="mt-4 flex justify-center lg:justify-start gap-1 text-[#F59E0B]">
											{[...Array(5)].map((_, i) => <StarIcon key={i} size={20} fill="#F59E0B" />)}
										</div>
									</div>
								</motion.div>
							</AnimatePresence>

							<div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
								<button
									onClick={prevTestimonial}
									className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0D1117] shadow-lg transition-all hover:bg-[#008ADD] hover:text-white hover:border-[#008ADD]"
									aria-label="Previous testimonial"
								>
									<span className="group-hover:-translate-x-1 transition-transform">
										<ArrowLeftIcon size={24} />
									</span>
								</button>
								<button
									onClick={nextTestimonial}
									className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0D1117] shadow-lg transition-all hover:bg-[#008ADD] hover:text-white hover:border-[#008ADD]"
									aria-label="Next testimonial"
								>
									<span className="group-hover:translate-x-1 transition-transform">
										<ArrowRightIcon size={24} />
									</span>
								</button>

								<div className="ml-4 flex gap-2">
									{TESTIMONIALS.map((_, idx) => (
										<button
											key={idx}
											onClick={() => { setDirection(idx > activeIndex ? 1 : -1); setActiveIndex(idx); }}
											className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-[#008ADD]" : "w-2 bg-gray-200 hover:bg-gray-300"}`}
											aria-label={`Go to testimonial ${idx + 1}`}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
