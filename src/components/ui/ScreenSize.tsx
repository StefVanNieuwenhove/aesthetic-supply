'use client';

import { useTheme, useMediaQuery, Box, Chip } from '@mui/material';

// Define possible screen size values
type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const useScreenSize = (): ScreenSize | null => {
  const theme = useTheme();

  const isXS = useMediaQuery(theme.breakpoints.only('xs'));
  const isSM = useMediaQuery(theme.breakpoints.only('sm'));
  const isMD = useMediaQuery(theme.breakpoints.only('md'));
  const isLG = useMediaQuery(theme.breakpoints.only('lg'));
  const isXL = useMediaQuery(theme.breakpoints.only('xl'));

  if (isXS) return 'xs';
  if (isSM) return 'sm';
  if (isMD) return 'md';
  if (isLG) return 'lg';
  if (isXL) return 'xl';

  return null; // Return null if no match is found
};

const ScreenSize = () => {
  const nodeEnv = process.env.NODE_ENV;
  const screenSize = useScreenSize();

  const screenSizes: Record<ScreenSize, { label: string; color: string }> = {
    xs: { label: 'XS', color: 'purple' },
    sm: { label: 'SM', color: 'teal' },
    md: { label: 'MD', color: 'blue' },
    lg: { label: 'LG', color: 'green' },
    xl: { label: 'XL', color: 'red' },
  };

  if (nodeEnv === 'production' || !screenSize) return null;

  const screenData = screenSizes[screenSize];

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}>
      <Chip
        label={screenData.label}
        sx={{
          backgroundColor: screenData.color,
          color: 'white',
          padding: 1,
          fontSize: '0.875rem',
          fontWeight: 'bold',
        }}
      />
    </Box>
  );
};

export default ScreenSize;
