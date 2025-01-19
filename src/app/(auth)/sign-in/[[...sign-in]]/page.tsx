'use client';

import { signInSchema } from '@/lib/validation';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log(values);
      resetForm();
      router.push('/dashboard');
    },
  });
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          border: '1px solid black',
          borderRadius: 2,
          padding: 4,
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}>
          <Typography variant='h4'>Login to Aesthetic Supply</Typography>
          <Typography variant='body1' color='textSecondary'>
            Welkom, login om verder te gaan
          </Typography>
        </Box>
        <Divider />
        <FormControl>
          <TextField
            id='email'
            name='email'
            required
            variant='standard'
            label='Email'
            type='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            placeholder='john@doe.com'
            autoFocus
          />
        </FormControl>
        <FormControl>
          <TextField
            id='password'
            name='password'
            required
            variant='standard'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            placeholder='********'
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              },
            }}
          />
          <FormHelperText sx={{ display: 'flex', justifyContent: 'end' }}>
            <Link href={'/forgot-password'}>Wachtwoord vergeten?</Link>
          </FormHelperText>
        </FormControl>
        <Box>
          <Button
            variant='contained'
            type='submit'
            sx={{ width: '100%' }}
            disabled={isSubmitting}>
            Login
          </Button>
        </Box>
        <Typography variant='body2' color='textSecondary' align='left'>
          Nog geen account? <Link href={'/sign-up'}>Registreer</Link>
        </Typography>
      </Box>
    </main>
  );
};

export default SignInPage;
