"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
	{ id: 1, src: "/client/logo1.png", alt: "Client 1" },
	{ id: 2, src: "/client/logo2.png", alt: "Client 2" },
	{ id: 3, src: "/client/logo3.png", alt: "Client 3" },
	{ id: 4, src: "/client/logo4.png", alt: "Client 4" },
	{ id: 5, src: "/client/logo5.png", alt: "Client 5" },
	{ id: 6, src: "/client/logo6.png", alt: "Client 6" },
	{ id: 7, src: "/client/logo7.png", alt: "Client 7" },
	{ id: 8, src: "/client/logo8.png", alt: "Client 8" },
	{ id: 9, src: "/client/logo9.png", alt: "Client 9" },
];

const items = [...clients, ...clients, ...clients];

export default function Clients() {
	return (
		<section className="bg-white py-10 sm:py-14">
			<div className="container mx-auto px-4">
				<p className="mb-8 text-center font-outfit text-[13px] font-medium uppercase tracking-[0.1em] text-[#9CA3AF] sm:text-[14px]">
					Trusted by growing companies across India
				</p>

				<div className="relative overflow-hidden">
					<div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
					<div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

					<motion.div
						className="flex w-max items-center gap-x-14"
						animate={{ x: ["0%", "-50%"] }}
						transition={{
							ease: "linear",
							duration: 40,
							repeat: Infinity,
						}}
					>
						{items.map((client, index) => (
							<div
								key={`${client.id}-${index}`}
								className="flex w-[110px] shrink-0 items-center justify-center opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:w-[140px]"
							>
								<Image
									src={client.src}
									alt={client.alt}
									width={140}
									height={60}
									className="h-auto w-full object-contain"
									priority={index < clients.length}
								/>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
