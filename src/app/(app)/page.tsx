import { sanityFetch } from "@/sanity/lib/client";
import { HOME_QUERY, PRODUCTS_QUERY, SERVICES_QUERY } from "@/sanity/lib/queries";
import { HOME_QUERYResult, PRODUCTS_QUERYResult, SERVICES_QUERYResult } from "@/root/sanity.types";
import Hero from "@/components/Hero/Hero";
import { Section, Box, Grid, Flex, Separator, Avatar } from "@radix-ui/themes";
import Level from "@/components/Level/Level";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";
import GridSelect from "@/components/GridSelect/GridSelect";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";

const TEXTBOX_MAX_WIDTH = { initial: "100%", md: "60vw" };
const SECTION_MAX_WIDTH = { initial: "100%", md: "2160px" };

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
      <Section>
        <ResponsiveContainer>
          <Box>
            <CustomPortableText
              value={data?.firstSection?.heading ?? []}
            />
          </Box>
          <Grid
            columns="repeat(auto-fit, minmax(300px, 1fr))"
            gap="8"
            align="center"
          >
            <Flex
              direction="column"
              height="480px"
            >
              <CustomPortableText
                value={data?.firstSection?.leftContent ?? []}
              />
            </Flex>
            <Box>
              <CustomPortableText 
                value={data?.firstSection?.rightContent ?? []}
              />
            </Box>
          </Grid>
          <Level data={data?.firstSection?.gridContent?.content ?? []} />
        </ResponsiveContainer>
      </Section>
      {/* SECOND SECTION */}
      <Section>
        <ResponsiveContainer>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Box maxWidth={TEXTBOX_MAX_WIDTH} style={{textAlign:"center"}}>
              <CustomPortableText
                value={data?.secondSection?.heading ?? []}
              />
            </Box>
          </Flex>
          <Flex
            justify="center"
            gap="6"
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
        </ResponsiveContainer>
      </Section>
      {/* THIRD SECTION */}
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
      <Section
        maxWidth={SECTION_MAX_WIDTH}
        style={{ backgroundColor: "var(--orange-4)" }}
        mx="auto"
      >
        <ResponsiveContainer>
          <Box maxWidth={TEXTBOX_MAX_WIDTH} mx="auto" mb="9" style={{textAlign: "center"}}>
            <CustomPortableText 
              value={data?.fourthSection?.heading ?? []}
            />
          </Box>
          <Grid
            columns="repeat(auto-fit, minmax(300px, 1fr))"
            gap="6"
          >
            <Box>
              <Avatar
                fallback="1"
                size="4"
                color="lime"
                mb="4"
              ></Avatar>
              <CustomPortableText value={data?.fourthSection?.firstColumn ?? []} />
            </Box>
            <Box>
              <Avatar
                fallback="2"
                size="4"
                color="lime"
                mb="4"
              ></Avatar>
              <CustomPortableText value={data?.fourthSection?.secondColumn ?? []} />
            </Box>
            <Box>
              <Avatar
                fallback="3"
                size="4"
                color="lime"
                mb="4"
              ></Avatar>
              <CustomPortableText value={data?.fourthSection?.thirdColumn ?? []} />
            </Box>
          </Grid>
        </ResponsiveContainer>
      </Section>
      {/* FIFTH SECTION */}
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
              <CustomPortableText value={data?.fifthSection?.content ?? []} />
            </Box>
          </Grid>
          <GridSelect
            columns="repeat(auto-fit, minmax(400px, 1fr))"
            category="services"
            data={services}
          />
        </ResponsiveContainer>
      </Section>
      
    </main>
  );
}