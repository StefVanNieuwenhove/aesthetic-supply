import { ReactNode } from 'react';

export type Link = {
  href: string;
  title: string;
  icon?: ReactNode;
  children?: Link[];
};

export type StepData = {
  label: string;
  content: ReactNode;
};

export type Organization = {
  id: string;
  name: string;
  slug?: string;
  logo: string;
};
