/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/headshot.png"
              alt="Zamil's Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <span className="absolute bottom-0 right-0 text-4xl">👋</span>
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Zamil.</span> I'm a{' '}
        <span className="font-bold">Software Developer</span> and{' '}
        <span className="font-bold">Data Engineer</span>. I enjoy working with
        servers & analyzing data. My focus is{' '}
        <span className="underline">Python, Javascript, and AI</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/resume.pdf"
          download
        >
          Download Résumé{' '}
          <HiDownload className="opacity-90 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/zamil-bahri/"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/zamilbahri"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
