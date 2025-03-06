import { BackOfficeLinks } from '@/lib/links';
import { Notifications } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const BackOfficeNav = () => {
  return (
    <AppBar position='fixed'>
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
            <Typography key={link.href} variant='body2'>
              {link.title}
            </Typography>
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
  );
};

export default BackOfficeNav;
