import { client } from "./client";

interface SanityFetchOptions {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number;
  tags?: string[];
}

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: SanityFetchOptions): Promise<T> {
  return client.fetch(query, params, {
    next: { revalidate, tags },
  });
}
