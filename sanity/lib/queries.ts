import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt,
    isFeatured,
    isCaseStudy,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`;

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt,
    "authorName": author->name,
    "categories": categories[]->{
      _id,
      title,
      "slug": slug.current
    },
    body,
    seoTitle,
    seoDescription
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`;
