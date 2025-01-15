'use client';

import { Links } from '@/lib/links';
import { NAVBAR_HEIGHT } from '@/lib/utils';
import { ChevronLeft, Menu } from '@mui/icons-material';
//import { SidebarContext } from '@/lib/types';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type SidebarContext = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContext | null>(null);

export const useSidebar = () => {
  const sidebarContext = useContext(SidebarContext);
  if (!sidebarContext) {
    throw new Error('useSidebar must be used within a SidebarContextProvider');
  }
  return sidebarContext;
};

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const values = useMemo(() => {
    return {
      open,
      setOpen,
      toggleSidebar,
    };
  }, [toggleSidebar, open]);

  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};

export const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <IconButton color='inherit' onClick={toggleSidebar}>
      <Menu />
    </IconButton>
  );
};

const Sidebar = () => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <Box
            sx={{
              height: `${NAVBAR_HEIGHT}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingX: 2,
            }}>
            <Typography variant='h6'>Aesthetic Supply</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <ChevronLeft />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {Links.map((link) => (
              <ListItem key={link.href} disableGutters disablePadding>
                <ListItemButton color='primary'>
                  <ListItemIcon color='primary'>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
