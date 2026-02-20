import Image from "next/image";
import Link from "next/link";

const whyItems = [
	{
		id: 1,
		title: "Designed for project-based businesses",
		image: "/IT/IT1.png",
		isBlue: false,
	},
	{
		id: 2,
		title: "Eliminates dependency on multiple tools",
		image: "/IT/IT2.png",
		isBlue: true,
	},
	{
		id: 3,
		title: "Reduces manual work & errors",
		image: "/IT/IT2.png",
		isBlue: true,
	},
	{
		id: 4,
		title: "Improves margin visibility",
		image: "/IT/IT1.png",
		isBlue: false,
	},
	{
		id: 5,
		title: "Scales with your team and client base",
		image: "/IT/IT1.png",
		isBlue: false,
	},
];

export default function IndustryWhy() {
	return (
		<section className="bg-white px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-20">
				{/* Title */}
				<h2
					className="mb-16 text-center text-[32px] leading-[100%] sm:text-[40px] lg:text-[48px]"
					style={{
						fontFamily: "'Outfit', sans-serif",
						fontWeight: 500,
						letterSpacing: "0px",
						color: "#080808",
					}}
				>
					Why IT Services Companies Choose iProfit
				</h2>

				{/* Grid */}
				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
					{whyItems.slice(0, 4).map((item) => (
						<WhyCard key={item.id} {...item} />
					))}
					{/* Centered Bottom Card */}
					<div className="md:col-span-2 flex justify-center">
						<div className="w-full md:w-1/2">
							<WhyCard {...whyItems[4]} />
						</div>
					</div>
				</div>

				{/* Footer Text */}
				<div className="mt-16 lg:mt-24">
					<p
						className="mx-auto max-w-4xl text-center text-[24px] leading-[100%] sm:text-[30px] lg:text-[36px]"
						style={{
							fontFamily: "'Outfit', sans-serif",
							fontWeight: 400,
							letterSpacing: "0px",
							color: "#080808",
						}}
					>
						Whether you&apos;re a 20-person IT firm or a 200+ employee services
						company, iProfit adapts to your growth.
					</p>
				</div>
			</div>
		</section>
	);
}

function WhyCard({
	title,
	image,
	isBlue,
}: {
	title: string;
	image: string;
	isBlue: boolean;
}) {
	return (
		<div
			className={`relative flex min-h-[280px] flex-col justify-between rounded-[40px] border border-black p-8 shadow-[4px_4px_0px_0px_#000000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] sm:p-10 ${
				isBlue ? "bg-[#0085D0]" : "bg-white"
			}`}
		>
			<div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
				{/* Title with Highlight */}
				<div className="max-w-[280px]">
					<h3
						className={`inline-block rounded-[4px] px-2 py-1 text-[22px] sm:text-[26px] lg:text-[30px] ${
							isBlue ? "bg-white text-[#0085D0]" : "bg-[#0085D0] text-white"
						}`}
						style={{
							fontFamily: "'Space Grotesk', sans-serif",
							fontWeight: 500,
							lineHeight: "100%",
							letterSpacing: "0%",
						}}
					>
						{title}
					</h3>
				</div>

				{/* Illustration */}
				<div className="relative h-[120px] w-[150px] self-end sm:h-[170px] sm:w-[210px] sm:self-auto">
					<Image src={image} alt="" fill className="object-contain" />
				</div>
			</div>

			{/* Learn More Link */}
			<Link
				href="https://calendly.com/iprofitsales/30min"
				className="group mt-8 flex items-center gap-3"
			>
				<div
					className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
						isBlue ? "bg-white" : "bg-[#161C2D]"
					}`}
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke={isBlue ? "#0085D0" : "white"}
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M7 17L17 7M17 7H7M17 7V17" />
					</svg>
				</div>
				<span
					className={`text-[16px] font-medium ${isBlue ? "text-white" : "text-[#161C2D]"}`}
					style={{ fontFamily: "'Outfit', sans-serif" }}
				>
					Learn more
				</span>
			</Link>
		</div>
	);
}
