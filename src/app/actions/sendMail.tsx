"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (formData: FormData) => {
  try {
    const senderMail = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["sashmit2003@gmail.com"],
      reply_to: senderMail as string,
      subject: subject as string,
      text: message as string,
    });
    console.log("Email sent successfully:", data);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};
