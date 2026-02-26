import Image from "next/image";
import Link from "next/link";

const testimonialCards = [
	{
		id: 1,
		name: "Vishal Sood",
		role: "CEO - AlmaBay",
		image: "/vishalsood.jpg",
		description:
			"CEO of AlmaBay with experience in building and scaling technology-driven platforms. Focused on product strategy, partnerships, and business growth.",
		link: "https://www.linkedin.com/in/vishal-sood-3b41b720/?originalSubdomain=in",
	},
	{
		id: 2,
		name: "Vikram R. Singh",
		role: "CEO - Antier",
		image: "/vikramsingh.jpg",
		description:
			"CEO of Antier with extensive experience in blockchain, fintech, and enterprise technology solutions. Leads global teams delivering large-scale digital transformation.",
		link: "https://www.linkedin.com/in/vikramrsingh/?originalSubdomain=in",
	},
	{
		id: 3,
		name: "Maninder Bajwa",
		role: "CEO & Founder",
		image: "/maninderbajwa.jpg",
		description:
			"Founder and CEO with experience in building and scaling IT services and consulting companies. Specializes in enterprise solutions and strategic leadership.",
		link: "https://www.linkedin.com/in/manindersinghbajwa/?originalSubdomain=in",
	},
];

const audiences = [
	{
		title: "IT Service Companies",
		description: "Manage projects, timesheets, invoicing, and payroll for your delivery teams.",
	},
	{
		title: "Software & SaaS Companies",
		description: "Track product development costs, manage subscriptions, and automate operations.",
	},
	{
		title: "Digital Agencies",
		description: "Handle client billing, project profitability, and team allocation from one place.",
	},
	{
		title: "IT Consulting Firms",
		description: "Streamline bench management, resource allocation, and consultant payroll.",
	},
	{
		title: "Managed IT Services",
		description: "Track inventory, assets, SLAs, and field team productivity in real time.",
	},
];

export default function WhoUses({
	title = "Who Uses iProfit",
	subtitle = "Designed for growing IT Companies (10-250 employees)",
	showIndustries = true,
	isTestimonial = false,
}: {
	title?: string;
	subtitle?: string;
	showIndustries?: boolean;
	isTestimonial?: boolean;
}) {
	// Testimonial mode (used by other pages)
	if (isTestimonial) {
		return (
			<section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
					<div className="mb-16 text-center lg:mb-24">
						<span
							className="mb-4 block font-outfit text-[13px] font-semibold uppercase tracking-[0.15em] text-[#008ADD]"
						>
							{title}
						</span>
						<h2 className="mx-auto max-w-3xl font-manrope text-[32px] font-extrabold leading-[48px] text-[#000000] sm:text-[36px] lg:text-[40px]">
							{subtitle}
						</h2>
					</div>

					<div className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto gap-6 pb-8 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-x-visible lg:grid-cols-3">
						{testimonialCards.map((item) => (
							<div
								key={item.id}
								className="flex w-[300px] shrink-0 snap-center flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:w-full sm:shrink"
							>
								<div className="relative mb-6 flex items-center gap-4">
									<div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
										<Image
											src={item.image}
											alt={item.name}
											fill
											className="object-cover"
										/>
									</div>
									<div className="flex-1">
										<h4 className="font-outfit text-[16px] font-semibold text-[#0D1117] lg:text-[18px]">
											{item.name}
										</h4>
										<p className="mt-1 font-outfit text-[14px] text-[#6B7280] lg:text-[15px]">
											{item.role}
										</p>
									</div>
									<div className="absolute right-0 top-0">
										<Link href={item.link} target="_blank">
											<div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-black">
												<Image
													src="/Testimonials/linkedin.png"
													alt="LinkedIn"
													width={24}
													height={24}
													className="h-full w-full object-contain"
												/>
											</div>
										</Link>
									</div>
								</div>
								<div className="mb-6 h-[1px] w-full bg-gray-100" />
								<p className="font-outfit text-[14px] leading-[1.6] text-[#6B7280] lg:text-[15px]">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}

	// Default mode: homepage "Who It's For" section
	return (
		<section className="bg-white py-16 sm:py-20 lg:py-24">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-5xl">
					<div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
						{/* Left: header content */}
						<div className="lg:w-[40%] lg:sticky lg:top-32">
							<span className="mb-4 inline-block font-outfit text-[13px] font-semibold uppercase tracking-[0.15em] text-[#008ADD]">
								Who It&apos;s For
							</span>
							<h2 className="mb-5 font-outfit text-[28px] font-semibold leading-[1.15] text-[#0D1117] sm:text-[36px]">
								Designed for Growing IT Companies
							</h2>
							<p className="mb-6 font-outfit text-[16px] leading-[1.7] text-[#6B7280]">
								Whether you are 10 people or 250, if you have outgrown Excel and Tally — iProfit is your next step.
							</p>
							<Link
								href="https://app.iprofit.in/#/pricing"
								className="inline-flex h-[48px] items-center justify-center rounded-xl bg-[#008ADD] px-8 font-outfit text-[14px] font-semibold text-white shadow-[0_4px_14px_rgba(0,138,221,0.3)] transition-all hover:bg-[#0077C2] sm:text-[15px]"
							>
								Start Free Trial
							</Link>
						</div>

						{/* Right: audience cards */}
						<div className="space-y-4 lg:w-[60%]">
							{audiences.map((item, i) => (
								<div
									key={i}
									className="flex items-start gap-4 rounded-xl border border-gray-100 bg-[#FAFBFC] p-5 transition-all hover:border-[#008ADD]/15 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-6"
								>
									<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#008ADD]/10 font-outfit text-[13px] font-bold text-[#008ADD]">
										{i + 1}
									</div>
									<div>
										<h3 className="mb-1 font-outfit text-[16px] font-semibold text-[#0D1117] sm:text-[17px]">
											{item.title}
										</h3>
										<p className="font-outfit text-[14px] leading-[1.6] text-[#6B7280]">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
