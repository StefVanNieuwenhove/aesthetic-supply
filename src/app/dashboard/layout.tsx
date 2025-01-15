import { Navbar, Sidebar } from '@/components';
import { Container } from '@mui/material';
import { SidebarProvider } from '@/components/navigation/Sidebar';
import { NAVBAR_HEIGHT } from '@/lib/utils';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <SidebarProvider>
        <header>
          <Navbar />
          <Sidebar />
        </header>
        <Container
          maxWidth={false}
          sx={{ marginTop: `calc(${NAVBAR_HEIGHT} + 1rem)` }}>
          {children}
        </Container>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
