'use client';

import { Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}>
      <Typography variant='h3' fontWeight='bold' gutterBottom>
        {'An Unexpected Error Occurred'}
      </Typography>
      <Typography variant='body1' color='text.secondary' mb={3}>
        {'Something went wrong. Please try again later.'}
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={() => router.push('/')}>
        Go Home
      </Button>
    </Container>
  );
};

export default ErrorPage;
