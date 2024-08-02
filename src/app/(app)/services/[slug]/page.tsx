// ./app/(blog)/posts/[slug]/page.tsx

import { QueryParams } from "next-sanity";
import { SERVICES_QUERY, PAGE_QUERY } from "@/sanity/lib/queries";
import { client, sanityFetch } from "@/sanity/lib/client";
import {
  PAGE_QUERYResult,
  SERVICES_QUERYResult,
} from "@/root/sanity.types";
import { Box, Grid, Heading, Section } from "@radix-ui/themes";
import Hero from "@/components/Hero/Hero";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import ImageBox from "@/components/ImageBox/ImageBox";
import Image from "next/image";

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
      <Hero data={page} />
      <Section>
        <ResponsiveContainer>
          <CustomPortableText value={page?.infoText ?? []} />
        </ResponsiveContainer>
      </Section>
      <Section>
        <ResponsiveContainer>
          <Grid
            gap="6"
            columns="repeat(auto-fit, minmax(250px, 1fr))"
            align="center"
            mb="9"
          >
            <ImageBox>
              <Image 
                src={`https://placehold.co/560.jpg`}
                sizes="100vw"
                height={560}
                width={560}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                alt={"Some image"}
              />
            </ImageBox>
            <Box>
              <Heading as="h1" size="9" mb="6">Lorem ipsum dolor</Heading>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam, mauris eu lacinia tincidunt, velit nunc ultricies nunc, ac tincidunt lectus nunc vitae nunc. Sed euismod, odio a aliquam ultrices, nunc nunc tincidunt nunc, auctor aliquet nunc nunc at nunc. Sed euismod, odio a aliquam ultrices, nunc nunc tincidunt nunc, auctor aliquet nunc nunc at nunc.</p>
            </Box>
          </Grid>
          <Grid
            gap="6"
            columns="repeat(auto-fit, minmax(250px, 1fr))"
            align="center"
            mb="9"
          >
            <Box>
              <Heading as="h1" size="9" mb="6">Lorem ipsum dolor</Heading>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam, mauris eu lacinia tincidunt, velit nunc ultricies nunc, ac tincidunt lectus nunc vitae nunc. Sed euismod, odio a aliquam ultrices, nunc nunc tincidunt nunc, auctor aliquet nunc nunc at nunc. Sed euismod, odio a aliquam ultrices, nunc nunc tincidunt nunc, auctor aliquet nunc nunc at nunc.</p>
            </Box>
            <ImageBox>
              <Image
                src={`https://placehold.co/560.jpg`}
                sizes="100vw"
                height={560}
                width={560}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                alt={"Some image"}
              />
            </ImageBox>
          </Grid>
          <Grid
            gap="6"
            columns="repeat(auto-fit, minmax(250px, 1fr))"
            align="center"
            mb="9"
          >
            <ImageBox>
              <Image
                src={`https://placehold.co/560.jpg`}
                sizes="100vw"
                height={560}
                width={560}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                alt={"Some image"}
              />
            </ImageBox>
            <Box>
              <Heading as="h1" size="9" mb="6">Lorem ipsum dolor</Heading>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam, mauris eu lacinia tincidunt, velit nunc ultricies nunc, ac tincidunt lectus nunc vitae nunc. Sed euismod, odio a aliquam ultrices, nunc nunc tincidunt nunc, auctor aliquet nunc nunc at nunc. Sed euismod, odio a aliquam ultrices, nunc nunc tincidunt nunc, auctor aliquet nunc nunc at nunc.</p>
            </Box>
          </Grid>
        </ResponsiveContainer>
      </Section>
    </main>
  );
}
