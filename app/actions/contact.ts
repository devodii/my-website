"use server"

import { resend } from "@/lib/resend"

export async function sendEmail(data: { email: string; name: string; message: string }) {
  const { name, email, message } = data

  const { error, data: emailData } = await resend.emails.send({
    from: "Contact Form <hello@classynotes.app>",
    to: ["emmanuelodii80@gmail.com"],
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  })

  if (error) throw new Error(error.message)

  return emailData
}
