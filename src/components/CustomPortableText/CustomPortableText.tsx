import {
  PortableText,
  type PortableTextComponents,
} from 'next-sanity'
import type { Image as ImageType } from "sanity"
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { BlockContent } from '@/root/sanity.types'
import { Box, Button, Heading, Text, Link as RadixLink } from '@radix-ui/themes'
import Link from 'next/link'
import { Responsive } from '@radix-ui/themes/props'

type Color = 
  "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky" | undefined;

type Variant =
  "classic" | "solid" | "soft" | "surface" | "outline" | "ghost" | undefined

type Size =
  Responsive<"9" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8"> | undefined

export function CustomPortableText({
  value,
  align,
  buttonColor,
  buttonVariant,
  customTextColor,
  headingColor,
  customHeadingColor,
  textColor,
  h1Size,
  pSize,
  pMargin,
}: {
  align?: 'left' | 'center' | 'right' | undefined;
  customTextColor?: string;
  buttonColor?: Color;
  buttonVariant?: Variant;
  textColor?: Color;
  headingColor?: Color;
  customHeadingColor?: string;
  value: BlockContent;
  h1Size?: Size;
  pSize?: Size;
  pMargin?: Size;
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => {
        return <Heading style={{ color: customHeadingColor }} color={headingColor} as="h1" size={h1Size || "9"} mb="6" align={align}>{children}</Heading>
      },
      h2: ({ children }) => {
        return <Heading style={{ color: customHeadingColor }} color={headingColor} as="h2" size="9" mb="6" align={align}>{children}</Heading>
      },
      h3: ({ children }) => {
        return <Heading style={{ color: customHeadingColor }} color={headingColor} as="h3" size="3" mb="1" align={align}>{children}</Heading>
      },
      normal: ({ children }) => {
        return (
          <Box maxWidth="60ch">
            <Text style={{ color: customTextColor }} color={textColor || "gray"} as="p" size={pSize || "4"} mb={pMargin || "6"} align={align}>{children}</Text>
          </Box>
        )
      },
      small: ({ children }) => {
        return <Text style={{ color: customTextColor }} color={textColor || "gray"} as="p" size="2" my="2" align={align}>{children}</Text>
      }
    },
    marks: {
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
          <div>
            <Image
              src={value?.asset ? urlFor(value.asset._ref).url() : 'https://placehold.co/400x600.jpg'}
              alt={value?.alt || ''}
            />
            {value?.caption && (
              <div>
                {value.caption}
              </div>
            )}
          </div>
        )
      },
      button: ({
        value,
      }: {
        value: { buttonText: string; buttonUrl: string }
      }) => {
        return (
          <Link href={`/${value.buttonUrl}`}>
            <Button size="4" variant={buttonVariant} color={buttonColor || "indigo"}>
              {value.buttonText}
            </Button>
          </Link>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}