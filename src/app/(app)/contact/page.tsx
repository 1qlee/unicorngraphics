import { CustomPortableText } from "@/root/src/components/CustomPortableText/CustomPortableText";
import { Section, Flex, Grid, Box } from "@radix-ui/themes";
import { sanityFetch } from "@/root/src/sanity/lib/client";
import { CONTACT_QUERY } from "@/root/src/sanity/lib/queries";
import { CONTACT_QUERYResult } from "@/root/sanity.types";
import ContactForm from "@/root/src/components/ContactForm/ContactForm";
import ResponsiveContainer from "@/root/src/components/ResponsiveContainer/ResponsiveContainer";
import styles from "./Contact.module.scss"

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
            <Box
              maxWidth="600px"
              className={styles.Hero}
            >
              <CustomPortableText align="center" value={contact?.hero ?? []} />
            </Box>
          </Flex>
        </ResponsiveContainer>
        <Section>
          <ResponsiveContainer>
            <Flex
              direction="column"
              align="center"
              justify="center"
            >
              <Box>
                <Box
                  maxWidth="600px"
                  p="6"
                  mb="9"
                  mx="auto"
                  style={{
                    borderRadius: "var(--radius-2)",
                    boxShadow: "var(--shadow-4)",
                  }}
                >
                  <ContactForm isDialog={false} />
                </Box>
                <Grid
                  columns="repeat(auto-fit, minmax(200px, 1fr))"
                  gap="6"
                >
                  <Box>
                    <CustomPortableText
                      value={contact?.content?.leftContent ?? []}
                    />
                  </Box>
                  <Box>
                    <CustomPortableText
                      value={contact?.content?.middleContent ?? []}
                    />
                  </Box>
                  <Box>
                    <CustomPortableText
                      value={contact?.content?.rightContent ?? []}
                    />
                  </Box>
                </Grid>
              </Box>
            </Flex>
          </ResponsiveContainer>
        </Section>
      </Section>
    </main>
  )
}