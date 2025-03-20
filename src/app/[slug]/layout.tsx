import { ReactNode } from 'react';
import { Navbar } from '@/components';
import { SidebarProvider } from '@/components/navigation/Sidebar';

type Props = {
  children: ReactNode;
};

const OrganizationRootLayout = ({ children }: Props) => {
  return (
    <main>
      <SidebarProvider>
        <Navbar />
      </SidebarProvider>
      {children}
    </main>
  );
};

export default OrganizationRootLayout;
