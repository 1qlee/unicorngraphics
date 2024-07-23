import { Flex, Text, TextField, TextArea } from "@radix-ui/themes"
import { CONTACT_QUERYResult } from "@/root/sanity.types"
import { sendContactEmail } from "@/actions/contact.action";

interface LabelProps {
  children: React.ReactNode;
  text: string;
  tag?: string;
}

function Label({ children, text, tag }: LabelProps) {
  return (
    <fieldset>
      <label htmlFor={tag}>
        <Text as="p" size="2" mb="1" weight="bold">
          {text}
        </Text>
      </label>
      {children}
    </fieldset>
  )
}

export default async function ContactForm({ data }: { data: CONTACT_QUERYResult }) {

  return (
    <form
      id="contact-form"
      action={sendContactEmail}
    >
      <Flex direction="column" gap="4">
        <Label
          text="Name"
          tag="name"
        >
          <TextField.Root
            id="name"
            name="name"
            placeholder="Enter your full name"
            radius="medium"
            required
            size="3"
          />
        </Label>
        <Label text="Email" tag="email">
          <TextField.Root
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            radius="medium"
            required
            size="3"
          />
        </Label>
        <Label text="Phone (U.S. only)">
          <TextField.Root
            placeholder="Enter your phone number"
            name="phone"
            radius="medium"
            size="3"
            type="tel"
            required
          />
        </Label>
        <Label text="Message">
          <TextArea
            placeholder="Type your message here..."
            name="message"
            radius="medium"
            size="3"
            resize="vertical"
            required
          />
        </Label>

      </Flex>
    </form>
  )
}