import Hero from '@/components/Hero/Hero';
import Image from 'next/image';
import ImageBox from '@/components/ImageBox/ImageBox';
import ResponsiveContainer from '@/components/ResponsiveContainer/ResponsiveContainer';
import PaddedSection from '@/root/src/components/PaddedSection/PaddedSection';
import type { Metadata } from 'next';
import { ABOUT_QUERY, BANNER_QUERY } from '@/sanity/lib/queries';
import { ABOUT_QUERYResult, BANNER_QUERYResult } from '@/root/sanity.types';
import { Box, Grid, Section } from '@radix-ui/themes';
import { CustomPortableText } from '@/components/CustomPortableText/CustomPortableText';
import { sanityFetch } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const TEXTBOX_MAX_WIDTH = { initial: "100%", md: "600px" };

export const metadata: Metadata = {
  title: "About us"
}

export default async function AboutPage() {
  const data = await sanityFetch<ABOUT_QUERYResult>({
    query: ABOUT_QUERY,
  })
  const banner = await sanityFetch<BANNER_QUERYResult>({
    query: BANNER_QUERY,
  });

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
            <Box maxWidth={TEXTBOX_MAX_WIDTH}>
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
      <Section>
        <ResponsiveContainer>
          <Grid
            columns="repeat(auto-fit, minmax(300px, 1fr))"
            gap="8"
          >
            <Box maxWidth={TEXTBOX_MAX_WIDTH}>
              <CustomPortableText
                value={data?.thirdSection?.leftContent ?? []}
              />
            </Box>
            <Box>
              <CustomPortableText
                value={data?.thirdSection?.rightContent ?? []}
              />
            </Box>
          </Grid>
        </ResponsiveContainer>
      </Section>
      {banner && (
        <PaddedSection
          style={{ backgroundColor: "var(--accent-3)" }}
        >
          <ResponsiveContainer>
            <Box maxWidth={TEXTBOX_MAX_WIDTH} mx="auto" style={{ textAlign: "center" }}>
              <CustomPortableText
                value={banner?.content ?? []}
              />
            </Box>
          </ResponsiveContainer>
        </PaddedSection>
      )}
    </main>
  )
}