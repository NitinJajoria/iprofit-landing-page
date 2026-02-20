import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import type { PostListItem } from "@/sanity/types";

interface RecentPostCardProps {
  post: PostListItem;
}

const formatDateShort = (value?: string) => {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
};

export default function RecentPostCard({ post }: RecentPostCardProps) {
  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(800).height(1000).url()
    : null;
  
  const authorImageUrl = post.authorImage
    ? urlForImage(post.authorImage).width(100).height(100).url()
    : null;

  return (
    <Link href={`/blog/${post.slug}`} className="group relative block h-[500px] w-full overflow-hidden rounded-[24px]">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ background: 'linear-gradient(180deg, rgba(24, 59, 86, 0.0001) 0%, rgba(22, 49, 70, 0.453847) 45.38%, #152532 100%)' }} 
      />

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold leading-tight text-white">
            {post.title}
          </h3>
          
          {post.excerpt && (
            <p className="line-clamp-2 text-sm text-white/80">
              {post.excerpt}
            </p>
          )}

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/20">
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
                <span className="text-xs font-semibold text-white">
                  {post.authorName || "iProfit Team"}
                </span>
                <div className="flex items-center gap-1">
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#36B37E]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-1.5 w-1.5 text-white"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-medium text-white/60 italic">
                    Verified writer
                  </span>
                </div>
              </div>
            </div>
            <span className="text-xs font-medium text-white/70">
              {formatDateShort(post.publishedAt)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
