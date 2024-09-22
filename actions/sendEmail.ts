"use server";

import {
  getErrorMessage,
  validateString,
} from "@/lib/utils/contact-input-validation";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import { EmailResponse } from "@/lib/types";
import {
  validateCaptcha,
  verifyCaptchaToken,
} from "@/lib/utils/recaptcha-validation";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (
  token: string | null,
  formData: FormData,
): Promise<EmailResponse> => {
  if (!token) {
    return {
      error: "Token not found",
    };
  }

  // verify recaptcha token
  const captchaData = await verifyCaptchaToken(token);
  const captchaError = validateCaptcha(captchaData);
  if (captchaError) {
    return { error: captchaError };
  }

  const senderEmail = formData.get("email");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "zamilbahri@gmail.com",
      subject: `Message from ${senderEmail}`,
      replyTo: senderEmail as string,
      // using React.createElement because want to keep file as ts
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    if (response.error) {
      return { error: response.error.message };
    }

    return { data: response.data };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return {
      error: getErrorMessage(error),
    };
  }
};

export default sendEmail;
