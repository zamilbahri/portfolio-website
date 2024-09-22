import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type EmailResponse = {
  data?: { id: string } | null;
  error?: string;
};

export type Theme = 'light' | 'dark';

export type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type MobileHeaderProps = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  setTimeOfLastClick: (time: number) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};
