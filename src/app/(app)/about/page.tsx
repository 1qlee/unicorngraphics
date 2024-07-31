import { Box, Flex, Grid, Section } from '@radix-ui/themes';
import { CustomPortableText } from '@/components/CustomPortableText/CustomPortableText';
import ResponsiveContainer from '@/components/ResponsiveContainer/ResponsiveContainer';
import { ABOUT_QUERY } from '@/sanity/lib/queries';
import { ABOUT_QUERYResult } from '@/root/sanity.types';
import { sanityFetch } from '@/sanity/lib/client';
import Hero from '@/components/Hero/Hero';
import type { Metadata } from 'next';
import ImageBox from '@/components/ImageBox/ImageBox';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About us"
}

export default async function AboutPage() {
  const data = await sanityFetch<ABOUT_QUERYResult>({
    query: ABOUT_QUERY,
  })

  return (
    <main>
      {/* HERO SECTION */}
      {data && (
        <Hero data={data} />
      )}
      {/* FIRST SECTION */}
      <Section>
        <ResponsiveContainer>
          <Grid
            columns="repeat(auto-fit, minmax(300px, 1fr))"
            gap="8"
          >
            <Box>
              <CustomPortableText
                value={data?.firstSection?.leftContent ?? []}
              />
            </Box>
            <Box>
              <CustomPortableText
                value={data?.firstSection?.rightContent ?? []}
              />
            </Box>
          </Grid>
        </ResponsiveContainer>
      </Section>
      {/* SECOND SECTION - IMAGE GRID */}
      <Section>
        <ResponsiveContainer>
          <Grid
            columns="repeat(auto-fit, minmax(400px, 1fr))"
            gap="8"
          >
            {data?.secondSection?.images?.map((image, index) => (
              <ImageBox
                key={index}
              >
                <Image
                  src={urlFor(image?.asset?._ref ?? {}).url()}
                  alt={image?.alt ?? 'Product image'}
                  width={1920}
                  height={1080}
                />
              </ImageBox>
            ))}
          </Grid>
        </ResponsiveContainer>
      </Section>
    </main>
  )
}