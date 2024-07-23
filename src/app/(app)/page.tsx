import { sanityFetch } from "@/sanity/lib/client";
import { HOME_QUERY, PRODUCTS_QUERY, SERVICES_QUERY } from "@/sanity/lib/queries";
import { HOME_QUERYResult, PRODUCTS_QUERYResult, SERVICES_QUERYResult } from "@/root/sanity.types";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import { Section, Box, Container, Grid, Heading, Text, Flex } from "@radix-ui/themes";
import Level from "@/components/Level/Level";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";
import GridSelect from "@/components/GridSelect/GridSelect";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container
      px={{
        initial: "4",
        lg: "0",
      }}
    >
      {children}
    </Container>
  )
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
      {data && (
        <Hero data={data} />
      )}
      <Section>
        <ResponsiveContainer>
          <Grid
            columns="2"
            gap="4"
          >
            <Box
              mb="9"
            >
              <CustomPortableText value={data?.sliderText ?? []} />
            </Box>
          </Grid>
          <Slider data={data?.slider} />
          <Level data={data?.sliderStats} />
        </ResponsiveContainer>
      </Section>
      <Section>
        <ResponsiveContainer>
          <Grid
            columns="2"
            gap="4"
          >
            <Box
              mb="3"
            >
              <CustomPortableText value={data?.productsText ?? []} />
            </Box>
          </Grid>
          <GridSelect 
            columns="repeat(4, 1fr)"
            category="products"
            data={products} 
          />
        </ResponsiveContainer>
      </Section>
      <Section style={{backgroundColor:"var(--accent-3)"}}>
        <ResponsiveContainer>
          <Grid
            columns="repeat(auto-fit, minmax(250px, 1fr))"
            gap="6"
          >
            <Box
              width="100%"
              position="relative"
            >
              <Image
                src={data?.aboutImage?.asset?._ref ? urlFor(data?.aboutImage?.asset?._ref).url() : 'https://placehold.co/400x600.jpg'}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                alt={data?.aboutImage?.alt ?? "Company building"}
              />
            </Box>
            <Box
              mb="9"
            >
              <CustomPortableText 
                buttonVariant="solid"
                value={data?.aboutText ?? []}  
              />
            </Box>
          </Grid>
        </ResponsiveContainer>
      </Section>
      <Section>
        <ResponsiveContainer>
          <Grid
            columns="2"
            gap="4"
          >
            <Box
              mb="3"
            >
              <CustomPortableText value={data?.servicesText ?? []} />
            </Box>
          </Grid>
          <GridSelect
            columns="repeat(3, 1fr)"
            category="services"
            data={services}
          />
        </ResponsiveContainer>
      </Section>
      <Section
        style={{backgroundColor:"var(--accent-3)"}}
      >
        <ResponsiveContainer>
          <Flex
            justify="center"
          >
            <Flex
              justify="center"
              direction="column"
              width="60ch"
              align="center"
            >
              <CustomPortableText 
                align="center" 
                value={data?.contactText ?? []} 
              />
            </Flex>
          </Flex>
        </ResponsiveContainer>
      </Section>
    </main>
  );
}