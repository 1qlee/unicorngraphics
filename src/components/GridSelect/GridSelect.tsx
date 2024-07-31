import type { Slug } from "@/root/sanity.types"
import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import styles from "./GridSelect.module.scss"
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";
import PlaceholderImg from "@/public/images/600x400.jpg"
import ImageBox from "../ImageBox/ImageBox";

interface GridSelectProps {
  category: string;
  columns: string;
  data: {
    _id: string;
    _type: "page";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    mainImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
      };
      alt?: string;
      _type: "image";
    };
    category?: "product" | "service";
    description?: string;
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
      gap="4"
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
            <Box
              width="100%"
              height="300px"
            >
              <ImageBox>
                <Image
                  src={item.mainImage?.asset?._ref ? urlFor(item.mainImage.asset._ref).url() : PlaceholderImg}
                  alt={item.mainImage?.alt ?? 'Product image'}
                  fill
                  sizes="100vw"
                />
              </ImageBox>
            </Box>
            <Box
              className={styles.GridSelectContent}
            >
              <Heading as="h3" size="4" my="2">{item.title}</Heading>
              <Text as="p" color="gray" size="3">{item.description}</Text>
            </Box>
          </article>
        </Link>
      ))}
    </Grid>
  )
}

export default GridSelect