import Page from "@/components/Page/Page";
import { QueryParams } from "next-sanity";
import { PAGE_QUERY } from "@/sanity/lib/queries";
import { client, sanityFetch } from "@/sanity/lib/client";
import { SERVICES_QUERY, BANNER_QUERY } from "@/sanity/lib/queries";
import { SERVICES_QUERYResult, PAGE_QUERYResult, BANNER_QUERYResult } from "@/root/sanity.types";
import { Metadata, ResolvingMetadata } from "next";

type MetaProps = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: MetaProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = params;
  const formattedSlug = slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return {
    title: formattedSlug,
  }
}

export async function generateStaticParams() {
  const services = await client.fetch<SERVICES_QUERYResult>(
    SERVICES_QUERY,
    {},
    { perspective: "published" }
  );

  return services.map((service) => ({
    slug: service?.slug?.current,
  }));
}

export default async function ServicePage({ params }: { params: QueryParams }) {
  const page = await sanityFetch<PAGE_QUERYResult>({
    query: PAGE_QUERY,
    params,
  });
  const banner = await sanityFetch<BANNER_QUERYResult>({
    query: BANNER_QUERY,
  });

  return (
    <Page
      pageData={page}
      bannerData={banner}
    />
  )
}