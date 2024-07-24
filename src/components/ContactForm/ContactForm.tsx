"use client"

import * as Form from "@radix-ui/react-form"
import { useState } from "react"
import { Flex, Text, TextField, TextArea, Button, Spinner } from "@radix-ui/themes"
import { sendContactEmail } from "@/actions/contact.action";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import styles from "./ContactForm.module.scss"

interface LabelProps {
  children: React.ReactNode;
  text: string;
  tag?: string;
}

interface StateProps {
  submitting: boolean;
  code: number | null;
  message: string | null;
}

function ErrorMessage({ children }: { children: React.ReactNode }) {
  const ERROR_COLOR = "#E5484D";

  return (
    <Text size="2" as="p" mt="1" style={{ color: ERROR_COLOR }}>{children}</Text>
  )
}

function Label({ children, tag}: { children: React.ReactNode, tag: string }) {
  return (
    <Text htmlFor={tag} size="2" as="label" mb="1" weight="bold">{children}</Text>
  )
}

export default function ContactForm({ isDialog }: { isDialog: boolean }) {
  const [status, setStatus] = useState<StateProps>({
    submitting: false,
    code: null,
    message: "",
  });
  const nameTag = changeNameForDialog("name");
  const emailTag = changeNameForDialog("email");
  const phoneTag = changeNameForDialog("phone");
  const messageTag = changeNameForDialog("message");
  const formTag = changeNameForDialog("contact-form");

  function changeNameForDialog(name: string) {
    if (isDialog) {
      return name + "-dialog";
    }
    return name;
  }

  async function handleSubmit(data: FormData) {
    setStatus({
      ...status,
      submitting: true,
      code: null,
    });

    const startTime = performance.now();
    const res = await sendContactEmail(data, isDialog);
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`Data took ${duration} milliseconds to come back`);

    if (res) {
      setStatus({
        submitting: false,
        code: res.status,
        message: res.message,
      });
    }
  }

  return (
    <Form.Root
      id={formTag}
      action={data => handleSubmit(data)}
    >
      <Form.Field name={nameTag} className={styles.Field}>
        <Form.Label asChild>
          <Label tag={nameTag}>Name</Label>
        </Form.Label>
        <Form.Control className={styles.Control} asChild>
          <TextField.Root
            id={nameTag}
            name={nameTag}
            placeholder="Enter your full name"
            radius="medium"
            required
            size="3"
          />
        </Form.Control>
        <Form.Message match="valueMissing" asChild>
          <ErrorMessage>Name is required.</ErrorMessage>
        </Form.Message>
      </Form.Field>
      <Form.Field name={emailTag} className={styles.Field}>
        <Form.Label asChild>
          <Label tag={emailTag}>Email</Label>
        </Form.Label>
        <Form.Control className={styles.Control} asChild>
          <TextField.Root
            id={emailTag}
            name={emailTag}
            placeholder="Enter your email"
            type="email"
            radius="medium"
            required
            size="3"
          />
        </Form.Control>
        <Form.Message match="valueMissing" asChild>
          <ErrorMessage>Email is required.</ErrorMessage>
        </Form.Message>
        <Form.Message match="typeMismatch" asChild>
          <ErrorMessage>Email is invalid.</ErrorMessage>
        </Form.Message>
      </Form.Field>
      <Form.Field name={phoneTag} className={styles.Field}>
        <Form.Label asChild>
          <Label tag={phoneTag}>Phone</Label>
        </Form.Label>
        <Form.Control className={styles.Control} asChild>
          <TextField.Root
            id={phoneTag}
            name={phoneTag}
            placeholder="Enter your phone number"
            type="tel"
            radius="medium"
            pattern="^[0-9]{10}$"
            maxLength={10}
            minLength={10}
            required
            size="3"
          />
        </Form.Control>
        <Form.Message match="valueMissing" asChild>
          <ErrorMessage>Phone number is required.</ErrorMessage>
        </Form.Message>
        <Form.Message match="patternMismatch" asChild>
          <ErrorMessage>Phone number is invalid.</ErrorMessage>
        </Form.Message>
      </Form.Field>
      <Form.Field name={messageTag} className={styles.Field}>
        <Form.Label asChild>
          <Label tag={messageTag}>Message</Label>
        </Form.Label>
        <Form.Control className={styles.Control} asChild>
          <TextArea
            id={messageTag}
            name={messageTag}
            placeholder="Type your message here..."
            radius="medium"
            size="3"
            resize="vertical"
            required
          />
        </Form.Control>
        <Form.Message match="valueMissing" asChild>
          <ErrorMessage>Message is required.</ErrorMessage>
        </Form.Message>
      </Form.Field>
      <Flex
        mt="4"
        justify="between"
      >
        <Text>
          {status.message}
        </Text>
        <Button
          type="submit"
          form={changeNameForDialog("contact-form")}
          size="3"
          disabled={status.submitting ? true : false}
        >
          <Spinner
            loading={status.submitting ? true : false}
          >
            <EnvelopeClosedIcon />
          </Spinner>
          Send message
        </Button>
      </Flex>
    </Form.Root>
  )
}