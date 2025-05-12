import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

import Hero from "@/components/Hero/Hero";
import ImageBox from "@/components/ImageBox/ImageBox";
import PaddedSection from "@/components/PaddedSection/PaddedSection";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { CustomPortableText } from "@/components/CustomPortableText/CustomPortableText";
import { Grid, Section, Box } from "@radix-ui/themes";

const TEXTBOX_MAX_WIDTH = { initial: "100%", md: "600px" };

export default async function Page({ pageData, bannerData }) {
  function generateRandomImgSize() {
    const sizes = ['400x600', '800x400', '600x600', '400x800'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }

  // New function to distribute images sequentially into columns
  function distributeImagesIntoColumns(imagesArray, numberOfColumns) {
    if (!imagesArray || !imagesArray.length || numberOfColumns <= 0) {
      return [];
    }
    // Initialize an array of arrays, where each inner array represents a column
    const columns = Array.from({ length: numberOfColumns }, () => []);

    // Distribute images one by one into the columns
    imagesArray.forEach((image, index) => {
      columns[index % numberOfColumns].push(image);
    });

    return columns; // Example: [[img1, img5, img9], [img2, img6, img10], [img3, img7], [img4, img8]] for 4 columns
  }

  const imageGridChunks = distributeImagesIntoColumns(pageData?.imageGrid ?? [], 4);

  return (
    <main>
      {pageData && (
        <Hero data={pageData} />
      )}
      <Section
        pb="0"
      >
        <ResponsiveContainer>
          <Grid
            columns="repeat(auto-fit, minmax(300px, 1fr))"
            gap="4"
          >
            <Box>
              <CustomPortableText value={pageData?.textSection?.leftContent ?? []} />
            </Box>
            <Box>
              <CustomPortableText value={pageData?.textSection?.rightContent ?? []} />
            </Box>
          </Grid>
        </ResponsiveContainer>
      </Section>
      <Section>
        <ResponsiveContainer>
          <Grid
            gap="6"
            columns={`repeat(4, minmax(300px, 1fr))`}
            align="start"
          >
            {imageGridChunks.map((chunk, index) => (
              <Grid
                key={index}
                gap="6"
                columns="minmax(0, 1fr)"
              >
                {chunk.map((image) => (
                  <ImageBox
                    key={image?._key}
                  >
                    <Image
                      src={image?.image?.asset?._ref ? urlFor(image?.image?.asset?._ref).url() : `https://placehold.co/${generateRandomImgSize()}.jpg`}
                      sizes="100vw"
                      height={300}
                      width={400}
                      style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                      alt={image?.alt ?? "Some image"}
                    />
                  </ImageBox>
                ))}
              </Grid>
            ))}
          </Grid>
        </ResponsiveContainer>
      </Section>
      {bannerData && (
        <PaddedSection
          style={{ backgroundColor: "var(--accent-3)" }}
        >
          <ResponsiveContainer>
            <Box maxWidth={TEXTBOX_MAX_WIDTH} mx="auto" style={{ textAlign: "center" }}>
              <CustomPortableText
                value={bannerData?.content ?? []}
              />
            </Box>
          </ResponsiveContainer>
        </PaddedSection>
      )}
    </main>
  );
}
