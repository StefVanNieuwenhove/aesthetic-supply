'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  CreateOrganizationForm,
  CreateUserForm,
  ValidateForm,
} from '@/components/form';
import { StepData } from '@/lib/types';

const steps: StepData[] = [
  {
    label: 'Praktijk aanmaken',
    content: <CreateOrganizationForm />,
  },
  {
    label: 'Account aanmaken',
    content: <CreateUserForm />,
  },
  {
    label: 'Account valideren',
    content: <ValidateForm />,
  },
];

const SignUpPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginY: 3,
      }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ marginY: 3 }}>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Divider />
      <Box sx={{ flexGrow: 1 }}>
        {steps.map((step, index) => (
          <Typography
            key={step.label}
            sx={{
              padding: isSmallScreen ? 2 : 3,
              marginTop: isSmallScreen ? 2 : 3,
              borderLeft: index < activeStep ? '4px solid primary' : 'none',
              borderColor: theme.palette.primary.main,
              display: index === activeStep ? 'block' : 'none',
            }}
            variant='h4'>
            {step.content}
          </Typography>
        ))}
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          width: '100%',
          paddingTop: 1,
        }}>
        <Button
          variant='contained'
          onClick={() => setActiveStep(activeStep + 1)}>
          {activeStep === steps.length - 1 ? 'Activeren' : 'Volgende'}
        </Button>
        <Button
          variant='contained'
          sx={{ display: activeStep === 0 ? 'none' : 'block' }}
          onClick={() => setActiveStep(activeStep - 1)}>
          vorige
        </Button>
      </Box>
    </Container>
  );
};

export default SignUpPage;
