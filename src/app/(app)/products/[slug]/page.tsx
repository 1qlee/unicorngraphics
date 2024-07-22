// ./app/(blog)/posts/[slug]/page.tsx

import { QueryParams } from "next-sanity";

import { PRODUCTS_QUERY, PAGE_QUERY } from "@/sanity/lib/queries";

import { client, sanityFetch } from "@/sanity/lib/client";
import {
  PAGE_QUERYResult,
  PRODUCTS_QUERYResult,
} from "@/root/sanity.types";
import { Container, Section } from "@radix-ui/themes";
import HeroAlt from "@/components/Hero/HeroAlt";
import { CustomPortableText } from "@/root/src/components/CustomPortableText/CustomPortableText";

export async function generateStaticParams() {
  const products = await client.fetch<PRODUCTS_QUERYResult>(
    PRODUCTS_QUERY,
    {},
    { perspective: "published" }
  );

  return products.map((product) => ({
    slug: product?.slug?.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const page = await sanityFetch<PAGE_QUERYResult>({
    query: PAGE_QUERY,
    params,
  });

  return (
    <main>
      <HeroAlt data={page} />
      <Container>
        <Section>
          <CustomPortableText value={page?.infoText ?? []} />
        </Section>
      </Container>
    </main>
  );
}
