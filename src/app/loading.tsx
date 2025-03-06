import { Box, Typography } from '@mui/material';

const loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Typography variant='h3'>Loading...</Typography>
    </Box>
  );
};

export default loading;
