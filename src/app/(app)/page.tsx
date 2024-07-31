import { sanityFetch } from "@/sanity/lib/client";
import { HOME_QUERY, PRODUCTS_QUERY, SERVICES_QUERY } from "@/sanity/lib/queries";
import { HOME_QUERYResult, PRODUCTS_QUERYResult, SERVICES_QUERYResult } from "@/root/sanity.types";
import Hero from "@/components/Hero/Hero";
import { Section, Box, Grid, Flex, Avatar } from "@radix-ui/themes";
import Level from "@/components/Level/Level";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";
import GridSelect from "@/components/GridSelect/GridSelect";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Metadata } from "next";

const TEXTBOX_MAX_WIDTH = { initial: "100%", md: "50%" };
const SECTION_MAX_WIDTH = { initial: "100%", md: "2160px" };

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
      <Section
        py="9"
      >
        <ResponsiveContainer>
          <Grid
            columns="repeat(auto-fit, minmax(300px, 1fr))"
            gap="4"
          >
            <Flex
              direction="column"
            >
              <Box maxWidth="400px">
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
      </Section>
      {/* SECOND SECTION */}
      <Section
        py="9"
      >
        <ResponsiveContainer>
          <Grid
            columns={{ initial: "auto", md: "1fr 2fr"}}
            gap="4"
          >
            <Box>
              <CustomPortableText
                value={data?.secondSection?.heading ?? []}
              />
            </Box>
            <Flex
              gap="6"
              justify={{ initial: "center", md: "end" }}
              align="center"
              wrap="wrap"
              mt="6"
            >
              {data?.secondSection?.slider?.map((item) => (
                <Image
                  key={item._key}
                  src={item?.image?.asset?._ref ? urlFor(item?.image?.asset._ref).url() : 'https://placehold.co/400x600.jpg'}
                  alt={item.alt ?? 'Slider image'}
                  width={160}
                  height={80}
                />
              ))}
            </Flex>
          </Grid>
        </ResponsiveContainer>
      </Section>
      {/* THIRD SECTION */}
      <Section
        py="9"
      >
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
      </Section>
      {/* FOURTH SECTION */}
      <Section>
        <ResponsiveContainer>
          <Grid
            columns="minmax(0, 1fr)"
            gap="4"
          >
            <Box
              mb="3"
              maxWidth={TEXTBOX_MAX_WIDTH}
            >
              <CustomPortableText value={data?.fourthSection?.content ?? []} />
            </Box>
          </Grid>
          <GridSelect
            columns="repeat(auto-fit, minmax(400px, 1fr))"
            category="services"
            data={services}
          />
        </ResponsiveContainer>
      </Section>
      {/* FOURTH SECTION */}
      <Section
        maxWidth={SECTION_MAX_WIDTH}
        mx="auto"
        py="9"
      >
        <ResponsiveContainer>
          <Box maxWidth={TEXTBOX_MAX_WIDTH} mx="auto" style={{ textAlign: "center" }}>
            <CustomPortableText
              value={data?.fifthSection?.heading ?? []}
            />
          </Box>
          <Level color="lime" data={data?.fifthSection?.gridContent?.content ?? []} />
        </ResponsiveContainer>
      </Section>
    </main>
  );
}