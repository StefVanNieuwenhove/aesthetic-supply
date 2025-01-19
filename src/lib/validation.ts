import * as yup from 'yup';

const email = yup.string().email('Gelieve een geldig email adres in te voeren');

export const signInSchema = yup.object({
  email: yup.string().email().required('Email is verplicht'),
  password: yup.string().required('Password is verplicht'),
});

export const CreateUserSchema = yup.object({
  firstName: yup.string().required('Voornaam is verplicht'),
  lastName: yup.string().required('Achternaam is verplicht'),
  email: email,
  password: yup
    .string()
    .required('Password is verplicht')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character'
    ),
});

export const ValidateUserSchema = yup.object({
  email: yup.string().email().required('Email is verplicht'),
  password: yup.string().required('Password is verplicht'),
});

export const createOrganizationSchema = yup.object({
  name: yup.string().required('Naam is verplicht'),
  btwNumber: yup.string().required('BTW nummer is verplicht'),
  companyNumber: yup.string().required('Ondernemingsnummer is verplicht'),
  rizv: yup.string().required('RIZV nummer is verplicht'),
  phone: yup.string().required('Telefoonnummer is verplicht'),
  email: email,
  street: yup.string().required('Straat is verplicht'),
  houseNumber: yup.string().required('Huisnummer is verplicht'),
  zipCode: yup.string().required('Postcode is verplicht'),
  city: yup.string().required('Plaats is verplicht'),
});
