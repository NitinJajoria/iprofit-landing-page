import Image from "next/image";
import PageHeroBackground from "../PageHeroBackground";
import BookDemoButton from "../BookDemoButton";

export default function ProjectHero() {
	return (
		<section className="relative min-h-screen w-full bg-white px-2 pb-2 sm:px-4 sm:pb-4">
			<PageHeroBackground />

			<div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-28 pb-10 sm:px-12 lg:px-20 lg:pt-36">
				<div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
					{/* Left Content */}
					<div className="max-w-2xl lg:flex-1">
						<div className="mb-8 inline-flex p-[1px] rounded-full bg-gradient-to-b from-[#008ADD] to-[#F0F5FF]">
							<div className="bg-white rounded-full px-6 py-2">
								<span className="font-outfit text-[18px] font-normal leading-[150%] text-[#008ADD] sm:text-[24px]">
									Project Management Software
								</span>
							</div>
						</div>

						<h1 className="mb-8 font-outfit text-[32px] font-semibold leading-tight text-[#080808] sm:text-[40px] lg:text-[48px] lg:leading-[80px]">
							Efficient Project Planning &{" "}
							<span className="font-medium">On-Time Delivery</span>
						</h1>

						<p className="max-w-xl font-outfit text-[16px] font-normal leading-[1.6] text-[#31373D] sm:text-[18px] lg:text-[19px] lg:leading-[40.8px]">
							Deliver projects on time and within budget with iProfit’s Project
							Management software. Plan, allocate, track, and monitor projects
							seamlessly with real-time collaboration, financial control, and
							integrated reporting. Designed for organizations that need
							clarity, accountability, and execution control across multiple
							projects.
						</p>
					</div>

					{/* Right Content: Form */}
					<div className="w-full max-w-[480px] lg:flex-1">
						<div className="p-0 sm:p-4">
							<h2 className="mb-8 text-center font-outfit text-[32px] font-bold leading-none text-[#080808] sm:text-[40px]">
								Get Started in Minutes
							</h2>

							<form className="space-y-5">
								<div>
									<input
										type="email"
										placeholder="Work Mail"
										className="h-[60px] w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-6 font-manrope text-[16px] outline-none transition-all focus:border-[#008ADD] focus:ring-2 focus:ring-[#008ADD]/10"
									/>
								</div>
								<div>
									<input
										type="tel"
										placeholder="Mobile Number"
										className="h-[60px] w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-6 font-manrope text-[16px] outline-none transition-all focus:border-[#008ADD] focus:ring-2 focus:ring-[#008ADD]/10"
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="Number of Employees"
										className="h-[60px] w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-6 font-manrope text-[16px] outline-none transition-all focus:border-[#008ADD] focus:ring-2 focus:ring-[#008ADD]/10"
									/>
								</div>

								<p className="font-outfit text-[12px] font-normal leading-none text-[#6B7280]">
									By providing your information, you hereby consent to the HROne
									Cookie Policy and Privacy Policy.
								</p>

								<BookDemoButton className="h-[64px] w-full text-[18px] font-bold">
									Start Free Trial
								</BookDemoButton>
							</form>

							{/* Social Proof */}
							<div className="mt-8 flex items-center justify-center gap-4">
								<div className="relative h-10 w-[140px]">
									<Image
										src="/ToolUsers.png"
										alt="Users"
										fill
										className="object-contain"
									/>
								</div>
								<div className="flex flex-col">
									<div className="flex gap-0.5">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="#FFB800"
											>
												<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
											</svg>
										))}
									</div>
									<p className="text-[13px] font-medium text-[#4B5563]">
										loved by 200+ customers
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
