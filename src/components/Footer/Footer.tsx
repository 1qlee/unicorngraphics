import { PRODUCTS_QUERYResult, SERVICES_QUERYResult, SETTINGS_QUERYResult } from "@/root/sanity.types";
import { Separator, Text, Container, Box, Grid, Flex, Heading, Link } from "@radix-ui/themes";

interface FooterProps {
  products: PRODUCTS_QUERYResult,
  services: SERVICES_QUERYResult,
  settings: SETTINGS_QUERYResult,
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <Heading
      as="h3"
      size="3"
      mb="2"
    >{children}</Heading>
  )
}

function Footer({
  products,
  services,
  settings,
}: FooterProps) {
  return (
    <Box
      asChild
      pb="4"
    >
      <footer>
        <Container
          px={{
            initial: "4",
            lg: "0",
          }}
        >
          <Separator
            size="4"
            my="9"
          />
          <Grid
            columns="repeat(auto-fit, minmax(200px, 1fr))"
          >
            <Text>
              &copy; {new Date().getFullYear()} Unicorn Graphics, Inc.
            </Text>
            <Flex
              direction="column"
            >
              <FooterHeading>Company</FooterHeading>
              <Link
                href="/about"
                color="gray"
                mb="1"
              >
                About
              </Link>
              <Link
                href="/contact"
                color="gray"
                mb="1"
              >
                Contact
              </Link>
            </Flex>
            <Flex
              direction="column"
            >
              <FooterHeading>Products</FooterHeading>
              {products.map(product => (
                <Link
                  href={`/products/${product?.slug?.current}`}
                  key={product._id}
                  color="gray"
                  mb="1"
                >
                  {product.title}
                </Link>
              ))}
            </Flex>
            <Flex
              direction="column"
            >
              <FooterHeading>Services</FooterHeading>
              {services.map(service => (
                <Link
                  href={`/services/${service?.slug?.current}`}
                  key={service._id}
                  color="gray"
                  mb="1"
                >
                  {service.title}
                </Link>
              ))}
            </Flex>
          </Grid>
        </Container>
      </footer>
    </Box>
  )
}

export default Footer