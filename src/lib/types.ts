import { ReactNode } from 'react';

export type Link = {
  href: string;
  title: string;
  icon?: ReactNode;
  children?: Link[];
};
