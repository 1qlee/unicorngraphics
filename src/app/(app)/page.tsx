import { sanityFetch } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { HOME_QUERYResult } from "@/root/sanity.types";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import { Section, Box, Container, Grid, Heading, Text } from "@radix-ui/themes";
import Level from "@/components/Level/Level";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";

export default async function Page() {
  const data = await sanityFetch<HOME_QUERYResult>({
    query: HOME_QUERY,
  });

  return (
    <main>
      {data && (
        <>
          <Hero data={data} />
        </>
      )}
      <Section
        my="9"
      >
        <Container>
          <Grid
            columns="2"
            gap="4"
          >
            <Box>
              <CustomPortableText value={data?.sliderText ?? []} />
            </Box>
            <Level></Level>
          </Grid>
          {data?.slider && (
            <Slider data={data.slider} />
          )}
        </Container>
      </Section>
    </main>
  );
}