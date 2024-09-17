'use client';

import React, { useState } from 'react';
import { links } from '@/lib/data';
import { createContext } from 'react';

type SectionName = (typeof links)[number]['name'];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection: activeSection,
        setActiveSection: setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
