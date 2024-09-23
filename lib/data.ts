import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma, Electronics Engineering Technician",
    location: "Cambridge, ON",
    description:
      "Developed hands-on expertise in electronics, including the use of multimeters and oscilloscopes for circuit troubleshooting, gained experience in programming microcontrollers, and honed skills in using a soldering iron for assembling and repairing electronic components.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
  {
    title: "Electronics Assembler",
    location: "Kitchener, ON",
    description:
      "Soldered, tested, and troubleshot components on PCBs to a professional standard, while automating circuit board testing using Arduinos and proprietary software.",
    icon: React.createElement(CgWorkAlt),
    date: "2019, 2020",
  },
  {
    title: "BSc, Computer Science and Physics",
    location: "Waterloo, ON",
    description:
      "Acquired both theoretical and practical knowledge in computer science, with a focus on the software development, parallel programming, and machine learning. Additionally, developed strong mathematical proficiency and practical problem-solving skills through the study of physics.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023 ",
  },
  {
    title: "Data Engineering Intern",
    location: "Chicago, IL",
    description:
      "Built and maintained robust ETL pipelines to handle large health datasets. Conducted thorough data cleaning and preprocessing, and utilized AI and machine learning models for predictive analysis and data modeling. Developed backend REST APIs for internal use by front-end teams.",
    icon: React.createElement(FaPython),
    date: "2020 - 2023",
  },
  {
    title: "Product Support Specialist",
    location: "Waterloo, ON",
    description:
      "Diagnosed and resolved technical issues with a cloud-based backup service across various operating systems, while handling sensitive information in accordance with proper procedures. Proactively pursued knowledge of backend processes and technologies to gain a deeper understanding of the service beyond my role.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "PyTorch",
  "MPI",
  "Flask",
  "PostgreSQL",
  "MySQL",
  "C",
  "C++",
  "OpenCL",
  "OpenGL",
  "Java",
  "HTML",
  "CSS",
  "Tailwind",
  "Javascript",
  "TypeScript",
  "Node.js",
  "Git",
  "Docker",
  "Linux",
  "Ubuntu",
  "Nginx",
  "Cloudfare",
  "AWS",
] as const;
