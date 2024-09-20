import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type EmailResponse = {
  data?: { id: string } | null;
  error?: string;
};
