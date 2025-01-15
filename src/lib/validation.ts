import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup
    .string()
    .email('Gelieve een geldig email adres in te voeren')
    .required('Email is verplicht'),
  password: yup.string().required('Password is verplicht'),
});

export const signUpSchema = yup.object({
  email: yup
    .string()
    .email('Gelieve een geldig email adres in te voeren')
    .required('Email is verplicht'),
  password: yup
    .string()
    .required('Password is verplicht')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character'
    ),
});
