'use client';

import { Links } from '@/lib/links';
import {
  FormatIndentDecrease,
  FormatIndentIncrease,
} from '@mui/icons-material';
//import { SidebarContext } from '@/lib/types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
  const [open, setOpen] = useState(true);

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
  const { toggleSidebar, open } = useSidebar();
  return (
    <IconButton color='inherit' edge='start' onClick={toggleSidebar}>
      {open ? <FormatIndentDecrease /> : <FormatIndentIncrease />}
    </IconButton>
  );
};

const Sidebar = () => {
  const { open } = useSidebar();

  return (
    <>
      <Drawer
        variant='permanent'
        open={open}
        sx={{
          width: open ? 240 : 64,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? 240 : 64,
            transition: 'width 0.3s',
            overflowX: 'hidden',
          },
        }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box>
            <Avatar
              sx={{
                width: 64,
                height: 64,
                margin: '16px auto',
              }}>
              AS
            </Avatar>
          </Box>
          <Divider />
          <List>
            {Links.map((link) => (
              <ListItem
                key={link.href}
                disablePadding
                sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{ justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                    {link.icon}
                  </ListItemIcon>
                  {open && (
                    <ListItemText
                      primary={link.title}
                      sx={{ opacity: open ? 1 : 0, pl: 2 }}
                    />
                  )}
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
