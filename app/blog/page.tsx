// import Link from "next/link";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import type { PostListItem } from "@/sanity/types";
import FeaturedPostCard from "@/app/components/Blog/FeaturedPostCard";
import RecentPostCard from "@/app/components/Blog/RecentPostCard";
import CaseStudyCard from "@/app/components/Blog/CaseStudyCard";
import PricingBackground from "@/app/components/Pricing/PricingBackground";

export const metadata: Metadata = {
	title: "Blog | iProfit",
	description:
		"Insights, product updates, and practical guidance from iProfit.",
};

export const revalidate = 60;

export default async function BlogPage() {
	const posts = await sanityFetch<PostListItem[]>({
		query: postsQuery,
		tags: ["post"],
	});

	const featuredPosts = posts.filter((post) => post.isFeatured);
	const recentPosts = posts.filter(
		(post) => !post.isFeatured && !post.isCaseStudy,
	);
	const caseStudies = posts.filter((post) => post.isCaseStudy);

	return (
		<div className="relative overflow-hidden">
			<PricingBackground />
			<section className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 pb-24 pt-28 sm:pt-32">
				{/* Popular Articles Section */}
				{featuredPosts.length > 0 && (
					<div className="flex flex-col gap-10">
						<header className="flex flex-col gap-4">
							<h1
								className="text-[36px] font-bold leading-[48px] tracking-[0.2px] text-[#183B56]"
								style={{
									fontFamily: "Gotham, var(--font-hk-grotesk), sans-serif",
								}}
							>
								Popular Articles
							</h1>
							<p
								className="max-w-3xl text-[18px] font-normal leading-[32px] text-[#5A7184]"
								style={{
									fontFamily: '"Open Sans", var(--font-inter), sans-serif',
								}}
							>
								We share common trends, strategies ideas, opinions, short & long
								stories from the team behind company.
							</p>
						</header>

						<div className="grid gap-8 md:grid-cols-2">
							{featuredPosts.map((post) => (
								<FeaturedPostCard key={post._id} post={post} />
							))}
						</div>
					</div>
				)}

				{/* Case Studies Section */}
				{caseStudies.length > 0 && (
					<div className="mx-auto flex w-full max-w-[1140px] flex-col gap-10">
						<header className="flex flex-wrap items-end justify-between gap-6">
							<div className="flex flex-col gap-4">
								<h2
									className="text-[36px] font-bold leading-[48px] tracking-[0.2px] text-[#183B56]"
									style={{
										fontFamily: "Gotham, var(--font-hk-grotesk), sans-serif",
									}}
								>
									Case Studies
								</h2>
								<p
									className="max-w-3xl text-[18px] font-normal leading-[32px] text-[#5A7184]"
									style={{
										fontFamily: '"Open Sans", var(--font-inter), sans-serif',
									}}
								>
									Here&apos;s what we&apos;ve been up to recently.
								</p>
							</div>
							{/* <Link
								href="/blog"
								className="flex items-center gap-2 rounded-full bg-[#008ADD] px-8 py-3 text-sm font-bold text-white transition-all hover:bg-[#0077BE] hover:shadow-lg"
							>
								View all
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 12L10 8L6 4"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</Link> */}
						</header>

						<div className="px-4 md:px-0">
							{caseStudies.map((post) => (
								<CaseStudyCard key={post._id} post={post} />
							))}
						</div>
					</div>
				)}

				{/* All Articles Section */}
				{(featuredPosts.length > 0 || recentPosts.length > 0) && (
					<div className="flex flex-col gap-16">
						<header className="flex flex-col gap-4">
							<h2
								className="text-[36px] font-bold leading-[48px] tracking-[0.2px] text-[#183B56]"
								style={{
									fontFamily: "Gotham, var(--font-hk-grotesk), sans-serif",
								}}
							>
								All Articles
							</h2>
							<p
								className="max-w-3xl text-[18px] font-normal leading-[32px] text-[#5A7184]"
								style={{
									fontFamily: '"Open Sans", var(--font-inter), sans-serif',
								}}
							>
								We share common trends, strategies ideas, opinions, short & long
								stories from the team behind company.
							</p>
						</header>

						<div className="flex flex-col gap-8">
							{/* Top Row: 2 Featured-style cards */}
							{featuredPosts.length > 0 && (
								<div className="grid gap-8 md:grid-cols-2">
									{featuredPosts.slice(0, 2).map((post) => (
										<FeaturedPostCard key={post._id} post={post} />
									))}
								</div>
							)}

							{/* Bottom Row: 3 Recent-style cards */}
							{recentPosts.length > 0 && (
								<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
									{recentPosts.slice(0, 3).map((post) => (
										<RecentPostCard key={post._id} post={post} />
									))}
								</div>
							)}
						</div>

						{/* <div className="flex justify-center pt-4">
							<Link
								href="/blog"
								className="flex items-center gap-2 rounded-full bg-[#008ADD] px-12 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#0077BE] hover:shadow-xl"
							>
								View all
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 12L10 8L6 4"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</Link>
						</div> */}
					</div>
				)}

				{featuredPosts.length === 0 &&
					recentPosts.length === 0 &&
					caseStudies.length === 0 && (
						<div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-20 text-center text-slate-600">
							<h2 className="text-2xl font-bold text-[#183B56] mb-2">
								No articles found
							</h2>
							<p>Check back later for new stories and insights.</p>
						</div>
					)}
			</section>
		</div>
	);
}
