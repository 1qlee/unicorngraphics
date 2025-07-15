import {
  HOME_QUERY,
  PRODUCTS_QUERY,
  SERVICES_QUERY,
  BANNER_QUERY,
} from "@/sanity/lib/queries";
import {
  HOME_QUERYResult,
  PRODUCTS_QUERYResult,
  SERVICES_QUERYResult,
  BANNER_QUERYResult,
} from "@/root/sanity.types";
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import {
  Box,
  Grid,
  Flex,
  Avatar,
  Heading,
  Text,
  Separator,
} from "@radix-ui/themes";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";
import GridSelect from "@/components/GridSelect/GridSelect";
import VideoHero from "@/components/Hero/VideoHero";
import Image from "next/image";
import ImageBox from "@/components/ImageBox/ImageBox";
import Level from "@/components/Level/Level";
import PaddedSection from "@/components/PaddedSection/PaddedSection";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import ConsultForm from "../../components/ConsultForm/ConsultForm";

const TEXTBOX_MAX_WIDTH = { initial: "100%", md: "600px" };

export const metadata: Metadata = {
  title: "Custom Printing Solutions | Unicorn Graphics",
};

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
      {data && <VideoHero data={data} />}
      {/* FIRST SECTION */}
      {data?.firstSection && (
        <PaddedSection>
          <ResponsiveContainer>
            <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="4" mb="8">
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
            <Grid columns="repeat(auto-fit, minmax(360px, 1fr))" gap="4">
              <Level
                color="lime"
                data={
                  data?.firstSection?.gridContent?.content
                    ? data.firstSection.gridContent.content.map((item) => ({
                        ...item,
                        heading: item.heading ?? undefined,
                        text: item.text ?? undefined,
                      }))
                    : []
                }
              />
            </Grid>
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* SECOND SECTION */}
      {data?.secondSection && (
        <PaddedSection style={{ backgroundColor: "var(--accent-3)" }}>
          <ResponsiveContainer>
            <Box maxWidth={TEXTBOX_MAX_WIDTH} mx="auto">
              <CustomPortableText
                align="center"
                value={data?.secondSection?.leftContent ?? []}
              />
            </Box>
            <ConsultForm isDialog={false} />
          </ResponsiveContainer>
        </PaddedSection>
      )}
      {/* THIRD SECTION */}
      {data?.thirdSection && (
        <PaddedSection>
          <ResponsiveContainer>
            <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="4" mb="6">
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
            <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="4" mb="6">
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
            <Grid columns="repeat(auto-fit, minmax(240px, 1fr))" gap="4">
              {data?.fourthSection?.grid?.map((item, index) => (
                <Box
                  p="6"
                  key={item._key}
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "var(--gray-3)",
                  }}
                >
                  <Avatar
                    size="3"
                    color="orange"
                    variant="solid"
                    mb="4"
                    fallback={index + 1}
                  />
                  <Heading as="h3" size="7" mb="2" weight="medium">
                    {item?.heading}
                  </Heading>
                  <Text as="p" size="4" color="gray">
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
            <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="4" mb="6">
              <Box maxWidth={TEXTBOX_MAX_WIDTH}>
                <CustomPortableText
                  value={data?.fifthSection?.leftContent ?? []}
                />
              </Box>
              <Box>
                <CustomPortableText
                  value={data?.fifthSection?.rightContent ?? []}
                />
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
        <PaddedSection style={{ backgroundColor: "var(--accent-3)" }}>
          <ResponsiveContainer>
            <Box
              maxWidth={TEXTBOX_MAX_WIDTH}
              mx="auto"
              style={{ textAlign: "center" }}
            >
              <CustomPortableText value={banner?.content ?? []} />
            </Box>
          </ResponsiveContainer>
        </PaddedSection>
      )}
    </main>
  );
}
