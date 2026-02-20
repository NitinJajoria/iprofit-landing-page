"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import BookDemoButton from "./BookDemoButton";
import MobileMenu from "./MobileMenu";

const navItems = [
	{
		label: "Our Solutions",
		href: "#",
		children: [
			{ label: "Payroll Management", href: "/payroll" },
			{ label: "Finance & Accounting", href: "/finance-accounting" },
			{ label: "Asset Management", href: "/asset-management" },
			{ label: "Inventory Management", href: "/inventory-management" },
			{ label: "Project Management", href: "/project-management" },
		],
	},
	{ label: "Pricing", href: "/pricing" },
	{
		label: "Industries",
		href: "#",
		children: [
			{ label: "IT Companies", href: "/industries/it-companies" },
			{ label: "eGovernance", href: "/industries/egovernance" },
			{ label: "MSMEs & Startups", href: "/industries/msmes-startups" },
		],
	},
	{ label: "Team", href: "/team" },
	{ label: "Contact Us", href: "/contact" },
	{ label: "Blog", href: "/blog" },
];

export default function Header() {
	const pathname = usePathname();
	const isTransparentPage =
		pathname === "/payroll" ||
		pathname === "/finance-accounting" ||
		pathname === "/asset-management" ||
		pathname === "/inventory-management" ||
		pathname === "/project-management" ||
		pathname.startsWith("/industries") ||
		pathname === "/team" ||
		pathname === "/pricing" ||
		pathname === "/contact" ||
		pathname.startsWith("/blog");

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const controlNavbar = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", controlNavbar);
		return () => window.removeEventListener("scroll", controlNavbar);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${isScrolled
					? "bg-white/80 shadow-sm backdrop-blur-md"
					: isTransparentPage
						? "bg-transparent"
						: "bg-white"
				}`}
		>
			<div className="relative flex w-full items-center justify-between gap-6 pl-4 sm:pl-8 md:pl-12 lg:pl-[79px] pr-4 sm:pr-6 md:pr-10 lg:pr-20 py-2 lg:py-2.5">
				<Link href="/" aria-label="iProfit Home" className="shrink-0">
					<Image
						src="/iprofitlogo.svg"
						alt="iProfit"
						width={140}
						height={40}
						sizes="(max-width: 480px) 90px, (max-width: 640px) 100px, (max-width: 768px) 110px, (max-width: 1024px) 120px, (max-width: 1280px) 130px, 140px"
						className="h-auto w-[90px] min-[480px]:w-[100px] sm:w-[110px] md:w-[120px] lg:w-[130px] xl:w-[140px]"
						priority
					/>
				</Link>

				<div className="hidden items-center gap-6 xl:flex 2xl:gap-[67px]">
					<nav aria-label="Main">
						<ul className="flex items-center gap-5 xl:gap-6 2xl:gap-12 font-manrope text-[15px] lg:text-[16px] font-medium text-black leading-none tracking-normal">
							{navItems.map((item) => {
								const isActive =
									pathname === item.href ||
									item.children?.some((child) => pathname === child.href);
								return (
									<li key={item.label} className="group relative py-3">
										<Link
											href={item.href}
											className={`flex items-center gap-1 transition-colors hover:text-[#008ADD] ${isActive ? "text-[#008ADD]" : "text-black"
												}`}
										>
											{item.label}
											{item.children && (
												<svg
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="transition-transform group-hover:rotate-180"
												>
													<path d="m6 9 6 6 6-6" />
												</svg>
											)}
										</Link>
										{item.children && (
											<div className="absolute left-0 top-full hidden w-64 pt-2 group-hover:block">
												<div className="rounded-lg border border-gray-100 bg-white p-2 shadow-lg">
													{item.children.map((child) => (
														<Link
															key={child.href}
															href={child.href}
															className={`block rounded-md px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-[#008ADD] ${pathname === child.href
																	? "bg-gray-50 text-[#008ADD]"
																	: "text-gray-700"
																}`}
														>
															{child.label}
														</Link>
													))}
												</div>
											</div>
										)}
									</li>
								);
							})}
						</ul>
					</nav>
				</div>

				<div className="hidden xl:flex items-center gap-3 2xl:gap-5">
					<Link
						href="https://app.iprofit.in/#/login"
						className="inline-flex h-9 items-center justify-center rounded-full border border-[#D1D5DB] px-5 font-hk-grotesk text-[14px] font-medium text-[#374151] transition-colors hover:bg-gray-50 2xl:h-10 2xl:px-8 2xl:text-[15px]"
					>
						Login
					</Link>
					<BookDemoButton
						href="https://calendly.com/iprofitsales/30min"
						className="h-9 px-5 text-[14px] 2xl:h-10 2xl:px-8 2xl:text-[15px]"
					/>
				</div>

				<MobileMenu items={navItems} />
			</div>
		</header>
	);
}
