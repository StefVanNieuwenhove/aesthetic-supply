import { BackOfficeNav } from '@/components';
import React from 'react';

const BackOfficeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackOfficeNav />
      {children}
    </>
  );
};

export default BackOfficeLayout;
