import Image from "next/image";
import BookDemoButton from "../BookDemoButton";
import GradientFrame from "../GradientFrame";

export default function FinanceInventory() {
	return (
		<section className="relative overflow-hidden px-4 pt-0 pb-0 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-[1233px] space-y-16 sm:space-y-24 lg:space-y-32">
				{/* Finance Account Section */}
				<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-[60px]">
					{/* Title - Order 1 */}
					<h2 className="order-1 text-center md:text-start font-outfit text-[32px] font-semibold leading-tight text-[#080808] sm:text-[40px] lg:col-start-1 lg:row-start-1 lg:text-[48px] lg:leading-[1.2]">
						Finance Account
					</h2>

					{/* Image - Order 2 on mobile, Right side on desktop */}
					<div className="order-2 w-full lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:flex-1">
						<div className="mx-auto max-w-[540px]">
							<GradientFrame aspectRatio="aspect-[540/528]">
								<div className="relative h-full w-full">
									<Image
										src="/advantage/finance.png"
										alt="Finance Account Dashboard"
										fill
										className="object-contain"
									/>
								</div>
							</GradientFrame>
						</div>
					</div>

					{/* Description & CTA - Order 3 & 4 */}
					<div className="relative order-3 flex flex-col lg:col-start-1 lg:row-start-2 lg:block">
						{/* Background Glow behind text */}
						<div
							className="absolute -left-[20%] -top-[100%] -z-10 hidden lg:block"
							style={{
								width: "811px",
								height: "479px",
								background: "#EFF9FF",
								filter: "blur(99.2px)",
								opacity: 1,
								borderRadius: "50%",
							}}
						/>
						<p className="text-center md:text-start mb-10 max-w-[460px] font-outfit text-[16px] font-normal leading-[1.6] text-[#31373D] sm:text-[18px] lg:text-[19px] lg:leading-[30px]">
							Easily prioritize feature requests using a customizable framework.
							Sort, filter, and collaborate on high-priority items to streamline
							your product roadmap and meet customer expectations efficiently.
						</p>
						<div className="w-full flex justify-center order-4">
							<BookDemoButton
								href="https://calendly.com/iprofitsales/30min"
								className="h-[54px] px-8 text-[16px] font-medium"
							>
								See Finance Demo
							</BookDemoButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
