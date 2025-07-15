import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  message: string | null;
  email: string | null;
  name: string | null;
  phone: string | null;
  deadline: string | null;
  budget: string | null;
}

export default function ContactFormEmail(data: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>You have a new contact form submission</Preview>
      <Body>
        <Heading>Message from: {data.name}</Heading>
        <Text>
          Reply to: {data.email} {data.phone && `or call: ${data.phone}`}
        </Text>
        <Hr />
        <Section>
          <Text>{data.message}</Text>
          <Text>{data.deadline && `Deadline: ${data.deadline}`}</Text>
          <Text>{data.budget && `Budget: ${data.budget}`}</Text>
        </Section>
      </Body>
    </Html>
  );
}
