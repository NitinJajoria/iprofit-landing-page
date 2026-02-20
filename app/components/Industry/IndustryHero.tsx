import Image from "next/image";
import PageHeroBackground from "../PageHeroBackground";
import BookDemoButton from "../BookDemoButton";

export default function IndustryHero() {
	return (
		<section className="relative min-h-[800px] w-full bg-white px-4 pb-0 sm:px-6 lg:px-8">
			<PageHeroBackground backgroundColor="#F8FAFC" bottomRadius="100px" />

			<div className="relative z-10 mx-auto max-w-[1400px] pt-24 text-center lg:pt-32">
				{/* Main Heading */}
				<h1
					className="mx-auto mb-4 max-w-4xl text-[32px] sm:text-[40px] lg:text-[48px]"
					style={
						{
							fontFamily: "'Outfit', sans-serif",
							fontWeight: 600,
							lineHeight: "1.2", // Fallback for mobile
							"--desktop-lh": "80px",
						} as any
					}
				>
					<span className="lg:leading-[var(--desktop-lh)]">
						One Platform to Manage Projects People & Profits
					</span>
				</h1>

				{/* Subtext */}
				<p
					className="mx-auto mb-6 max-w-3xl text-[16px] sm:text-[18px] lg:text-[19px]"
					style={
						{
							fontFamily: "'Outfit', sans-serif",
							fontWeight: 400,
							lineHeight: "1.6", // Fallback for mobile
							"--desktop-lh": "40.8px",
						} as any
					}
				>
					<span className="lg:leading-[var(--desktop-lh)]">
						Built for growing IT services companies that need clarity, control,
						and compliance —without juggling multiple tools.
					</span>
				</p>

				{/* Social Proof */}
				<div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<div className="relative h-10 w-[140px]">
						<Image
							src="/ToolUsers.png"
							alt="Users"
							fill
							className="object-contain"
						/>
					</div>
					<div className="flex flex-col items-center sm:items-start">
						<div className="flex gap-0.5">
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="#FFB800"
								>
									<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
								</svg>
							))}
						</div>
						<p
							style={{
								fontFamily: "'Inter', sans-serif",
								fontWeight: 500,
								fontSize: "14px",
								lineHeight: "22.4px",
								color: "#111827",
							}}
						>
							loved by 200+ customers
						</p>
					</div>
				</div>

				{/* CTA Button */}
				<div className="mb-8">
					<BookDemoButton
						href="https://calendly.com/iprofitsales/30min"
						className="h-[56px] px-10 sm:h-[64px] sm:px-12"
						style={{
							fontFamily: "'Outfit', sans-serif",
							fontWeight: 500,
							fontSize: "16px",
							lineHeight: "100%",
						}}
					>
						Book a Free Demo
					</BookDemoButton>
				</div>

				{/* Video/Image Section */}
				<div className="relative mx-auto max-w-[1057px] overflow-hidden rounded-[24px] shadow-2xl lg:rounded-[40px]">
					<div className="relative aspect-[1057/640] w-full">
						<Image
							src="/TestImage.png"
							alt="Industry Dashboard"
							fill
							className="object-cover"
						/>
						{/* Play Button Overlay */}
						<div className="absolute inset-0 flex items-center justify-center">
							<button className="group relative h-20 w-20 transition-transform hover:scale-110">
								<Image
									src="/PlayButton.png"
									alt="Play Video"
									fill
									className="object-contain"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
