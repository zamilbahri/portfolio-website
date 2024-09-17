/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading';

const About = () => {
	return (
		<motion.section
			id='about'
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading>About Me</SectionHeading>
			<p>
				I hold a BSc in Computer Science and Physics, with a diploma in Electronics Engineering. My professional experience includes a data engineering internship, where I honed my skills in backend development, ETL operations, and data analysis, using foundational AI techniques. My primary technical focus lies in Python, PostgreSQL, JavaScript, and AI/Machine Learning, where I continue to develop my expertise in building efficient and scalable solutions.
			</p>
			<br></br>
			<p>
				Beyond my professional life, I manage a home server running a suite of containerized services, including a media server, personal cloud storage, photo library, VPN, and network-wide ad-blocker, all powered by Docker. When I'm not immersed in tech, I enjoy reading fantasy novels—currently captivated by the Stormlight Archive series—and spend my free time playing narrative-driven video games, Overwatch, and badminton.
			</p>

		</motion.section>
	)
}

export default About