"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import sendEmail from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { getCatpchaToken } from "@/lib/utils/recaptcha-validation";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
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
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me through this form.
      </p>

      <form
        className="mt-10 flex flex-col items-center dark:text-black/80"
        action={async (formData) => {
          const token = await getCatpchaToken();
          console.log(token);
          const { error } = await sendEmail(token, formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="borderBlack h-14 w-full rounded-lg border p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          name="email"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="borderBlack my-3 h-52 w-full rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
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
