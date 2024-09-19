'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import sendEmail from '@/actions/sendEmail';

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
        action={async (formData) => await sendEmail(formData)}
      >
        <input
          className="h-14 p-4 rounded-lg border borderBlack"
          name="senderEmail"
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
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all ocus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
