import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Preview,
  Section,
  Text
} from "@react-email/components";

interface ContactFormEmailProps {
  message: string | null;
  email: string | null;
  name: string | null;
  phone: string | null;
}

export default function ContactFormEmail(data: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>You have a new contact form submission</Preview>
      <Body>
        <Heading>
          Message from: {data.name}
        </Heading>
        <Text>Reply to: {data.email} or call: {data.phone}</Text>
        <Hr />
        <Section>
          <Text>
            {data.message}
          </Text>
        </Section>
      </Body>
    </Html>
  )
}