import styles from './Hero.module.scss'
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import { BlockContent } from '@/root/sanity.types';
import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';
import ImageBox from '../ImageBox/ImageBox';
import { CustomPortableText } from '../CustomPortableText/CustomPortableText';

interface HeroProps {
  data?: {
    _id: string;
    title: string | null;
    description: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
      };
      alt?: string;
      _type: "image";
    } | null;
  } | null;
}

function Hero({ data }: HeroProps) {
  const { title, description, image } = data ?? {};

  return (
    <section className={styles.Hero}>
      <Container>
        <Flex
          align="center"
          justify="center"
          direction="column"
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
          >
            <Heading align="center" as="h1" size="9" mb="6">{title}</Heading>
            <Box
              maxWidth="60ch"
              mb="6"
            >
              <Text as="p" align="center" color="gray" size="4">{description}</Text>
            </Box>
          </Flex>
          <div
            className={styles.HeroImage}
          >
            {image?.asset ? (
              <ImageBox>
                <Image
                  src={urlFor(image?.asset?._ref).url()}
                  fill
                  sizes="100vw"
                  alt={image.alt ?? 'Hero Image'}
                />
              </ImageBox>
            ) : (
              <ImageBox>
                <Image
                  src="https://placehold.co/1136x400.jpg"
                  fill
                  sizes="100vw"
                  alt="Hero Image"
                />
              </ImageBox>
            )}
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Hero