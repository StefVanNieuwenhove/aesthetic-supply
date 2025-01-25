import { PropsWithChildren } from 'react';

type OrganizationRootLayoutProps = PropsWithChildren<{
  params: { org: string };
}>;

const OrganizationRootLayout = ({ children }: OrganizationRootLayoutProps) => {
  return <div>{children}</div>;
};

export default OrganizationRootLayout;
