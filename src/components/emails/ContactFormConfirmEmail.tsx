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
      <Preview>Thank you for contacting us...</Preview>
      <Body>
        <Heading>
          We have received your message!
        </Heading>
        <Hr />
        <Section>
          <Text>
            Hello {data.name}
          </Text>
          <Text>
            Thank you for contacting us. We have received your message and will be in touch soon.
          </Text>
          <Text>
            If you need to speak to someone immediately, please call us at 516-222-0712.
          </Text>
          <Text>
            Thank you!
          </Text>
        </Section>
      </Body>
    </Html>
  )
}