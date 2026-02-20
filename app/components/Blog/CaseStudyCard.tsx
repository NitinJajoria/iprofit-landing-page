import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import type { PostListItem } from "@/sanity/types";

interface CaseStudyCardProps {
  post: PostListItem;
}

const formatDateShort = (value?: string) => {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
};

export default function CaseStudyCard({ post }: CaseStudyCardProps) {
  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(800).url()
    : null;
  
  const authorImageUrl = post.authorImage
    ? urlForImage(post.authorImage).width(100).height(100).url()
    : null;

  return (
    <div className="relative mx-auto w-full max-w-[1140px]">
      <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:h-[420px] md:flex-row">
        {/* Image Section */}
        <div className="relative aspect-video w-full overflow-hidden md:aspect-auto md:w-1/2">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        {/* Content Section */}
        <div className="flex w-full flex-col justify-center p-6 md:w-1/2 md:p-10">
          <div className="flex flex-col gap-4">
            <div>
              <span className="inline-block rounded-full bg-[#E8F7F0] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#36B37E]">
                FEATURED
              </span>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-2xl font-bold leading-tight text-[#183B56] transition-colors hover:text-[#008ADD] md:text-3xl">
                {post.title}
              </h3>
            </Link>

            {post.excerpt && (
              <p className="line-clamp-4 text-base leading-relaxed text-[#5A7184]">
                {post.excerpt}
              </p>
            )}

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  {authorImageUrl ? (
                    <Image
                      src={authorImageUrl}
                      alt={post.authorName || "Author"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-200 text-xs font-bold text-slate-500">
                      {post.authorName?.charAt(0) || "A"}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#183B56]">
                    {post.authorName || "iProfit Team"}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-medium text-[#5A7184] italic">
                      Verified writer
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-sm font-medium text-[#5A7184]">
                {formatDateShort(post.publishedAt)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Positioned outside the overflow-hidden container */}
      {/* <button className="absolute -left-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#008ADD] text-white shadow-xl transition-transform hover:scale-110 md:flex">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button> */}
      {/* <button className="absolute -right-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#008ADD] text-white shadow-xl transition-transform hover:scale-110 md:flex">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button> */}
    </div>
  );
}
