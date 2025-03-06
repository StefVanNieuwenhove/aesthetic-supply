import { BackOfficeLinks } from '@/lib/links';
import { Notifications } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const BackOfficeNav = () => {
  return (
    <>
      <AppBar
        position='static'
        sx={{
          marginBottom: '1rem',
        }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 2,
            }}>
            <Avatar>AS</Avatar>
            <Typography variant='h6'>Backoffice</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}>
            {BackOfficeLinks.map((link) => (
              <Link key={link.href} href={'/backoffice' + link.href}>
                <Button
                  variant='outlined'
                  sx={{
                    color: 'white',
                    borderBottom: '1px solid',
                    ':hover': {
                      border: '1px solid',
                    },
                  }}>
                  {link.title}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color='inherit'>
              <Notifications />
            </IconButton>
            <Avatar>AS</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BackOfficeNav;
