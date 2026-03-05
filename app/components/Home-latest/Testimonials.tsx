"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
	{
		id: 1,
		author: "Vishal Sood",
		position: "CEO, AlmaBay",
		company: "AlmaBay",
		quote:
			"iProfit cleaned up our entire operations — finance, inventory, payroll — everything runs smooth now. We finally have one place to see how the business is actually doing.",
		image: "/Testimonials/vishal.png",
		rating: 5,
	},
	{
		id: 2,
		author: "Maninder Bajwa",
		position: "Founder & CEO",
		company: "iScuela",
		quote:
			"Scaling our educational platform required a robust back-end for HR and Finance. iProfit provided exactly that. The automation level in payroll is unmatched.",
		image: "/Testimonials/maninderbajwa.jpg",
		rating: 5,
	},
	{
		id: 3,
		author: "Vikram Singh",
		position: "Managing Director",
		company: "V-Trans",
		quote:
			"Managing logistics and assets was a nightmare before iProfit. Now, we track everything in real-time. The productivity gains have been significant for our entire team.",
		image: "/Testimonials/vikramsingh.jpg",
		rating: 5,
	},
];

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1,
		);
	};

	const currentTestimonial = TESTIMONIALS[currentIndex];

	return (
		<section className="bg-white py-10">
			<div className="container mx-auto px-4">
				{/* Header Section */}
				<div className="mx-auto mb-16 max-w-4xl text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
						className="mb-3 inline-block font-outfit text-sm font-semibold uppercase tracking-[0.2em] text-[#008ADD]"
					>
						Client Stories
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mb-5 font-manrope font-extrabold leading-[1.15] tracking-tight text-[#0D1117] text-[32px] sm:text-[40px] lg:text-[50px]"
					>
						Trusted by Industry Leaders
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="max-w-2xl mx-auto font-outfit text-lg leading-relaxed text-[#4B5563] sm:text-xl"
					>
						Discover how iProfit is helping businesses automate operations and
						drive significant growth.
					</motion.p>
				</div>

				{/* Testimonial Card and Navigation */}
				<div className="relative mx-auto max-w-4xl">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-12"
						>
							<div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
								{/* Author Image */}
								<div className="mb-6 shrink-0 md:mb-0 md:mr-8">
									<Image
										src={currentTestimonial.image}
										alt={currentTestimonial.author}
										width={100}
										height={100}
										className="h-32 w-32 rounded-3xl object-cover shadow-md"
									/>
								</div>

								{/* Testimonial Content */}
								<div>
									{/* Star Rating */}
									<div className="mb-3 flex justify-center md:justify-start">
										{[...Array(currentTestimonial.rating)].map((_, i) => (
											<Star
												key={i}
												className="h-5 w-5 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>

									{/* Quote */}
									<p className="mb-6 font-manrope text-xl font-semibold leading-relaxed text-[#0D1117] md:text-2xl line-clamp-3">
										&ldquo;{currentTestimonial.quote}&rdquo;
									</p>

									{/* Author Info */}
									<p className="font-manrope text-lg font-bold text-[#0D1117]">
										{currentTestimonial.author}
									</p>
									<p className="font-outfit text-sm text-[#6B7280]">
										{currentTestimonial.position}, {currentTestimonial.company}
									</p>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Navigation Controls */}
					<div className="mt-12 flex items-center justify-center space-x-4">
						{/* Navigation Arrows */}
						<div className="flex space-x-4">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={handlePrev}
								className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-all hover:border-[#008ADD]/30 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#008ADD]/50"
							>
								<ChevronLeft className="h-6 w-6 text-[#0D1117]" />
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={handleNext}
								className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-all hover:border-[#008ADD]/30 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#008ADD]/50"
							>
								<ChevronRight className="h-6 w-6 text-[#0D1117]" />
							</motion.button>
						</div>

						{/* Pagination Dots */}
						<div className="flex space-x-2">
							{TESTIMONIALS.map((_, index) => (
								<motion.button
									key={index}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									onClick={() => setCurrentIndex(index)}
									className={`h-2 w-2 rounded-full transition-all duration-300 ${
										index === currentIndex ? "w-8 bg-[#008ADD]" : "bg-gray-300"
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
