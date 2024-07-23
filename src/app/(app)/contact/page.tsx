import { CustomPortableText } from "@/root/src/components/CustomPortableText/CustomPortableText";
import { Container, Section, Flex, Grid, Box, Button } from "@radix-ui/themes";
import { sanityFetch } from "@/root/src/sanity/lib/client";
import { CONTACT_QUERY } from "@/root/src/sanity/lib/queries";
import { CONTACT_QUERYResult } from "@/root/sanity.types";
import ContactForm from "@/root/src/components/ContactForm/ContactForm";

export default async function ContactPage() {
  const contact = await sanityFetch<CONTACT_QUERYResult>({
    query: CONTACT_QUERY,
  })

  return (
    <main>
      <Section>
        <Container>
          <Flex
            direction="column"
            align="center"
            justify="center"
          >
            <CustomPortableText align="center" value={contact?.hero ?? []} />
          </Flex>
        </Container>
        <Section>
          <Container>
            <Grid
              columns="repeat(auto-fit, minmax(300px, 1fr))"
              gap="6"
            >
              <Box
                p="6"
                style={{
                  borderRadius: "var(--radius-2)",
                  boxShadow: "var(--shadow-4)",
                }}
              >
                <ContactForm
                  data={contact}
                />
                <Flex
                  mt="4"
                  justify="end"
                >
                  <Button 
                    type="submit"
                    form="contact-form"
                    size="3"
                  >
                    Send message
                  </Button>
                </Flex>
              </Box>
              <Box>
                <CustomPortableText 
                  pSize="3"
                  pMargin="3"
                  value={contact?.sidebarText ?? []} 
                />
              </Box>
            </Grid>
          </Container>
        </Section>
      </Section>
    </main>
  )
}