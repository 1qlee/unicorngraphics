import { HOME_QUERY, PRODUCTS_QUERY, SERVICES_QUERY, BANNER_QUERY } from "@/sanity/lib/queries";
import { HOME_QUERYResult, PRODUCTS_QUERYResult, SERVICES_QUERYResult, BANNER_QUERYResult } from "@/root/sanity.types";
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import { Box, Grid, Flex, Avatar, Heading, Text, Separator } from "@radix-ui/themes";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";
import GridSelect from "@/components/GridSelect/GridSelect";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import ImageBox from "@/components/ImageBox/ImageBox";
import Level from "@/components/Level/Level";
import PaddedSection from "@/components/PaddedSection/PaddedSection";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";


const TEXTBOX_MAX_WIDTH = { initial: "100%", md: "600px" };

export const metadata: Metadata = {
  title: "Custom Printing Solutions | Unicorn Graphics",
}

export default async function Page() {
  const data = await sanityFetch<HOME_QUERYResult>({
    query: HOME_QUERY,
  });
  const products = await sanityFetch<PRODUCTS_QUERYResult>({
    query: PRODUCTS_QUERY,
  });
  const services = await sanityFetch<SERVICES_QUERYResult>({
    query: SERVICES_QUERY,
  });
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
      {data?.firstSection && (
        <PaddedSection>
          <ResponsiveContainer>
            <Grid
              columns="repeat(auto-fit, minmax(300px, 1fr))"
              gap="4"
            >
              <Flex
                direction="column"
              >
                <Box maxWidth={TEXTBOX_MAX_WIDTH}>
                  <CustomPortableText
                    value={data?.firstSection?.leftContent ?? []}
                  />
                </Box>
              </Flex>
              <Box>
                <CustomPortableText
                  value={data?.firstSection?.rightContent ?? []}
                />
              </Box>
            </Grid>
            <Level color="lime" data={data?.firstSection?.gridContent?.content ?? []} />
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* SECOND SECTION */}
      {data?.secondSection && (
        <PaddedSection
          style = {{ backgroundColor: "var(--accent-3)" }}
        >
          <ResponsiveContainer>
            <Grid
              columns="repeat(auto-fit, minmax(300px, 1fr))"
              gap="4"
            >
              <Box maxWidth={TEXTBOX_MAX_WIDTH}>
                <CustomPortableText
                  value={data?.secondSection?.leftContent ?? []}
                />
              </Box>
              <Box>
                <CustomPortableText
                  value={data?.secondSection?.rightContent ?? []}
                />
              </Box>
            </Grid>
            <Separator 
              size="4"
              my="6"
              style={{ backgroundColor: "var(--gray-12)" }}
            />
            <Flex
              gap="4"
              justify="center"
              align="center"
              wrap="wrap"
            >
              {data?.secondSection?.slider?.map((item) => (
                <Box key={item._key}>
                  <ImageBox>
                    <Image
                      key={item._key}
                      src={item?.image?.asset?._ref ? urlFor(item?.image?.asset._ref).url() : 'https://placehold.co/400x600.jpg'}
                      alt={item.alt ?? 'Slider image'}
                      width={160}
                      height={80}
                    />
                  </ImageBox>
                </Box>
              ))}
            </Flex>
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* THIRD SECTION */}
      {data?.thirdSection && (
        <PaddedSection>
          <ResponsiveContainer>
            <Grid
              columns="repeat(auto-fit, minmax(300px, 1fr))"
              gap="4"
              mb="6"
            >
              <Box
                maxWidth={TEXTBOX_MAX_WIDTH}
              >
                <CustomPortableText value={data?.thirdSection?.leftContent ?? []} />
              </Box>
              <Box>
                <CustomPortableText value={data?.thirdSection?.rightContent ?? []} />
              </Box>
            </Grid>
            <GridSelect
              columns="repeat(auto-fit, minmax(300px, 1fr))"
              category="products"
              data={products}
            />
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* FOURTH SECTION */}
      {data?.fourthSection && (
        <PaddedSection>
          <ResponsiveContainer>
            <Grid
              columns="repeat(auto-fit, minmax(300px, 1fr))"
              gap="4"
              mb="6"
            >
              <Box maxWidth={TEXTBOX_MAX_WIDTH}>
                <CustomPortableText
                  value={data?.fourthSection?.leftContent ?? []}
                />
              </Box>
              <Box>
                <CustomPortableText
                  value={data?.fourthSection?.rightContent ?? []}
                />
              </Box>
            </Grid>
            <Grid
              columns="repeat(auto-fit, minmax(300px, 1fr))"
              gap="4"
            >
              {data?.fourthSection?.grid?.map((item, index) => (
                <Box
                  key={item._key}
                  style={{ 
                    borderTop: "1px solid var(--gray-12)",
                    paddingTop: "var(--space-5)"
                  }}
                >
                  <Avatar
                    size="3"
                    color="orange"
                    variant="solid"
                    mb="4"
                    fallback={index + 1}
                  />
                  <Heading as="h3" size="6" mb="2">
                    {item?.heading}
                  </Heading>
                  <Text as="p" size="3" color="gray">
                    {item?.text}
                  </Text>
                </Box>
              ))}
            </Grid>
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* FIFTH SECTION */}
      {data?.fifthSection && (
        <PaddedSection>
          <ResponsiveContainer>
            <Grid
              columns="repeat(auto-fit, minmax(300px, 1fr))"
              gap="4"
              mb="6"
            >
              <Box
                maxWidth={TEXTBOX_MAX_WIDTH}
              >
                <CustomPortableText value={data?.fifthSection?.leftContent ?? []} />
              </Box>
              <Box>
                <CustomPortableText value={data?.fifthSection?.rightContent ?? []} />
              </Box>
            </Grid>
            <GridSelect
              columns="repeat(auto-fit, minmax(300px, 1fr))"
              category="services"
              data={services}
            />
          </ResponsiveContainer>
        </PaddedSection>
      )}
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
  );
}