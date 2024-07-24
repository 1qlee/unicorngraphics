import { Flex, Section } from '@radix-ui/themes';
import { CustomPortableText } from '@/components/CustomPortableText/CustomPortableText';
import ResponsiveContainer from '@/components/ResponsiveContainer/ResponsiveContainer';
import { ABOUT_QUERY } from '@/root/src/sanity/lib/queries';
import { ABOUT_QUERYResult } from '@/root/sanity.types';
import { sanityFetch } from '@/root/src/sanity/lib/client';
import Hero from '@/root/src/components/Hero/Hero';

export default async function AboutPage() {
  const about = await sanityFetch<ABOUT_QUERYResult>({
    query: ABOUT_QUERY,
  })

  return (
    <main>
      {about && (
        <Hero
          data={about}
        />
      )}
    </main>
  )
}