"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
	{
		name: "Navdeep Monga",
		role: "CFO",
		image: "/Team/Navdeep Monga.jpg",
		linkedin:
			"https://www.linkedin.com/in/navdeep-monga-9795b517/?trk=public_profile_browsemap&originalSubdomain=in",
		twitter: "#",
	},
	{
		name: "Karamvir Rao",
		role: "CTO",
		image: "/Team/Karamvir Rao.jpg",
		linkedin:
			"https://www.linkedin.com/in/karmvir-rao-1115b91b9?originalSubdomain=in",
		twitter: "#",
	},
	{
		name: "Nitin Monga",
		role: "FOUNDER",
		image: "/Team/Nitin Monga.jpg",
		linkedin: "https://www.linkedin.com/in/nitinmonga19/?originalSubdomain=in",
		twitter: "#",
	},
	{
		name: "Vikram Monga",
		role: "CO-FOUNDER",
		image: "/Team/Vikram Monga.png",
		linkedin:
			"https://www.linkedin.com/in/vikram-monga-0a462947/?originalSubdomain=ca",
		twitter: "#",
	},
	{
		name: "Sufi Pasricha",
		role: "GROWTH HEAD",
		image: "/Team/Sufi Pasricha.png",
		linkedin:
			"https://www.linkedin.com/in/sufi-pasricha-2b100718a/?originalSubdomain=in",
		twitter: "#",
	},
	{
		name: "Kangna Galhotra",
		role: "BUSINESS ANALYST",
		image: "/Team/Kangna Galhotra.jpeg",
		linkedin:
			"https://www.linkedin.com/in/kangna-galhotra-005534224?trk=contact-info",
		twitter: "#",
	},
];

export default function TeamMembers() {
	return (
		<section className="bg-white py-10 md:py-20">
			<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-4 text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#080808]"
					style={{ fontFamily: "'Urbanist', sans-serif", lineHeight: "100%" }}
				>
					Team
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-8 md:mb-16 text-[18px] sm:text-[20px] lg:text-[22px] text-[#4E4E4E]"
					style={{
						fontFamily: "'Outfit', sans-serif",
						fontWeight: 400,
						lineHeight: "40.8px",
					}}
				>
					Hello, we are 8i.
				</motion.p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-16 ">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="flex flex-col items-center text-center"
						>
							<div className="relative mb-6 h-[280px] w-[280px] overflow-hidden rounded-full border-2 border-[#E5E7EB] p-2">
								<div className="relative h-full w-full overflow-hidden rounded-full">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="object-cover transition-transform duration-500 hover:scale-110"
									/>
								</div>
							</div>
							<h3
								className="mb-2 text-[24px] font-bold text-[#080808]"
								style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}
							>
								{member.name}
							</h3>
							<p
								className="mb-4 text-[14px] font-normal uppercase tracking-[0.1em] text-[#4E4E4E]"
								style={{ fontFamily: "'Outfit', sans-serif" }}
							>
								{member.role}
							</p>
							<div className="flex items-center gap-4">
								<Link
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
									className="transition-transform hover:scale-110"
								>
									<Image
										src="/Team/Linkedin.png"
										alt="LinkedIn"
										width={24}
										height={24}
									/>
								</Link>
								{/* <Link href={member.twitter} className="transition-transform hover:scale-110">
                  <Image
                    src="/Team/Twitter.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </Link> */}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
