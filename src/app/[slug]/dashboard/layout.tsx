import { ReactNode } from 'react';

type DashboardLayoutProps = Readonly<{
  children: ReactNode;
}>;

const Dashboardlayout = ({ children }: DashboardLayoutProps) => {
  return <>{children}</>;
};

export default Dashboardlayout;
