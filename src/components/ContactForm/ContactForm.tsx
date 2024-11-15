"use client"

import { useReCaptcha } from "next-recaptcha-v3"
import * as Form from "@radix-ui/react-form"
import { useState, useCallback, useRef, FormEvent } from "react"
import { Flex, Text, TextField, TextArea, Button, Spinner } from "@radix-ui/themes"
import { sendContactEmail } from "@/actions/contact.action";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import styles from "./ContactForm.module.scss"

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
  const formRef = useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useReCaptcha();
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

  const handleAction = useCallback(async (data: FormData) => {
  
    // Generate ReCaptcha token
    const token = await executeRecaptcha("contact_form");

    const validateToken = await fetch("/api/recaptcha", {
      method: "POST",
      body: JSON.stringify({
        token,
      })
    });

    if (!validateToken.ok) {
      setStatus({
        submitting: false,
        code: validateToken.status,
        message: "Validation failed. Please refresh the page and try again.",
      });
      return;
    }

    const res = await sendContactEmail(data, isDialog);

    if (res) {
      setStatus({
        submitting: false,
        code: res.status,
        message: res.message,
      });

      if (formRef.current) {
        formRef.current.reset();
      }
    }

    setTimeout(() => setStatus({ ...status, message: "" }), 5000);
  }, [executeRecaptcha]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setStatus({ ...status, submitting: true });
  }

  return (
    <Form.Root
      id={formTag}
      action={data => handleAction(data)}
      onSubmit={e => handleSubmit(e)}
      ref={formRef}
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
        align="center"
        gap="4"
      >
        {status.message && (
          <Text
            style={{
              color: status.code === 200 ? "green" : "red",
              flex: 1,
            }}
          >
            {status.message}
          </Text>
        )}
        <Button
          type="submit"
          form={changeNameForDialog("contact-form")}
          size="4"
          style={{flex: 1}}
          disabled={status.submitting ? true : false}
        >
          <Spinner
            loading={status.submitting ? true : false}
          >
            <PaperPlaneIcon
              height={20}
              width={20}
            />
          </Spinner>
          <span>Send message</span>
        </Button>
      </Flex>
    </Form.Root>
  )
}