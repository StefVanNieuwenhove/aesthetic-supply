import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const HeaderAuth = () => {
  return (
    <AppBar
      position='sticky'
      color='transparent'
      elevation={0}
      sx={{ backdropFilter: 'blur(10px)' }}>
      <Toolbar sx={{ display: 'flex', gap: 3 }}>
        <Avatar>AS</Avatar>
        <Typography variant='h6'>Aesthetic Supply</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAuth;
