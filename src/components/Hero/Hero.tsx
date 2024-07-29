import styles from './Hero.module.scss'
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import { BlockContent } from '@/root/sanity.types';
import { Flex, Section } from '@radix-ui/themes';
import { CustomPortableText } from '../CustomPortableText/CustomPortableText';
import ResponsiveContainer from '../ResponsiveContainer/ResponsiveContainer';

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
      <div className={styles.Hero}>
        <ResponsiveContainer>
          <Flex
            className={styles.Content}
          >
            {heroContent && (
              <CustomPortableText
                value={heroContent}
              />
            )}
          </Flex>
          <div
            className={styles.Image}
          >
            {heroImage?.asset && (
              <Image
                src={urlFor(heroImage?.asset?._ref).url()}
                fill
                sizes="100vw"
                alt={heroImage.alt ?? 'Hero Image'}
              />
            )}
          </div>
        </ResponsiveContainer>
      </div>
    </Section>
  )
}

export default Hero