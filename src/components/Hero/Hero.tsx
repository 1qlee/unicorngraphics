import styles from './Hero.module.scss'
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import { BlockContent } from '@/root/sanity.types';
import { Container, AspectRatio, Button } from '@radix-ui/themes';
import { HeroText } from "./HeroText"
import ImageBox from '../ImageBox/ImageBox';
import Link from 'next/link';

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
  heroButton?: {
    text?: string;
    link?: string;
  }
}

interface HeroProps {
  data: HeroData;
}

function Hero({ data }: HeroProps) {
  const { hero, heroImage, heroButton } = data;
  
  return (
    <section className={styles.Hero}>
      <Container>
        <div className={styles.HeroWrapper}>
          <div className={styles.HeroContent}>
            {hero && <HeroText value={hero} />}
            <Link
              href={`/${heroButton?.link}`}
            >
              <Button
                size="4"
                mt="4"
              >
                {heroButton?.text}
              </Button>
            </Link>
          </div>
          <div
            className={styles.HeroImage}
          >
            {heroImage?.asset && (
              <ImageBox>
                <Image
                  src={urlFor(heroImage?.asset?._ref).url()}
                  fill
                  sizes="100vw"
                  alt={heroImage.alt ?? 'Hero Image'}
                />
              </ImageBox>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero