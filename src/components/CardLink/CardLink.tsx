"use client"

import React from "react";
import { Heading, Flex, Avatar } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./CardLink.module.scss";
import { urlFor } from "@/sanity/lib/image";

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
  onClick?: React.Dispatch<React.SetStateAction<boolean>>;
}

function CardLink({ children, heading, text, href, image, hasImg, onClick }: CardLinkProps) {

  function handleClick() {
    if (onClick) {
      onClick(false);
    }
  }

  return (
    <Link 
      href={`${href}`}
      style={{ textDecoration: "none" }}
      onClick={handleClick}
    >
      <Flex
        className={styles.CardLink}
        align="center"
        p="2"
      >
        {hasImg && (
          <Avatar
            fallback={`${heading?.at(0)}`}
            src={image?.asset && urlFor(image?.asset?._ref).url()}
            alt={heading ?? ""}
            color="gray"
            size="2"
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
        </Flex>
      </Flex>
    </Link>
  );
}

export default CardLink;