import {
  PortableText,
  type PortableTextComponents,
} from 'next-sanity'
import type { Image as ImageType, TypedObject } from "sanity"
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Box, Button, Heading, Text, Link as RadixLink } from '@radix-ui/themes'
import Link from 'next/link'
import { Responsive } from '@radix-ui/themes/props'
import ImageBox from "@/components/ImageBox/ImageBox"
import DynamicIcon from '@/sanity/components/DynamicIcon'

type Color = 
  "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky" | undefined;

type Variant =
  "classic" | "solid" | "soft" | "surface" | "outline" | "ghost" | undefined

type Size = Responsive<"9" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8"> | undefined

type Weight = Responsive<"bold" | "light" | "regular" | "medium"> | undefined

export function CustomPortableText({
  value,
  align,
  buttonColor,
  buttonVariant,
  customTextColor,
  headingColor,
  headingWeight,
  customHeadingColor,
  textColor,
  h1Size,
  h2Size,
  pSize,
  pMargin,
}: {
  align?: 'left' | 'center' | 'right' | undefined;
  customTextColor?: string;
  buttonColor?: Color;
  buttonVariant?: Variant;
  textColor?: Color;
  headingColor?: Color;
  headingWeight?: Weight;
  customHeadingColor?: string;
  value: TypedObject | TypedObject[];
  h1Size?: Size;
  h2Size?: Size;
  pSize?: Size;
  pMargin?: Size;
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => {
        return <Heading as="h1" size="9" mb="4" weight="regular">{children}</Heading>
      },
      h2: ({ children }) => {
        return <Heading as="h2" size="8" mb="4" weight="regular">{children}</Heading>
      },
      h3: ({ children }) => {
        return <Heading as="h3" size="7" mb="4" weight="regular">{children}</Heading>
      },
      h4: ({ children }) => {
        return <Heading as="h4" size="5" mb="4" weight="regular">{children}</Heading>
      },
      normal: ({ children }) => {
        return <Text as="p" size="4" mb="4" color="gray">{children}</Text>
      },
      small: ({ children }) => {
        return <Text as="p" size="2" mb="4">{children}</Text>
      },
    },
    marks: {
      lime: ({ children }) => {
        return <Text color="lime">{children}</Text>
      },
      orange: ({ children }) => {
        return <Text color="orange">{children}</Text>
      },
      indigo: ({ children }) => {
        return <Text color="indigo">{children}</Text>
      },
      white: ({ children }) => {
        return <Text style={{ color: "#fff" }}>{children}</Text>
      },
      link: ({ children, value }) => {
        return (
          <RadixLink
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </RadixLink>
        )
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: ImageType & { alt?: string; caption?: string }
      }) => {
        return (
          <ImageBox>
            <Image
              src={value?.asset ? urlFor(value.asset._ref).url() : 'https://placehold.co/400x600.jpg'}
              alt={value?.alt || ''}
              fill
            />
            {value?.caption && (
              <div>
                {value.caption}
              </div>
            )}
          </ImageBox>
        )
      },
      button: ({
        value,
      }: {
        value: { text: string; link: string, icon: string }
      }) => {
        return (
          <Link href={`/${value.link}`}>
            <Button size="4" variant={buttonVariant} color={buttonColor || "indigo"}>
              <DynamicIcon icon={value.icon} height="24px" width="24px" />
              <span>{value.text}</span>
            </Button>
          </Link>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}