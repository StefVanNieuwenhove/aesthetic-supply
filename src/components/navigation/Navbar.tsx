import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { SidebarTrigger } from './Sidebar';
import { NAVBAR_HEIGHT } from '@/lib/utils';

const Navbar = () => {
  return (
    <>
      <AppBar
        enableColorOnDark
        position='fixed'
        color='primary'
        elevation={10}
        sx={{
          zIndex: 100,
          top: 0,
          height: `${NAVBAR_HEIGHT}`,
          backdropFilter: 'blur(20px)',
        }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <SidebarTrigger />
          </Box>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Badge
              badgeContent={4}
              color='secondary'
              aria-label='notifications'>
              <Notifications />
            </Badge>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Avatar>AS</Avatar>
              <Typography variant='h6'>Gebruiker</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
