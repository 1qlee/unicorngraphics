import DynamicIcon from "@/sanity/components/DynamicIcon";
import GridSelect from "@/components/GridSelect/GridSelect";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import ImageBox from "@/components/ImageBox/ImageBox";
import Level from "@/components/Level/Level";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";
import { HOME_QUERY, PRODUCTS_QUERY, SERVICES_QUERY } from "@/sanity/lib/queries";
import { HOME_QUERYResult, PRODUCTS_QUERYResult, SERVICES_QUERYResult } from "@/root/sanity.types";
import { Metadata } from "next";
import { Box, Grid, Flex, Avatar, Heading, Text } from "@radix-ui/themes";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PaddedSection from "@/components/PaddedSection/PaddedSection";

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
            <Level color="orange" data={data?.firstSection?.gridContent?.content ?? []} />
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* SECOND SECTION */}
      {data?.secondSection && (
        <PaddedSection
          style = {{ backgroundColor: "var(--orange-3)" }}
        >
          <ResponsiveContainer>
            <Grid
              columns={{ initial: "auto", md: "1fr 2fr" }}
              gap="4"
            >
              <Box maxWidth={TEXTBOX_MAX_WIDTH}>
                <CustomPortableText
                  value={data?.secondSection?.heading ?? []}
                />
              </Box>
              <Flex
                gap="0"
                justify={{ initial: "center", md: "end" }}
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
            </Grid>
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* THIRD SECTION */}
      {data?.thirdSection && (
        <PaddedSection>
          <ResponsiveContainer>
            <Grid
              columns="minmax(0, 1fr)"
              gap="4"
            >
              <Box
                mb="3"
                maxWidth={TEXTBOX_MAX_WIDTH}
              >
                <CustomPortableText value={data?.thirdSection?.content ?? []} />
              </Box>
            </Grid>
            <GridSelect
              columns="repeat(auto-fit, minmax(320px, 1fr))"
              category="products"
              data={products}
            />
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* FOURTH SECTION */}
      {data?.fourthSection && (
        <PaddedSection
          style={{ backgroundColor: "var(--lime-3)" }}
        >
          <ResponsiveContainer>
            <Grid
              columns="repeat(auto-fit, minmax(300px, 1fr))"
              gap="4"
            >
              <Box maxWidth={TEXTBOX_MAX_WIDTH}>
                <CustomPortableText
                  value={data?.fourthSection?.content ?? []}
                />
              </Box>
              <Grid
                columns="repeat(auto-fit, minmax(300px, 1fr))"
                gap="0"
              >
                {data?.fourthSection?.grid?.map((item) => (
                  <Box
                    key={item._key}
                    p="5"
                    style={{
                      border: "1px solid black",
                      borderRadius: "var(--radius-2)",
                      marginRight: "-1px",
                      marginBottom: "-1px",
                    }}
                  >
                    <Avatar 
                      size="4" 
                      color="lime" 
                      mb="4"
                      fallback={<DynamicIcon icon={item.icon || ""} height="32px" width="32px" />}
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
            </Grid>
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* FIFTH SECTION */}
      {data?.fifthSection && (
        <PaddedSection>
          <ResponsiveContainer>
            <Grid
              columns="minmax(0, 1fr)"
              gap="4"
            >
              <Box
                mb="3"
                maxWidth={TEXTBOX_MAX_WIDTH}
              >
                <CustomPortableText value={data?.fifthSection?.content ?? []} />
              </Box>
            </Grid>
            <GridSelect
              columns="repeat(auto-fit, minmax(400px, 1fr))"
              category="services"
              data={services}
            />
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* SIXTH SECTION */}
      {data?.sixthSection && (
        <PaddedSection
          style={{ backgroundColor: "var(--accent-3)" }}
        >
          <ResponsiveContainer>
            <Box maxWidth={TEXTBOX_MAX_WIDTH} mx="auto" style={{ textAlign: "center" }}>
              <CustomPortableText
                value={data?.sixthSection?.heading ?? []}
              />
            </Box>
          </ResponsiveContainer>
        </PaddedSection>
      )}
    </main>
  );
}