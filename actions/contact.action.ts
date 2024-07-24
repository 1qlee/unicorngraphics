"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/components/emails/ContactFormEmail";
import ContactFormConfirmEmail from "@/components/emails/ContactFormConfirmEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData, isDialog: boolean) {
  const data = {
    email: isDialog ? formData.get('email-dialog') as string : formData.get('email') as string,
    name: isDialog ? formData.get('name-dialog') as string : formData.get('name') as string,
    phone: isDialog ? formData.get('phone-dialog') as string : formData.get('phone') as string,
    message: isDialog ? formData.get('message-dialog') as string : formData.get('message') as string,
  }

  try {
    const response = await resend.batch.send([
      {
        from: `Website Inquiry from ${data.name} <onboarding@resend.dev>`,
        to: ['jason@unicorngraphics.com'],
        subject: '[Contact] New message from ' + data.name,
        reply_to: data.email as string,
        react: React.createElement(ContactFormEmail, data),
      },
      {
        from: `Unicorn Graphics <onboarding@resend.dev>`,
        to: [data.email],
        subject: 'We have received your message!',
        reply_to: "jason@unicorngraphics.com",
        react: React.createElement(ContactFormConfirmEmail, data),
      }
    ]);

    if (response.error) {
      console.error(response.error);
      throw new Error("Failed to send contact email");
    }

    return {
      status: 200,
      message: "Email sent successfully. We will be in touch soon!",
    }
  } catch(error) {
    return {
      status: 500,
      message: "Failed to send message. Please try again."
    }
  }

  // if (data) {
  //   const senderEmail = formData.get('email');
  //   const senderName = formData.get('name');
  //   const senderPhone = formData.get('phone');
  //   const message = formData.get('message');

  //   try {
  //     const { data, error } = await resend.emails.send({
  //       from: `${senderName} <${senderEmail}>`,
  //       to: ['wonq33@gmail.com'],
  //       subject: 'Hello world',
  //       reply_to: senderEmail as string,
  //       react: React.createElement(ContactFormEmail, {
  //         message: message as string,

  //       }),
  //     });

  //     if (error) {
  //       return Response.json({ error }, { status: 500 });
  //     }

  //     return Response.json(data);
  //   } catch (error) {
  //     return Response.json({ error }, { status: 500 });
  //   }
  // }
}