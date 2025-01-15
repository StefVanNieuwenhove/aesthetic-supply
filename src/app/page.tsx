import { Button, Typography } from '@mui/material';
import Link from 'next/link';

const HomePage = async () => {
  return (
    <main>
      <p>landing page when user is registered</p>
      <Button variant='outlined' color='primary'>
        <Link href={'/sign-in'}>
          <Typography variant='body1' color='inherit'>
            login
          </Typography>
        </Link>
      </Button>
    </main>
  );
};

export default HomePage;
