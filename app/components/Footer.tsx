"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const footerLinks = [
	{
		title: "iProfit",
		links: [
			{ name: "Pricing", href: "/pricing" },
			{ name: "Team", href: "/team" },
			{ name: "Blog", href: "/blog" },
			{ name: "Contact Us", href: "/contact" },
		],
	},
	{
		title: "Industries",
		links: [
			{ name: "IT Companies", href: "/industries/it-companies" },
			{ name: "E-Governance", href: "/industries/egovernance" },
			{ name: "MSMEs & Startups", href: "/industries/msmes-startups" },
		],
	},
	{
		title: "Our Solutions",
		links: [
			{ name: "Payroll Management", href: "/payroll" },
			{ name: "Finance & Accounting", href: "/finance-accounting" },
			{ name: "Asset Management", href: "/asset-management" },
			{ name: "Inventory Management", href: "/inventory-management" },
			{ name: "Project Management", href: "/project-management" },
		],
	},
];

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

export default function Footer() {
	const pathname = usePathname();
	const isTransparentPage = pathname === "/pricing" || pathname === "/contact";

	return (
		<footer
			className={`relative z-10 px-4 py-10 sm:px-6 lg:px-8 ${isTransparentPage ? "bg-transparent" : "bg-white"}`}
		>
			<div className="mx-auto max-w-[1400px]">
				<div className="rounded-[40px] bg-[#111111] p-8 sm:p-12 lg:p-20">
					{/* Top Section: Newsletter */}
					{/* <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-outfit text-[40px] font-medium leading-[1.1] text-white sm:text-[48px] lg:text-[56px]">
                Keep up with the latest
              </h2>
              <p className="mt-6 font-inter text-[16px] font-bold text-[#9CA3AF] lg:text-[18px]">
                Join our newsletter to stay upto date on features and realeases.
              </p>
            </div>

            <div className="w-full max-w-md">
              <p className="mb-4 font-inter text-[14px] font-medium text-white">
                Stay up to date
              </p>
              <div className="relative flex w-full items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[56px] w-full rounded-full bg-[#222222] pl-6 pr-[110px] font-inter text-[14px] text-white outline-none placeholder:text-[#6B7280] focus:ring-2 focus:ring-white/20 sm:pr-[130px] sm:text-[16px]"
                />
                <button className="absolute right-1.5 h-[46px] rounded-full bg-white px-5 font-inter text-[14px] font-bold text-black transition-transform hover:scale-105 active:scale-95 sm:px-8 sm:text-[16px]">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 font-inter text-[12px] text-[#6B7280]">
                By subscribing you agree to our{" "}
                <Link href="#" className="text-white underline underline-offset-4">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div> */}

					{/* Divider */}
					{/* <div className="my-16 h-[1px] w-full bg-white/10 lg:my-24" /> */}

					{/* Bottom Section: Links */}
					<div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
						{/* Brand Info */}
						<div className="max-w-[240px]">
							<h3 className="font-outfit text-[24px] font-bold text-white">
								iProfit
							</h3>
							<p className="mt-4 font-inter text-[14px] leading-relaxed text-[#9CA3AF]">
								Make your complicated business operations simple.
							</p>

							{/* Socials */}
							<div className="mt-6 flex gap-4">
								{socials.map((social) => (
									<Link
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										<social.icon className="h-6 w-6 text-white transition-colors hover:text-gray-400" />
									</Link>
								))}
							</div>
						</div>

						{/* Links Grid */}
						<div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
							{footerLinks.map((group, index) => (
								<div
									key={group.title}
									className={index === 2 ? "col-span-2 md:col-span-1" : ""}
								>
									<h4 className="mb-6 font-inter text-[14px] font-bold text-white">
										{group.title}
									</h4>
									<ul className="space-y-4">
										{group.links.map((link) => (
											<li key={link.name}>
												<Link
													href={link.href}
													className="font-inter text-[14px] text-[#9CA3AF] transition-colors hover:text-white"
												>
													{link.name}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
