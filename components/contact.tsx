'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import sendEmail from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { data, error } = await sendEmail(formData);

          if (error) {
            alert(error);
            return;
          }

          alert('Email sent successfully!');
        }}
      >
        <input
          className="h-14 p-4 rounded-lg border borderBlack"
          name="email"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 p-4 my-3 roundedlg borderBlack"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
