'use server';

import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('email');
  const message = formData.get('message');

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let response;
  try {
    response = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'zamilbahri@gmail.com',
      subject: `Message from ${senderEmail}`,
      replyTo: senderEmail as string,
      // using Ract.createElement because want to keep file as tsx
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  const { data, error } = response;

  // this error comes from resend, not email validation
  if (data) {
    console.log(data);
    return {
      data,
    };
  } else {
    return {
      error: getErrorMessage(error),
    };
  }
};

export default sendEmail;
