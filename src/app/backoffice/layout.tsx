import { BackOfficeNav } from '@/components';
import { Container } from '@mui/material';

const BackOfficeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackOfficeNav />
      <Container maxWidth={false}>{children}</Container>
    </>
  );
};

export default BackOfficeLayout;
