import React from "react";
import { Text, Heading, Flex, Avatar } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./CardLink.module.scss";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageCrop, SanityImageHotspot } from "@sanity/image-url/lib/types/types";
import { internalGroqTypeReferenceTo } from "@/root/sanity.types";

interface CardLinkProps {
  heading?: string | null;
  text?: string | null;
  href?: string | null;
  hasImg: boolean;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
    };
    alt?: string;
    _type: "image";
  } | null;
  children?: React.ReactNode;
}

function CardLink({ children, heading, text, href, image, hasImg }: CardLinkProps) {
  return (
    <Link 
      href={`${href}`}
      style={{ textDecoration: "none" }}
    >
      <Flex
        className={styles.CardLink}
        align="center"
        px="2"
        py="4"
      >
        {hasImg && (
          <Avatar
            fallback={`${heading?.at(0)}`}
            src={image?.asset && urlFor(image?.asset?._ref).url()}
            alt={heading ?? ""}
            color="gray"
            mr="2"
          />
        )}
        <Flex
          direction="column"
        >
          <Heading
            as="h3"
            size="2"
            weight="regular"
            style={{
              color: "var(--gray-12)"
            }}
          >
            {heading}
          </Heading>
          <Text
            size="2"
            color="gray"
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}

export default CardLink;