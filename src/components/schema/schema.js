import * as yup from 'yup';

const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const emailRule = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, { message: 'username should be at least minimum of 5 words' })
    .max(15, { message: 'username should be a maximum of 15 words' })
    .required('username is required'),
  email: yup.string().matches(emailRule, { message: 'Enter a valid email' }).required('email is required'),
  password: yup
    .string()
    .matches(passwordRule, {
      message:
        'Password must be at least 8 digits characters long and contain at least one uppercase letter, one lowercase letter, and one number ',
    })
    .required('password is required'),
});

export const signInSchema = yup.object().shape({
  email: yup.string().matches(emailRule, { message: 'Enter a valid email' }).required('email is required'),
  password: yup
    .string()
    .matches(passwordRule, {
      message:
        'Password must be at least 8 digits characters long and contain at least one uppercase letter, one lowercase letter, and one number ',
    })
    .required('password is required'),
});

export const forgottenSchema = yup.object().shape({
  email: yup.string().matches(emailRule, { message: 'Enter a valid email' }).required('email is required'),
});
