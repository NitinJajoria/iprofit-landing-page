"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import CTAButton from "../UI/CTAButton";

export default function Hero() {
	const clients = [
		{ name: "Microsoft Azure", src: "/client/logo1.png" },
		{ name: "HDFC Bank", src: "/client/logo2.png" },
		{ name: "IndusInd Bank", src: "/client/logo3.png" },
		{ name: "Client 4", src: "/client/logo4.png" },
		{ name: "Client 5", src: "/client/logo5.png" },
		{ name: "Client 6", src: "/client/logo6.png" },
		{ name: "Client 7", src: "/client/logo7.png" },
		{ name: "Client 8", src: "/client/logo8.png" },
		{ name: "Client 9", src: "/client/logo9.png" },
	];

	const items = [...clients, ...clients, ...clients];

	return (
		<section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#F0F9FF] to-[#E0F2FE] py-10 xl:pt-32">
			{/* Soft Radial Gradients */}
			<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
				<div
					className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full blur-[120px] opacity-40"
					style={{
						background:
							"radial-gradient(circle, rgba(0, 138, 221, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
					}}
				/>
				<div
					className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[100px] opacity-30"
					style={{
						background:
							"radial-gradient(circle, rgba(0, 138, 221, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
					}}
				/>
			</div>

			<div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto flex max-w-5xl flex-col items-center text-center">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#008ADD]/20 bg-[#F0F9FF] px-4 py-1.5 backdrop-blur-sm"
					>
						<span className="font-outfit text-sm font-medium tracking-wide text-[#008ADD]">
							Made in India, Made for the world
						</span>
					</motion.div>

					{/* Headline */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mb-6 font-outfit text-4xl font-bold leading-[1.1] tracking-tight text-[#0D1117] sm:text-5xl lg:text-6xl xl:text-7xl"
					>
						Stop Juggling Tools. <br />
						<span className="bg-gradient-to-r from-[#008ADD] to-[#005f99] bg-clip-text text-transparent">
							Run Everything
						</span>{" "}
						from One Place.
					</motion.h1>

					{/* Sub-headline */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mb-10 max-w-2xl font-outfit text-lg font-normal leading-relaxed text-[#4B5563] sm:text-xl"
					>
						iProfit unifies Finance, HR & Payroll, Inventory, Projects, and
						Assets into a single ERP so your team spends less time on admin and
						more time growing.
					</motion.p>

					{/* CTAs */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
					>
						<CTAButton
							href="https://app.iprofit.in/#/pricing"
							variant="primary"
							className="h-14 w-full px-8 text-base sm:w-auto"
						>
							Start Free Today
						</CTAButton>
						<button
							onClick={() =>
								window.open("https://calendly.com/iprofitsales/30min", "_blank")
							}
							className="group flex h-14 w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 font-outfit text-base font-semibold text-[#0D1117] transition-all hover:border-[#008ADD]/30 hover:bg-gray-50 hover:shadow-lg sm:w-auto cursor-pointer"
						>
							<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008ADD]/10 text-[#008ADD] transition-transform group-hover:scale-110">
								<Play className="h-4 w-4 fill-current" />
							</div>
							Watch Demo
						</button>
					</motion.div>

					{/* Social Proof Bar */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.6 }}
						className="w-full border-t border-gray-100 text-center"
					>
						{/* <p className="mb-8 font-outfit text-xs font-semibold uppercase tracking-[0.2em] text-[#008ADD]">
							Trusted by growing companies across India
						</p> */}
						<div className="relative overflow-hidden">
							{/* Gradient Masks for Logo Carousel */}
							<div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
							<div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

							<motion.div
								className="flex w-max items-center gap-x-16"
								animate={{ x: ["0%", "-50%"] }}
								transition={{
									ease: "linear",
									duration: 35,
									repeat: Infinity,
								}}
							>
								{items.map((client, index) => (
									<div
										key={index}
										className="relative h-8 w-32 shrink-0 sm:h-10 sm:w-40"
									>
										<Image
											src={client.src}
											alt={client.name}
											fill
											className="object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
										/>
									</div>
								))}
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
