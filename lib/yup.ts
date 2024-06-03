import * as Yup from 'yup';

const emailSchema = Yup.string().email('Enter correct email').required();

const passwordSchema = Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/\d/, 'Password must contain at least one digit')
  .required('Password is required');

const signupSchema = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

export const schemas = {
  signup: signupSchema,
};
