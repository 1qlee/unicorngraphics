import styles from './Hero.module.scss'
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import { BlockContent } from '@/root/sanity.types';
import { Box, Flex, Section } from '@radix-ui/themes';
import { CustomPortableText } from '../CustomPortableText/CustomPortableText';
import ResponsiveContainer from '../ResponsiveContainer/ResponsiveContainer';
import ImageBox from '../ImageBox/ImageBox';

interface HeroData {
  heroSection?: {
    heroContent?: BlockContent;
    heroImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
      };
      alt?: string;
      _type: "image";
    };
  };
}

interface HeroProps {
  data: HeroData;
}

function Hero({ data }: HeroProps) {
  const { heroSection } = data;
  const { heroContent, heroImage } = heroSection ?? {};
  
  return (
    <Section
      py="0"
    >
      <ResponsiveContainer
        flexGrow="1"
        flexShrink="1"
      >
        <div className={styles.Hero}>
          <Flex
            align="center"
            justify="center"
            direction="column"
            width="100%"
          >
            <Box
              p="4"
              maxWidth={{ initial: "100%", md: "50%" }}
              className={styles.Content}
            >
              {heroContent && (
                <CustomPortableText
                  value={heroContent}
                />
              )}
            </Box>
          </Flex>
          <div
            className={styles.Image}
          >
            {heroImage?.asset && (
              <Box width="100%" height="100%">
                <ImageBox>
                  <Image
                    src={urlFor(heroImage?.asset?._ref).url()}
                    fill
                    sizes="100vw"
                    alt={heroImage.alt ?? 'Hero Image'}
                  />
                </ImageBox>
              </Box>
            )}
          </div>
        </div>
      </ResponsiveContainer>
    </Section>
  )
}

export default Hero