"use client";

import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function ContactHero() {
	const socials = [
		{
			icon: FaXTwitter,
			name: "X",
			href: "https://x.com/iProfitin",
		},
		{
			icon: FaInstagram,
			name: "Instagram",
			href: "https://www.instagram.com/iprofitin/",
		},
		{
			icon: FaLinkedin,
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/iprofit-pvt-ltd/",
		},
	];
	return (
		<section className="relative pt-32 pb-10 md:pb-20">
			<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row lg:justify-between">
					{/* Left Content */}
					<div className="w-full lg:w-[85%]">
						<p className="mb-2 font-outfit text-[14px] sm:text-[16px] font-medium text-[#4E4E4E]">
							Get Started
						</p>

						<h1 className="mb-16 max-w-5xl text-[#080808] font-outfit font-medium text-[42px] sm:text-[64px] lg:text-[78px] leading-[1.1] tracking-[-1.5px] sm:tracking-[-2.5px] lg:tracking-[-3.6px]">
							Get in touch with us.
							<br />
							We&apos;re here to assist you.
						</h1>

						{/* Form */}
						<form className="space-y-12">
							<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
								<div className="relative">
									<label className="block font-outfit text-[14px] sm:text-[16px] font-medium text-[#4E4E4E] mb-2">
										Your Name
									</label>
									<input
										type="text"
										className="w-full border-b border-[#E5E7EB] bg-transparent py-2 outline-none focus:border-black transition-colors"
									/>
								</div>
								<div className="relative">
									<label className="block font-outfit text-[14px] sm:text-[16px] font-medium text-[#4E4E4E] mb-2">
										Email Address
									</label>
									<input
										type="email"
										className="w-full border-b border-[#E5E7EB] bg-transparent py-2 outline-none focus:border-black transition-colors"
									/>
								</div>
								<div className="relative">
									<label className="block font-outfit text-[14px] sm:text-[16px] font-medium text-[#4E4E4E] mb-2">
										Phone Number (optional)
									</label>
									<input
										type="tel"
										className="w-full border-b border-[#E5E7EB] bg-transparent py-2 outline-none focus:border-black transition-colors"
									/>
								</div>
							</div>

							<div className="relative">
								<label className="block font-outfit text-[14px] sm:text-[16px] font-medium text-[#4E4E4E] mb-2">
									Message
								</label>
								<textarea
									rows={1}
									className="w-full border-b border-[#E5E7EB] bg-transparent py-2 outline-none focus:border-black transition-colors resize-none"
								/>
							</div>

							<button
								type="submit"
								className="group flex items-center gap-3 border border-black px-8 py-3 font-outfit text-[12px] sm:text-[14px] font-bold uppercase tracking-wider transition-all hover:bg-black hover:text-white"
							>
								Leave a Message
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
								>
									<line x1="7" y1="17" x2="17" y2="7"></line>
									<polyline points="7 7 17 7 17 17"></polyline>
								</svg>
							</button>
						</form>
					</div>

					{/* Right Social Icons */}
					<div className="mt-12 flex flex-row gap-4 lg:mt-0 lg:flex-col lg:gap-6">
						{socials.map((social) => (
							<Link
								key={social.name}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								<social.icon className="h-6 w-6 text-black transition-colors hover:text-gray-400" />
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
