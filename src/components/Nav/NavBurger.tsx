"use client"

import * as Collapsible from "@radix-ui/react-collapsible";
import CardLink from "../CardLink/CardLink";
import styles from "./NavBurger.module.scss"
import utilStyles from "./NavUtils.module.scss";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { IconButton, Flex, Text, Separator } from "@radix-ui/themes";
import { SanityDocument } from "next-sanity";
import { useState } from "react";
import { PRODUCTS_QUERYResult, SERVICES_QUERYResult } from "@/root/sanity.types";

interface NavBurgerProps {
  products: PRODUCTS_QUERYResult;
  services: SERVICES_QUERYResult;
}

interface CollapsibleMenuItemProps {
  category: string;
  items: PRODUCTS_QUERYResult | SERVICES_QUERYResult;
}

function CollapsibleMenuItem({ 
  category,
  items,
}: CollapsibleMenuItemProps) {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger
        asChild
        className={styles.NavBurgerTrigger}
      >
        <Flex
          align="center"
          justify="between"
        >
          <Text size="2" as="p">{category}</Text>
          <CaretDownIcon 
            width="24"
            height="24"
            className={utilStyles.CaretDown}
          />
        </Flex>
      </Collapsible.Trigger>
      <Collapsible.Content>
        {items.map(item => (
          <CardLink
            key={item._id}
            href={`/${category.charAt(0).toLowerCase() + category.slice(1)}/${item?.slug?.current}`}
            heading={item.title}
            text={item.description}
            image={item.image}
            hasImg={true}
          />
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

function NavBurger({ 
  products,
  services
}: NavBurgerProps) {
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <nav
      className={styles.NavBurger}
    >
      <IconButton
        variant="ghost"
        size="3"
        color="gray"
        highContrast={true}
        className={styles.NavBurger}
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? (
          <Cross1Icon
            width="18"
            height="18"
          />
        ) : (
          <HamburgerMenuIcon
            width = "18"
            height = "18"
          />
        )}
      </IconButton>
      {openMenu && (
        <menu
          className={styles.NavBurgerContent}
        >
          <CollapsibleMenuItem 
            category="Products"
            items={products}
          />
          <CollapsibleMenuItem
            category="Services"
            items={services}
          />
          <CardLink 
            href="/about"
            heading="About Us"
            hasImg={false}
          />
        </menu>
      )}
    </nav>
  )
}

export default NavBurger