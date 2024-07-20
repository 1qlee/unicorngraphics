import {
  PortableText,
  type PortableTextComponents,
} from 'next-sanity'
import type { Image as ImageType } from "sanity"
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { BlockContent } from '@/root/sanity.types'
import { Heading, Text } from '@radix-ui/themes'

export function CustomPortableText({
  value,
}: {
  paragraphClasses?: string
  value: BlockContent
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => {
        return <Heading as="h1" size="9" mb="6">{children}</Heading>
      },
      h2: ({ children }) => {
        return <Heading as="h2" size="9" mb="6">{children}</Heading>
      },
      normal: ({ children }) => {
        return <Text as="p" size="4" color="gray">{children}</Text>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
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
              src={value?.asset ? urlFor(value.asset._ref).url() : ''}
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
    },
  }

  return <PortableText components={components} value={value} />
}