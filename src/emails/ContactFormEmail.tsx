import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from "@react-email/components";

interface ContactFormEmailProps {
  message: string;
}

export default function ContactFormEmail({
  message
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Hello world</Preview>
      <Body>
        <Container>
          <Heading>
            New contact form submission
          </Heading>
          <Hr />
          <Section>
            <Text>
              {message}
            </Text>
          </Section>
            <Text>
              This is a preview of the email
            </Text>
        </Container>
      </Body>
    </Html>
  )
}