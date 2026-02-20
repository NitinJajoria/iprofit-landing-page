
export interface PostListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: any;
  publishedAt?: string;
  authorName?: string;
  authorImage?: any;
  isFeatured?: boolean;
  isCaseStudy?: boolean;
  categories?: Array<{
    _id: string;
    title: string;
    slug: string;
  }>;
}

export interface Post extends PostListItem {
  body?: any[];
  seoTitle?: string;
  seoDescription?: string;
}
