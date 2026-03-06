"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const modules = [
	{
		title: "Finance & Accounting",
		bulletPoints: [
			"GST-compliant invoicing",
			"Real-time cash flow tracking",
			"Automated reconciliation",
		],
		image: "/landing-page/finance-img.png",
		href: "/finance-accounting",
	},
	{
		title: "Asset Management",
		bulletPoints: [
			"Asset lifecycle tracking",
			"Allocation & utilization reports",
			"Depreciation management",
		],
		image: "/landing-page/asset-img.png",
		href: "/asset-management",
	},

	{
		title: "Project Management",
		bulletPoints: [
			"Resource allocation & planning",
			"Time & cost tracking",
			"Margin analysis per project",
		],
		image: "/landing-page/task-img.png",
		href: "/project-management",
	},
	{
		title: "Inventory Management",
		bulletPoints: [
			"Multi-warehouse tracking",
			"Low-stock alerts",
			"Purchase order automation",
		],
		image: "/landing-page/inventory-img.png",
		href: "/inventory-management",
	},
	{
		title: "HRMS & Payroll",
		bulletPoints: [
			"Attendance & leave management",
			"One-click payroll processing",
			"Statutory compliance built-in",
		],
		image: "/landing-page/hrms-img.png",
		href: "/payroll",
	},
];

export default function Why() {
	return (
		<section className="bg-white py-10 md:py-16 relative overflow-hidden">
			{/* Decorative background accent */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
				<div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px]" />
				<div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-slate-50 rounded-full blur-[100px]" />
			</div>

			<div className="container mx-auto px-10 relative z-10">
				{/* Refined Header */}
				<div className="mx-auto mb-20 max-w-7xl text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
					<div className="lg:max-w-[60%]">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008ADD]/5 border border-[#008ADD]/10">
								<span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#008ADD]">
									The Ecosystem
								</span>
							</div>
							<h2 className="font-outfit font-bold leading-[1.1] tracking-tight text-[#0A0A0B] text-[32px] sm:text-[40px] lg:text-[50px]">
								One Platform. <br />
								<span className="text-[#008ADD]">Infinite Possibilities.</span>
							</h2>
						</motion.div>
					</div>
					<div className="lg:max-w-[35%] lg:pb-3">
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="font-outfit text-lg leading-relaxed text-slate-500"
						>
							Every module is natively integrated. No APIs, no bridges, just a
							single source of truth for your entire operation.
						</motion.p>
					</div>
				</div>

				{/* Premium Bento Grid */}
				<div className="mx-auto max-w-7xl">
					{/* Top row: Featured modules */}
					<div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
						{modules.slice(0, 2).map((mod, i) => (
							<motion.div
								key={mod.title}
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
							>
								<Link
									href={mod.href}
									className="group block relative h-full overflow-hidden rounded-3xl border border-[#F0F9FF] bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#008ADD]/10 hover:-translate-y-2 hover:border-[#008ADD]/20"
								>
									{/* Interactive Background */}
									<div className="absolute inset-0 bg-gradient-to-br from-[#008ADD]/0 via-transparent to-[#008ADD]/0 group-hover:from-[#008ADD]/5 group-hover:to-transparent transition-all duration-700" />

									<div className="flex flex-col h-full relative z-10">
										<div className="p-8 sm:p-10">
											<h3 className="mb-4 font-outfit text-2xl font-bold text-[#0D1117] sm:text-3xl transition-colors group-hover:text-[#008ADD]">
												{mod.title}
											</h3>
											<ul className="space-y-3">
												{mod.bulletPoints.map((point, idx) => (
													<li
														key={idx}
														className="flex items-center text-slate-500 font-medium font-outfit text-sm sm:text-base"
													>
														<div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#008ADD]/10 text-[#008ADD]">
															<svg
																className="h-3 w-3"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																strokeWidth="3"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	d="M5 13l4 4L19 7"
																/>
															</svg>
														</div>
														{point}
													</li>
												))}
											</ul>
										</div>

										{/* High-fidelity image mock */}
										<div className="mt-auto px-6 pb-0 group-hover:px-4 transition-all duration-500">
											<div className="relative aspect-square w-full overflow-hidden rounded-t-2xl">
												<Image
													src={mod.image}
													alt={mod.title}
													fill
													className="object-cover transition-transform duration-700 group-hover:scale-105"
												/>
												{/* UI overlay element */}
												<div className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
													<svg
														className="h-5 w-5 text-[#008ADD]"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M14 5l7 7m0 0l-7 7m7-7H3"
														/>
													</svg>
												</div>
											</div>
										</div>
									</div>
								</Link>
							</motion.div>
						))}
					</div>

					{/* Bottom row: Expanded capabilities grid */}
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{modules.slice(2, 5).map((mod, i) => (
							<motion.div
								key={mod.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
							>
								<Link
									href={mod.href}
									className="group flex flex-col h-full p-8 rounded-3xl border border-slate-100 bg-[#F0F9FF] transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 hover:border-[#008ADD]/10"
								>
									{/* <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:bg-[#008ADD] group-hover:text-white transition-all duration-500 group-hover:scale-110">
										<svg
											className="h-7 w-7 transition-colors"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
											/>
										</svg>
									</div> */}
									<h3 className="mb-4 font-outfit text-xl font-bold text-[#0D1117] group-hover:text-[#008ADD] transition-colors">
										{mod.title}
									</h3>

									<ul className="mb-6 space-y-3 flex-1">
										{mod.bulletPoints.map((point, idx) => (
											<li
												key={idx}
												className="flex items-center text-slate-500 font-medium font-outfit text-xs sm:text-sm"
											>
												<div className="mr-2 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#008ADD]/10 text-[#008ADD]">
													<svg
														className="h-2.5 w-2.5"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="3"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M5 13l4 4L19 7"
														/>
													</svg>
												</div>
												{point}
											</li>
										))}
									</ul>

									{/* High-fidelity image mock */}
									<div className="mt-auto pb-0 group-hover:px-4 transition-all duration-500">
										<div className="relative aspect-square w-full overflow-hidden rounded-t-2xl">
											<Image
												src={mod.image}
												alt={mod.title}
												fill
												className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
											/>
											{/* UI overlay element */}
											<div className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
												<svg
													className="h-5 w-5 text-[#008ADD]"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M14 5l7 7m0 0l-7 7m7-7H3"
													/>
												</svg>
											</div>
										</div>
									</div>

									{/* <div className="mt-auto flex items-center text-xs font-bold text-[#008ADD] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
										LEARN MORE{" "}
										<svg
											className="ml-1 h-3 w-3"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="3"
										>
											<path d="M13 7l5 5m0 0l-5 5m5-5H6" />
										</svg>
									</div> */}
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
