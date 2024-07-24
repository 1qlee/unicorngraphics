import type { Slug } from "@/root/sanity.types"
import { Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import styles from "./GridSelect.module.scss"
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";

interface GridSelectProps {
  category: string;
  columns: string;
  data: {
    _id: string;
    description: string | null;
    title: string | null;
    slug: Slug | null; 
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
      };
      alt?: string;
      _type: "image";
    } | null;
  }[]
}

function GridSelect({ 
  data, 
  category,
  columns
}: GridSelectProps) {
  return (
    <Grid
      columns={columns}
      gap="6"
    >
      {data.map((item) => (
        <Link
          key={item._id}
          href={`/${category}/${item.slug?.current}`}
          className={styles.GridSelectCol}
        >
          <article
            className={styles.GridSelectCard}
          >
            <Image
              src={item.image?.asset?._ref ? urlFor(item.image.asset._ref).url() : "https://placehold.co/400x600.jpg"}
              alt={item.image?.alt ?? 'Product image'}
              sizes="100vw"
              width={500}
              height={400}
            />
            <Heading as="h3" size="3" my="2">{item.title}</Heading>
            <Text as="p" color="gray" size="2">{item.description}</Text>
          </article>
        </Link>
      ))}
    </Grid>
  )
}

export default GridSelect