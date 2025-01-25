import { isAuthenticated } from '@/lib/auth';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const HomePage = async () => {
  //if (!(await isAuthenticated())) redirect('/sign-in');
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
