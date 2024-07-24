// ./app/(blog)/posts/[slug]/page.tsx

import { QueryParams } from "next-sanity";
import { SERVICES_QUERY, PAGE_QUERY } from "@/sanity/lib/queries";
import { client, sanityFetch } from "@/sanity/lib/client";
import {
  PAGE_QUERYResult,
  SERVICES_QUERYResult,
} from "@/root/sanity.types";
import { Container, Section } from "@radix-ui/themes";
import HeroAlt from "@/components/Hero/HeroAlt";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";
import ResponsiveContainer from "@/root/src/components/ResponsiveContainer/ResponsiveContainer";

export async function generateStaticParams() {
  const products = await client.fetch<SERVICES_QUERYResult>(
    SERVICES_QUERY,
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
      <Section>
        <ResponsiveContainer>
          <CustomPortableText value={page?.infoText ?? []} />
        </ResponsiveContainer>
      </Section>
    </main>
  );
}
