import { createOrganizationSchema } from '@/lib/validation';
import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';

const CreateOrganizationForm = () => {
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
      name: '',
      btwNumber: '',
      companyNumber: '',
      rizv: '',
      phone: '',
      email: '',
      street: '',
      houseNumber: '',
      zipCode: '',
      city: '',
    },
    validationSchema: createOrganizationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container
      maxWidth='xl'
      component={'form'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: 3,
        backdropFilter: 'blur(10px)',
        border: '1px solid lightgray',
        borderRadius: 3,
        padding: 3,
      }}>
      <Typography
        variant='h4'
        sx={{ textAlign: 'center', textDecoration: 'underline' }}>
        Praktijkgegevens
      </Typography>
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
          helperText={touched.name && errors.name}
          required
          fullWidth
          tabIndex={0}
          margin='normal'
        />
      </FormControl>
      <FormControl>
        <TextField
          id='btwNumber'
          name='btwNumber'
          label='BTW nummer'
          variant='standard'
          value={values.btwNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.btwNumber && Boolean(errors.btwNumber)}
          helperText={touched.btwNumber && errors.btwNumber}
          required
          fullWidth
          tabIndex={1}
          margin='normal'
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
          helperText={touched.companyNumber && errors.companyNumber}
          required
          fullWidth
          tabIndex={2}
          margin='normal'
        />
      </FormControl>
      <FormControl>
        <TextField
          id='rizv'
          name='rizv'
          label='RIZV nummer'
          variant='standard'
          value={values.rizv}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.rizv && Boolean(errors.rizv)}
          helperText={touched.rizv && errors.rizv}
          required
          fullWidth
          tabIndex={3}
          margin='normal'
        />
      </FormControl>
      <FormControl>
        <TextField
          id='phone'
          name='phone'
          label='Telefoonnummer'
          variant='standard'
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone}
          required
          fullWidth
          tabIndex={4}
          margin='normal'
        />
      </FormControl>
      <FormControl>
        <TextField
          id='email'
          name='email'
          label='Email'
          variant='standard'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          required
          fullWidth
          tabIndex={5}
          margin='normal'
          type='email'
        />
      </FormControl>
      <FormControl>
        <TextField
          id='street'
          name='street'
          label='Straat'
          variant='standard'
          value={values.street}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.street && Boolean(errors.street)}
          helperText={touched.street && errors.street}
          required
          fullWidth
          tabIndex={6}
          margin='normal'
        />
      </FormControl>
      <FormControl>
        <TextField
          id='houseNumber'
          name='houseNumber'
          label='Huisnummer'
          variant='standard'
          value={values.houseNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.houseNumber && Boolean(errors.houseNumber)}
          helperText={touched.houseNumber && errors.houseNumber}
          required
          fullWidth
          tabIndex={7}
          margin='normal'
        />
      </FormControl>
      <FormControl>
        <TextField
          id='zipCode'
          name='zipCode'
          label='Postcode'
          variant='standard'
          value={values.zipCode}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.zipCode && Boolean(errors.zipCode)}
          helperText={touched.zipCode && errors.zipCode}
          required
          fullWidth
          tabIndex={8}
          margin='normal'
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
          helperText={touched.city && errors.city}
          required
          fullWidth
          tabIndex={9}
          margin='normal'
        />
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
        <Button
          variant='outlined'
          type='reset'
          disabled={isSubmitting}
          onClick={() => resetForm()}
          fullWidth
          tabIndex={10}>
          Reset
        </Button>
        <Button
          variant='contained'
          type='submit'
          disabled={isSubmitting}
          onClick={() => handleSubmit()}
          fullWidth
          tabIndex={11}>
          Maak praktijk
        </Button>
      </Box>
    </Container>
  );
};

export default CreateOrganizationForm;
