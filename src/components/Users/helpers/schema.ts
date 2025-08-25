import * as yup from 'yup';

export const createUserSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup
    .number()
    .typeError('Phone must be a number')
    .required('Phone number is required'),
  email: yup.string().email().required('Email is required'),
});
