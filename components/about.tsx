/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        My technical roots are a curious mix of Computer Science, Physics, and
        Electronics Engineering. Currently, I am diving deeper into the digital
        realm by pursuing a Master's in Cybersecurity. While I have a soft spot
        for tinkering with low-level code, my everyday building blocks are
        Python, TypeScript, and data-focused Machine Learning. I enjoy bridging
        the gap between physical hardware and scalable backend systems.
      </p>
      <br></br>
      <p>
        Off the clock, my proudest ongoing project is my homelab. Serving as the
        caretaker for my own infrastructure, I use Proxmox to host a mix of
        environments. This setup runs my Kali Linux VMs for cybersecurity CTF
        labs, alongside Docker and Kubernetes clusters that orchestrate my
        personal cloud, media server, photo library, VPN, and a network-wide ad
        blocker.
      </p>
      <br></br>
      <p>
        When I finally step away from the terminal, I am usually lost in a
        sprawling fantasy novel or exploring story-driven worlds.
      </p>
    </motion.section>
  );
};

export default About;
