"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "../src/emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  console.log("FUNNY")
  console.log('formData', formData);
  const senderEmail = formData.get('email');
  const senderName = formData.get('name');
  const senderPhone = formData.get('phone');
  const message = formData.get('message');

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