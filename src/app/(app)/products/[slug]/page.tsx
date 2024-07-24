// ./app/(blog)/posts/[slug]/page.tsx

import { QueryParams } from "next-sanity";
import { PRODUCTS_QUERY, PAGE_QUERY } from "@/sanity/lib/queries";
import { client, sanityFetch } from "@/sanity/lib/client";
import {
  PAGE_QUERYResult,
  PRODUCTS_QUERYResult,
} from "@/root/sanity.types";
import { Grid, Section, Box } from "@radix-ui/themes";
import HeroAlt from "@/components/Hero/HeroAlt";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import ImageBox from "@/components/ImageBox/ImageBox";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

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

  function generateRandomImgSize() {
    const sizes = ['400x600', '800x400', '600x600', '400x800'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }

  function splitArrayIntoChunks(arr: any[], chunkSize: number) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const imageGridChunks = splitArrayIntoChunks(page?.imageGrid ?? [], 4);

  return (
    <main>
      <HeroAlt data={page} />
      <Section>
        <ResponsiveContainer>
          <Box>
            <CustomPortableText value={page?.infoText ?? []} />
          </Box>
          <Grid
            gap="6"
            columns="repeat(4, minmax(0, 1fr))"
            align="start"
          >
            {imageGridChunks.map((chunk, index) => (
              <Grid
                key={index}
                gap="6"
                columns="minmax(0, 1fr)"
              >
                {chunk.map((image) => (
                  <ImageBox
                    key={image?._key}
                  >
                    <Image
                      src={image?.image?.asset?._ref ? urlFor(image?.image?.asset?._ref).url() : `https://placehold.co/${generateRandomImgSize()}.jpg`}
                      sizes="100vw"
                      height={300}
                      width={400}
                      style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                      alt={image?.alt ?? "Some image"}
                    />
                  </ImageBox>
                ))}
              </Grid>
            ))}
          </Grid>
        </ResponsiveContainer>
      </Section>
    </main>
  );
}
