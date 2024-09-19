'use client';

import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import SectionHeading from './section-heading';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const { ref, inView } = useSectionInView('Experience', 0.25);

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 text-center"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="#e5e7eb">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgb(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={item.date}
              icon={item.icon}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
