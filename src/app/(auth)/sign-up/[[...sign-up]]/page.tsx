'use client';

import { Form, PasswordField } from '@/components/form';
import { signUpSchema } from '@/lib/validation';
import {
  Box,
  Button,
  Divider,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';

const SignUpPage = () => {
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
      userName: '',
      userEmail: '',
      password: '',
      checkPassword: '',
      name: '',
      email: '',
      companyNumber: '',
      rizivNumber: '',
      address: '',
      city: '',
      zipcode: '',
    },
    validationSchema: signUpSchema,
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
        //height: `calc(100vh - ${NAVBAR_HEIGHT})`,
      }}>
      <Form handleSubmit={handleSubmit}>
        <Box>
          <Typography variant='h4' align='center'>
            Maak account bij Aesthetic Supply
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: '100%',
          }}>
          <Typography
            variant='body1'
            color='textSecondary'
            align='center'
            sx={{
              width: '100%',
              borderBottom: '1px solid lightgray',
            }}>
            Persoonlijke gegevens
          </Typography>
          <FormControl>
            <TextField
              id='userName'
              name='userName'
              label='Naam'
              variant='standard'
              type='text'
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.userName && Boolean(errors.userName)}
              helperText={'Voornaam en familienaam'}
              placeholder='John Doe'
              required
            />
          </FormControl>
          <FormControl>
            <TextField
              id='userEmail'
              name='userEmail'
              label='Email gebruiker'
              variant='standard'
              type='email'
              value={values.userEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.userEmail && Boolean(errors.userEmail)}
              helperText={'Email van de gebruiker'}
              placeholder='John@doe.com'
              required
            />
          </FormControl>
          <FormControl>
            <PasswordField
              id='password'
              name='password'
              label='Wachtwoord'
              variant='standard'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              required
            />
          </FormControl>
          <FormControl>
            <PasswordField
              id='checkPassword'
              name='checkPassword'
              label='Herhaal wachtwoord'
              variant='standard'
              value={values.checkPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.checkPassword && Boolean(errors.checkPassword)}
              required
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: '100%',
          }}>
          <Typography
            variant='body1'
            color='textSecondary'
            align='center'
            sx={{
              width: '100%',
              borderBottom: '1px solid lightgray',
            }}>
            Praktijk gegevens
          </Typography>
        </Box>
        <FormControl>
          <TextField
            id='name'
            name='name'
            label='Praktijk naam'
            variant='standard'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={'Praktijk naam'}
            placeholder='Aesthetic Supply'
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            id='email'
            name='email'
            label='Praktijk email'
            variant='standard'
            type='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={'Praktijk email'}
            placeholder='aesthetic@supply.com'
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            id='companyNumber'
            name='companyNumber'
            label='Ondernemingsnummer'
            variant='standard'
            value={values.companyNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.companyNumber && Boolean(errors.companyNumber)}
            helperText={'Ondernemingsnummer van de praktijk. (10 cijfers)'}
            placeholder='Aesthetic Supply'
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            id='rizivNumber'
            name='rizivNumber'
            label='Riziv nummer'
            variant='standard'
            value={values.rizivNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.rizivNumber && Boolean(errors.rizivNumber)}
            helperText={'Riziv nummer van de praktijk.'}
            placeholder='Aesthetic Supply'
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            id='address'
            name='address'
            label='Adres en huisnummer (bus)'
            variant='standard'
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.address && Boolean(errors.address)}
            helperText={'Straatnaam en huisnummer (+ bus).'}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            id='city'
            name='city'
            label='Stad'
            variant='standard'
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.city && Boolean(errors.city)}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            id='zipcode'
            name='zipcode'
            label='Postcode'
            variant='standard'
            value={values.zipcode}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.zipcode && Boolean(errors.zipcode)}
            required
          />
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
          <Button
            variant='outlined'
            type='reset'
            onClick={() => resetForm()}
            disabled={isSubmitting}
            sx={{ width: '100%' }}>
            Reset
          </Button>
          <Button
            variant='contained'
            type='submit'
            disabled={isSubmitting}
            sx={{ width: '100%' }}>
            Submit
          </Button>
        </Box>
      </Form>
    </main>
  );
};

export default SignUpPage;
