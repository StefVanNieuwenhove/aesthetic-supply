import { Box, Button, Container } from '@mui/material';

const HomePage = async () => {
  return (
    <Container component={'main'} maxWidth={'xl'} sx={{ my: 4 }}>
      <p>landing page when user is registered</p>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button href='/sign-in' variant='contained'>
          Sign in
        </Button>
        <Button href='/sign-up' variant='contained'>
          Sign up
        </Button>
        <Button href='backoffice' variant='contained'>
          Backoffice
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
