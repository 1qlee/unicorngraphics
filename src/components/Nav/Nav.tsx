import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import CardLink from "@/components/CardLink/CardLink";
import Image from "next/image";
import NavBurger from "@/components/Nav/NavBurger";
import styles from "./Nav.module.scss";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Flex, Container, Text, Button, Link, Box, Grid, Dialog, TextField, TextArea } from "@radix-ui/themes";

import { urlFor } from "@/sanity/lib/image";
import { PRODUCTS_QUERYResult, SERVICES_QUERYResult, SETTINGS_QUERYResult } from "@/root/sanity.types";

interface NavProps {
  products: PRODUCTS_QUERYResult;
  services: SERVICES_QUERYResult;
  settings: SETTINGS_QUERYResult;
}

async function Nav({
  products,
  services,
  settings,
}: NavProps) {

  return (
    <nav className={styles.NavBar}>
      <Container
        px={{
          initial: "4",
          lg: "0",
        }}
      >
        <Flex
          align="center"
          justify="between"
          gap="4"
        >
          <Link
            href="/"
          >
            {settings?.logo?.asset?._ref ? (
              <Image
                src={urlFor(settings?.logo?.asset?._ref).width(32).height(32).url()}
                width="32"
                height="32"
                alt={settings?.logo?.alt ?? "Company Logo"}
              />
            ) : (
              <Text size="2" weight="bold">
                Unicorn Graphics
              </Text>
            )}
          </Link>
          <NavigationMenu.Root
            className={styles.NavigationMenuRoot}
            delayDuration={0}
          >
            <NavigationMenu.List className={styles.NavigationMenuList}>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger className={styles.NavigationMenuTrigger} asChild>
                  <Button>
                    Products <CaretDownIcon className={styles.CaretDown} aria-hidden />
                  </Button>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className={styles.NavigationMenuContent}>
                  <Box width="556px">
                    <Grid
                      columns={{
                        initial: "1",
                        xs: "2"
                      }}
                      gap="2"
                    >
                      {products.map(product => (
                        <CardLink
                          key={product._id}
                          href={`/products/${product.slug?.current}`}
                          heading={product.title}
                          image={product.image}
                          hasImg={true}
                        />
                      ))}
                    </Grid>
                  </Box>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger className={styles.NavigationMenuTrigger} asChild>
                  <Button>
                    Services <CaretDownIcon className={styles.CaretDown} aria-hidden />
                  </Button>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className={styles.NavigationMenuContent}>
                  <Box width="480px">
                    <Grid
                      columns={{
                        initial: "1",
                        md: "2"
                      }}
                      gap="2"
                    >
                      {services.map(service => (
                        <CardLink
                          key={service._id}
                          href={`/services/${service.slug?.current}`}
                          heading={service.title}
                          image={service.image}
                          hasImg={true}
                        />
                      ))}
                    </Grid>
                  </Box>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link className={styles.NavigationMenuLink} asChild>
                  <Link href="https://github.com/radix-ui" size="2">
                    About Us
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Indicator className={styles.NavigationMenuIndicator}>
                <div className={styles.Arrow} />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className={styles.ViewportPosition}>
              <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
            </div>
          </NavigationMenu.Root>
          <Flex
            gap="4"
            align="center"
          >
            <NavBurger 
              products={products}
              services={services}
            />
            <Dialog.Root>
              <Dialog.Trigger>
                <Button
                  mr={{
                    initial: "4",
                    
                    lg: "2",
                  }}
                >
                  Contact Us
                </Button>
              </Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Title>
                  Contact Us / Request a Quote
                </Dialog.Title>
                <Dialog.Description
                  mb="4"
                >
                  Need a quote for your project or have any questions about our products or services? Send us an email using the form below, and we'll get back to you as soon as possible.
                </Dialog.Description>

                <Flex direction="column" gap="3">
                  <label>
                    <Text size="2" mb="1" weight="bold">
                      Name
                    </Text>
                    <TextField.Root
                      placeholder="Full name"
                      radius="medium"
                      size="3"
                      variant="classic"
                    />
                  </label>
                  <label>
                    <Text size="2" mb="1" weight="bold">
                      Email
                    </Text>
                    <TextField.Root
                      placeholder="Email address"
                      radius="medium"
                      size="3"
                      variant="classic"
                    />
                  </label>
                  <label>
                    <Text size="2" mb="1" weight="bold">
                      Phone (U.S. only)
                    </Text>
                    <TextField.Root
                      placeholder="Phone number"
                      radius="medium"
                      size="3"
                      type="tel"
                      variant="classic"
                    />
                  </label>
                  <label>
                    <Text size="2" mb="1" weight="bold">
                      Message
                    </Text>
                    <TextArea
                      placeholder="Type your message here..."
                      radius="medium"
                      size="3"
                      variant="classic"
                    />
                  </label>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        Close
                      </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button>Send message</Button>
                    </Dialog.Close>
                  </Flex>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>
          </Flex>
        </Flex>
      </Container>
    </nav>
  )
}

export default Nav