import { CustomPortableText } from "@/root/src/components/CustomPortableText/CustomPortableText";
import { Section, Flex, Grid, Box } from "@radix-ui/themes";
import { sanityFetch } from "@/root/src/sanity/lib/client";
import { CONTACT_QUERY } from "@/root/src/sanity/lib/queries";
import { CONTACT_QUERYResult } from "@/root/sanity.types";
import ContactForm from "@/root/src/components/ContactForm/ContactForm";
import ResponsiveContainer from "@/root/src/components/ResponsiveContainer/ResponsiveContainer";

export default async function ContactPage() {
  const contact = await sanityFetch<CONTACT_QUERYResult>({
    query: CONTACT_QUERY,
  })

  return (
    <main>
      <Section>
        <ResponsiveContainer>
          <Flex
            direction="column"
            align="center"
            justify="center"
          >
            <Box>
              <CustomPortableText align="center" value={contact?.hero ?? []} />
            </Box>
          </Flex>
        </ResponsiveContainer>
        <Section>
          <ResponsiveContainer>
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
                <ContactForm isDialog={false} />
              </Box>
              <Box>
                <CustomPortableText 
                  pSize="3"
                  pMargin="3"
                  value={contact?.sidebarText ?? []} 
                />
              </Box>
            </Grid>
          </ResponsiveContainer>
        </Section>
      </Section>
    </main>
  )
}