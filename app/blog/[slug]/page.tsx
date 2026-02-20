import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import type { Post } from "@/sanity/types";

type BlogPostParams = Promise<{ slug: string }>;

interface BlogPostPageProps {
  params: BlogPostParams;
}

export const revalidate = 60;

const formatDate = (value?: string) => {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const portableTextComponents: PortableTextComponents = {
  types: {
    divider: () => (
      <hr className="my-10 border-t border-slate-200" />
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-slate-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-slate-900">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-relaxed text-slate-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-6 list-disc space-y-2 text-slate-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="ml-6 list-decimal space-y-2 text-slate-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({
      value,
      children,
    }) => {
      if (!value?.href) {
        return <span>{children}</span>;
      }

      return (
        <a
          href={value.href}
          className="font-semibold text-[#008ADD] underline-offset-4 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: postSlugsQuery,
    tags: ["post"],
  });

  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<Post | null>({
    query: postQuery,
    params: { slug },
    tags: ["post", `post:${slug}`],
  });

  if (!post) {
    return {
      title: "Post Not Found | iProfit",
      robots: { index: false, follow: false },
    };
  }

  const title = post.seoTitle || post.title;
  const description =
    post.seoDescription || post.excerpt || "Read the latest insights from iProfit.";
  const ogImage = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : undefined;

  return {
    title: `${title} | iProfit`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await sanityFetch<Post | null>({
    query: postQuery,
    params: { slug },
    tags: ["post", `post:${slug}`],
  });

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1400).height(900).url()
    : null;
  const altText =
    (post.mainImage as { alt?: string } | undefined)?.alt || post.title;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: imageUrl ? [imageUrl] : undefined,
    author: post.authorName
      ? { "@type": "Person", name: post.authorName }
      : { "@type": "Organization", name: "iProfit" },
    publisher: { "@type": "Organization", name: "iProfit" },
  };

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 pb-24 pt-28 sm:pt-32">
      <header className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          <span>{formatDate(post.publishedAt)}</span>
          {post.categories?.length ? (
            <span className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600"
                >
                  {category.title}
                </span>
              ))}
            </span>
          ) : null}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {post.title}
        </h1>
        {post.excerpt ? (
          <p className="text-lg text-slate-600">{post.excerpt}</p>
        ) : null}
        <div className="text-sm font-medium text-slate-500">
          {post.authorName ? `By ${post.authorName}` : "iProfit"}
        </div>
      </header>

      {imageUrl ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-6">
        <PortableText value={post.body ?? []} components={portableTextComponents} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
