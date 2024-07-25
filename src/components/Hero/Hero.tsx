import styles from './Hero.module.scss'
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import { BlockContent } from '@/root/sanity.types';
import { Container, Flex } from '@radix-ui/themes';
import ImageBox from '../ImageBox/ImageBox';
import { CustomPortableText } from '../CustomPortableText/CustomPortableText';

interface HeroData {
  hero?: BlockContent | null;
  heroImage?: {
    alt?: string;
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
    };
    _type: "image";
  };
}

interface HeroProps {
  data: HeroData;
}

function Hero({ data }: HeroProps) {
  const { hero, heroImage } = data;
  
  return (
    <section className={styles.Hero}>
      <div className={styles.Wrapper}>
        <Flex
          width="60ch"
          className={styles.Content}
        >
          {hero && (
            <CustomPortableText
              headingColor='orange'
              value={hero}
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
      </div>
    </section>
  )
}

export default Hero