"use client"

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import styles from "./Slider.module.scss";

interface SliderProps {
  data?: {
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
      };
      _type: "image";
    };
    title?: string;
    alt?: string;
    _key: string;
  }[]
}

function Slider({ data }: SliderProps) {
  return (
    <Marquee
      gradient={true}
      gradientColor="var(--gray-1)"
      gradientWidth={50}
    >
      {data?.map((image) => (
        <figure
          className={styles.SliderItem}
          key={image._key}
        >
          <Image
            src={image?.image?.asset?._ref ? urlFor(image.image.asset._ref).url() : "https://placehold.co/400x600.jpg"}
            alt={image.alt ?? 'Company Logo'}
            title={image.title ?? 'Company Logo'}
            width={240}
            height={80}
          />
        </figure>
      ))}
    </Marquee>
  );
}

export default Slider