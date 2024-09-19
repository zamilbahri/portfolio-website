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
  const { ref } = useSectionInView('Experience');

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 text-center"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement visible={true}>
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
