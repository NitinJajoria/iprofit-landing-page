import Image from "next/image";
import BookDemoButton from "../BookDemoButton";
import GradientFrame from "../GradientFrame";

export default function FinanceAdvantage() {
	return (
		<section className="bg-white px-4 pb-0 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
				{/* Section 1: Real-Time Financial Dashboards */}
				<div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-[140px]">
					{/* Mobile Title */}
					<h3 className="text-center md:text-start order-1 w-full font-inter text-[32px] font-semibold leading-[1.1] tracking-[-0.8px] text-[#111827] sm:text-[40px] lg:hidden">
						Real-Time Financial Dashboards
					</h3>

					{/* Image with Background Frame */}
					<div className="relative order-2 w-full max-w-[480px] lg:max-w-[540px] lg:flex-1">
						<GradientFrame>
							<div className="relative h-full w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
								<Image
									src="/solution/finance-realtime.png"
									alt="Real-Time Financial Dashboards"
									fill
									className="object-contain"
									priority
								/>
							</div>
						</GradientFrame>
					</div>

					{/* Text Content */}
					<div className="order-3 w-full lg:flex-1">
						<h3 className="mb-6 hidden font-inter text-[32px] font-semibold leading-[1.1] tracking-[-0.8px] text-[#111827] sm:text-[40px] lg:block lg:text-[47.1px] lg:leading-[48px] lg:tracking-[-1.2px]">
							Real-Time Financial Dashboards
						</h3>
						<div className="flex flex-col items-center md:items-start mb-10 space-y-4">
							<ul className="space-y-2">
								{[
									"Live balance sheets",
									"Profit & loss statements",
									"Cash flow reports",
									"Ledger summaries",
									"Drill-down MIS reports",
								].map((item, index) => (
									<li
										key={index}
										className="flex items-center gap-3 font-outfit text-[16px] text-[#31373D] lg:text-[19px]"
									>
										<span className="h-1.5 w-1.5 rounded-full bg-[#008ADD]"></span>
										{item}
									</li>
								))}
							</ul>
							<p className="font-outfit text-[16px] font-normal leading-[1.6] text-[#31373D] sm:text-[18px] lg:text-[19px] lg:leading-[40.8px]">
								All updated in real time — no manual closing delays.
							</p>
						</div>
						<div className="flex justify-center md:justify-start w-full">
							<BookDemoButton
								href="https://calendly.com/iprofitsales/30min"
								className="h-[52px] px-10 text-[16px]"
							>
								Book a Demo
							</BookDemoButton>
						</div>
					</div>
				</div>

				{/* Section 2: Integrated with the iProfit Ecosystem */}
				<div className="mt-20 flex flex-col items-center gap-12 lg:mt-[140px] lg:flex-row lg:items-center lg:justify-between lg:gap-[140px]">
					{/* Mobile Title */}
					<h3 className="text-center md:text-start order-1 w-full font-inter text-[32px] font-semibold leading-[1.1] tracking-[-0.8px] text-[#111827] sm:text-[40px] lg:hidden">
						Integrated with the iProfit Ecosystem
					</h3>

					{/* Text Content (Desktop Left) */}
					<div className="order-3 w-full lg:order-2 lg:flex-1">
						<h3 className="mb-6 hidden font-inter text-[32px] font-semibold leading-[1.1] tracking-[-0.8px] text-[#111827] sm:text-[40px] lg:block lg:text-[47.1px] lg:leading-[48px] lg:tracking-[-1.2px]">
							Integrated with the iProfit Ecosystem
						</h3>
						<div className="flex flex-col items-center md:items-start mb-10 space-y-4">
							<p className="text-center md:text-start font-outfit text-[16px] font-medium text-[#080808] lg:text-[19px]">
								Finance works seamlessly with:
							</p>
							<ul className="space-y-2">
								{[
									"Payroll & HRMS",
									"Project management",
									"Inventory & asset management",
									"Vendor and customer management",
								].map((item, index) => (
									<li
										key={index}
										className="flex items-center gap-3 font-outfit text-[16px] text-[#31373D] lg:text-[19px]"
									>
										<span className="h-1.5 w-1.5 rounded-full bg-[#008ADD]"></span>
										{item}
									</li>
								))}
							</ul>
							<p className="font-outfit text-[16px] font-normal leading-[1.6] text-[#31373D] sm:text-[18px] lg:text-[19px] lg:leading-[40.8px]">
								One platform. Zero reconciliation chaos.
							</p>
						</div>
						<div className="flex justify-center md:justify-start w-full">
							<BookDemoButton
								href="https://calendly.com/iprofitsales/30min"
								className="h-[52px] px-10 text-[16px]"
							>
								Book a Demo
							</BookDemoButton>
						</div>
					</div>

					{/* Image without Background Frame (Desktop Right) */}
					<div className="relative order-2 w-full max-w-[480px] lg:order-3 lg:max-w-[540px] lg:flex-1">
						<div className="relative aspect-[540/528] w-full">
							<Image
								src="/solution/finance-integrated.png"
								alt="Integrated Ecosystem"
								fill
								className="object-contain"
							/>
						</div>
					</div>
				</div>

				{/* Section 3: Secure, Cloud-Based & Always Accessible */}
				<div className="mt-20 flex flex-col items-center gap-12 lg:mt-[140px] lg:flex-row lg:items-center lg:justify-between lg:gap-[140px]">
					{/* Mobile Title */}
					<h3 className="text-center md:text-start order-1 w-full font-inter text-[32px] font-semibold leading-[1.1] tracking-[-0.8px] text-[#111827] sm:text-[40px] lg:hidden">
						Secure, Cloud-Based & Always Accessible
					</h3>

					{/* Image with Background Frame */}
					<div className="relative order-2 w-full max-w-[480px] lg:max-w-[540px] lg:flex-1">
						<GradientFrame>
							<div className="relative h-full w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
								<Image
									src="/solution/finance-cloud.png"
									alt="Secure Cloud Access"
									fill
									className="object-contain"
								/>
							</div>
						</GradientFrame>
					</div>

					{/* Text Content */}
					<div className="order-3 w-full lg:flex-1">
						<h3 className="mb-6 hidden font-inter text-[32px] font-semibold leading-[1.1] tracking-[-0.8px] text-[#111827] sm:text-[40px] lg:block lg:text-[47.1px] lg:leading-[48px] lg:tracking-[-1.2px]">
							Secure, Cloud-Based & Always Accessible
						</h3>
						<div className="flex flex-col items-center md:items-start mb-10 space-y-4">
							<ul className="space-y-2">
								{[
									"Secure cloud infrastructure",
									"Role-based access control",
									"Audit-ready financial trails",
									"Access from any device, anywhere",
								].map((item, index) => (
									<li
										key={index}
										className="flex items-center gap-3 font-outfit text-[16px] text-[#31373D] lg:text-[19px]"
									>
										<span className="h-1.5 w-1.5 rounded-full bg-[#008ADD]"></span>
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className="flex justify-center md:justify-start w-full">
							<BookDemoButton
								href="https://calendly.com/iprofitsales/30min"
								className="h-[52px] px-10 text-[16px]"
							>
								Book a Demo
							</BookDemoButton>
						</div>
					</div>
				</div>

				{/* View All Button */}
				{/* <div className="mt-10 text-center sm:mt-14 lg:mt-[70px]">
					<BookDemoButton className="h-[52px] px-12 text-[16px]">
						View All
					</BookDemoButton>
				</div> */}
			</div>
		</section>
	);
}
