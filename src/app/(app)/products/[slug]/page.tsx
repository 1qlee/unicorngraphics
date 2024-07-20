// ./app/(blog)/posts/[slug]/page.tsx

import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";

import { PRODUCTS_QUERY, PRODUCT_QUERY } from "@/sanity/lib/queries";

import { client, sanityFetch } from "@/sanity/lib/client";
import {
  PRODUCT_QUERYResult,
  PRODUCTS_QUERYResult,
} from "@/root/sanity.types";

export async function generateStaticParams() {
  const posts = await client.fetch<PRODUCTS_QUERYResult>(
    PRODUCTS_QUERY,
    {},
    { perspective: "published" }
  );

  return posts.map((post) => ({
    slug: post?.slug?.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const post = await sanityFetch<PRODUCT_QUERYResult>({
    query: PRODUCT_QUERY,
    params,
  });
  if (!post) {
    return notFound();
  }
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
