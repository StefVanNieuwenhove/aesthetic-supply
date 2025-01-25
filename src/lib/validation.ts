import * as yup from 'yup';
import { COMPANY_NUMBER_REGEX, ZIP_CODE_REGEX, PASSWORD_REGEX } from './utils';

const email = yup.string().email('Gelieve een geldig email adres in te voeren');

export const signInSchema = yup.object({
  email: email,
  password: yup.string().required('Password is verplicht'),
});

export const signUpSchema = yup.object({
  userName: yup.string().required('Naam en familienaam is verplicht'),
  userEmail: email,
  password: yup
    .string()
    .matches(PASSWORD_REGEX, 'Wachtwoord moet 8 tekens lang zijn'),
  checkPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Wachtwoorden komen niet overeen'),
  name: yup.string().required('Naam is verplicht'),
  email: email,
  companyNumber: yup
    .string()
    .matches(COMPANY_NUMBER_REGEX, 'Ongeldige rekeningnummer')
    .required('Rekeningnummer is verplicht'),
  rizivNumber: yup
    .string()
    .matches(ZIP_CODE_REGEX, 'Ongeldige postcode')
    .required('Postcode is verplicht'),
  address: yup.string().required('Adres is verplicht'),
  city: yup.string().required('Stad is verplicht'),
  zipcode: yup
    .string()
    .matches(ZIP_CODE_REGEX, 'Ongeldige postcode')
    .required('Postcode is verplicht'),
});
