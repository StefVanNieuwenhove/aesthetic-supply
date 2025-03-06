'use client';

import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import Sidebar, { SidebarTrigger, useSidebar } from './Sidebar';

const Navbar = () => {
  const { open } = useSidebar();
  return (
    <>
      <AppBar
        position='fixed'
        color='primary'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          transition: 'margin 1s',
          marginLeft: open ? 240 : 64,
          width: `calc(100% - ${open ? 240 : 64}px)`,
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SidebarTrigger />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Badge badgeContent={4} color='secondary'>
              <Notifications />
            </Badge>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar>AS</Avatar>
              <Typography variant='h6'>Gebruiker</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar />
    </>
  );
};

export default Navbar;
