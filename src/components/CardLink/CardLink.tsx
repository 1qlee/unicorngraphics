import React from "react";
import { Text, Heading, Flex, Avatar } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./CardLink.module.scss";

interface CardLinkProps {
  heading?: string | null;
  text?: string | null;
  href?: string | null;
  hasImg: boolean;
  children?: React.ReactNode;
}

function CardLink({ children, heading, text, href, hasImg }: CardLinkProps) {
  return (
    <Link 
      href={`${href}`}
      style={{ textDecoration: "none" }}
    >
      <Flex
        className={styles.CardLink}
        px="2"
        py="4"
      >
        {hasImg && (
          <Avatar
            fallback={`${heading?.at(0)}`}
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