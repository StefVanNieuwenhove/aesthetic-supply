'use client';

import { Form, PasswordField } from '@/components/form';
import { NAVBAR_HEIGHT } from '@/lib/utils';
import { signInSchema } from '@/lib/validation';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';

const SignInPage = () => {
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
    },
  });

  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: `calc(100vh - ${NAVBAR_HEIGHT})`,
      }}>
      <Form handleSubmit={handleSubmit}>
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
          />
        </FormControl>
        <FormControl>
          <PasswordField
            id='password'
            name='password'
            required
            variant='standard'
            label='Password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
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
      </Form>
    </main>
  );
};

export default SignInPage;
