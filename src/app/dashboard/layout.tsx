import { Navbar } from '@/components';
import { SidebarProvider } from '@/components/navigation/Sidebar';
import { ReactNode } from 'react';

type DashboardLayoutProps = Readonly<{
  children: ReactNode;
}>;

const Dashboardlayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <SidebarProvider>
        <Navbar />
      </SidebarProvider>
      {children}
    </>
  );
};

export default Dashboardlayout;
