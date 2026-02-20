import Image from "next/image";
import Link from "next/link";

const CheckIcon = () => (
	<svg
		width="12"
		height="12"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<polyline points="20 6 9 17 4 12" />
	</svg>
);

const plans = [
	{
		name: "Starter",
		price: "0",
		originalPrice: "00",
		period: "/per month",
		description: "Perfect for first-time users.",
		features: [
			"1 Child Profile",
			"5 Custom Tasks",
			"Basic Point System",
			"Limited Task History",
			"Access to Rewards Store (Basic)",
			"Weekly Progress Reports",
			"No card required",
			"Great for testing the waters",
		],
		buttonText: "Start Free",
		isDark: false,
		icon: "/P1.png",
	},
	{
		name: "Growth",
		price: "299",
		originalPrice: "399",
		period: "/per month",
		description: "Includes everything in Starter, plus:",
		features: [
			"Up to 3 Child Profiles",
			"Unlimited Tasks & Goals",
			"Task Reminders & Voice Assistant",
			"Savings & Donation Goals",
			"Sibling Performance Comparison",
			"Monthly Reports + Insights",
			"Priority Email Support",
			"₹299/month or ₹2,999/year (Save 17%)",
		],
		buttonText: "Upgrade Now",
		isDark: false,
		icon: "/P2.png",
	},
	{
		name: "Enterprise",
		price: "4,999",
		originalPrice: "6999",
		period: "/per year",
		description: "Everything in Family Plus, and:",
		features: [
			"Up to 6 Child Profiles",
			"Advanced Behavior Analytics",
			"Customizable Rewards Store",
			"Real Money Transfers & Razorpay Wallet",
			"Parent-Child Chat & Motivational Nudges",
			"Premium Themes & Interface",
			"Invite-only Challenges & Badges",
			"Dedicated Support Access",
		],
		buttonText: "Get Premium Access",
		isDark: true,
		icon: "/P3.png",
	},
];

export default function PricingCards() {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
			{plans.map((plan, index) => (
				<div
					key={index}
					className={`relative flex flex-col overflow-hidden rounded-[24px] p-6 text-left transition-all hover:shadow-xl lg:rounded-[32px] lg:p-8 ${
						plan.isDark ? "bg-black text-white" : "bg-[#FFFFFF] text-[#101828]"
					}`}
					style={
						plan.isDark
							? {
									boxShadow: "0px 106.67px 106.67px -71.11px #4C567314",
								}
							: {}
					}
				>
					{/* Enterprise Background Vectors */}
					{plan.isDark && (
						<div className="absolute inset-0 pointer-events-none overflow-hidden">
							<div
								className="absolute -left-10 -right-10 -top-10 h-[300px] opacity-100 sm:h-[400px] lg:h-[460px]"
								style={{
									maskImage:
										"radial-gradient(120% 100% at 50% 0%, black 55%, transparent 100%)",
									WebkitMaskImage:
										"radial-gradient(120% 100% at 50% 0%, black 55%, transparent 100%)",
								}}
							>
								<Image
									src="/Background.png"
									alt="Background Gradient"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					)}

					<div className="relative z-10 flex flex-1 flex-col">
						<div className="mb-6">
							<div className="relative h-10 w-10 lg:h-12 lg:w-12">
								<Image
									src={plan.icon}
									alt={`${plan.name} Icon`}
									fill
									className="object-contain"
								/>
							</div>
						</div>
						<h3
							className="mb-4 font-medium text-[20px] leading-tight tracking-[-0.57px] lg:text-[26.67px] lg:leading-[35.56px]"
							style={{
								fontFamily: "'SF Pro Display', sans-serif",
								color: plan.isDark ? "#FCFCFD" : "#101828",
							}}
						>
							{plan.name}
						</h3>
						<div className="mb-4 flex items-baseline gap-2">
							<span
								className="font-medium text-[32px] leading-tight tracking-[-0.85px] lg:text-[42.67px] lg:leading-[49.78px]"
								style={{ fontFamily: "'SF Pro Display', sans-serif" }}
							>
								₹{plan.price}
							</span>
							<span
								className="font-medium text-[14px] leading-tight tracking-[-0.21px] line-through opacity-50 lg:text-[16px] lg:leading-[23.11px]"
								style={{ fontFamily: "'Inter', sans-serif" }}
							>
								₹{plan.originalPrice}
							</span>
							<span
								className="font-normal text-[11px] leading-tight tracking-[-0.37px] opacity-70 lg:text-[12.44px] lg:leading-[17.78px]"
								style={{
									fontFamily: "'SF Pro Text', sans-serif",
									color: plan.isDark ? "#9CA3AF" : "#475467",
								}}
							>
								{plan.period}
							</span>
						</div>
						<p
							className="mb-8 font-normal text-[14px] leading-relaxed tracking-[-0.32px] opacity-80 lg:text-[16px] lg:leading-[23.11px]"
							style={{
								fontFamily: "'SF Pro Display', sans-serif",
								color: plan.isDark ? "#9CA3AF" : "#101828",
							}}
						>
							{plan.description}
						</p>

						<ul className="mb-10 space-y-3 lg:space-y-4">
							{plan.features.map((feature, fIndex) => (
								<li key={fIndex} className="flex items-center gap-3">
									<div
										className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full lg:h-5 lg:w-5 ${plan.isDark ? "bg-white text-black" : "bg-black text-white"}`}
									>
										<CheckIcon />
									</div>
									<span
										className="font-normal text-[13px] leading-tight tracking-[-0.14px] lg:text-[14.22px] lg:leading-[21.33px]"
										style={{
											fontFamily: "'SF Pro Display', sans-serif",
											color: plan.isDark ? "#FFFFFF" : "#101828",
										}}
									>
										{feature}
									</span>
								</li>
							))}
						</ul>

						<div className="mt-auto">
							<Link
								href="https://calendly.com/iprofitsales/30min"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button
									className={`w-full rounded-xl py-3 font-medium transition-all lg:py-4 cursor-pointer ${
										plan.isDark
											? "bg-white text-black hover:bg-gray-100"
											: "text-white hover:opacity-90"
									}`}
									style={{
										fontFamily: "'HK Grotesk', sans-serif",
										fontSize: "16px",
										lineHeight: "1.2",
										letterSpacing: "0%",
										...(!plan.isDark
											? {
													background: "linear-gradient(0deg, #0D0D0D, #0D0D0D)",
													border: "0.89px solid #6941C6",
													boxShadow: `
                      0px 0.89px 1.78px 0px #1018280D,
                      inset 1.78px 1.78px 2.67px 0px #C6B4EE80,
                      inset -1.78px -1.78px 3.56px 0px #582ABB7D,
                      0px 10.67px 21.33px 0px #7732FF33
                    `,
												}
											: {}),
									}}
								>
									{plan.buttonText}
								</button>
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
