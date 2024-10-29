import React from 'react';
import Input from './Input';
import { useFormik } from 'formik';
import { forgottenSchema } from '../schema/schema';
import { useNavigate } from 'react-router';

const ForgottenForm = () => {
  let initialValues = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();

  const { handleSubmit, handleChange, isSubmitting, errors, touched, handleBlur, values } = useFormik({
    initialValues,
    validationSchema: forgottenSchema,
    onSubmit: async (values) => {
      if (values) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        navigate('/', { replace: true });
      }
    },
  });

  return (
    <div className='min-h-screen flex justify-center items-center mx-auto'>
      <form onSubmit={handleSubmit} className='login-form max-w-2xl w-full rounded-2xl bg-white p-7 g'>
        <legend className='my-3 text-center font-semibold text-4xl block text-violet-700'>Forgotten Password</legend>
        <div className='border-t-2 border-gray-900/10 mt-9'>
          <fieldset className='mb-5 mt-5'>
            <label htmlFor='email' className='block text-xl font-semibold leading-6 text-gray-900'>
              Email
            </label>
            <div className='mt-2 relative'>
              <Input
                id='email'
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                type='email'
                placeholder='enter your email address'
                className={`block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg font-semibold sm:leading-6 ${
                  errors.email && touched.email ? 'ring-red-600 ring-[0.15rem]' : ''
                }`}
              />
            </div>
            {errors.email && touched.email && <small className='text-xl block text-red-600'>{errors.email}</small>}
          </fieldset>
        </div>
        <button
          type='submit'
          disabled={isSubmitting}
          className={`rounded-md w-full bg-indigo-600 px-3 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70 ${
            isSubmitting ? 'cursor-progress' : 'cursor-pointer'
          }`}>
          {isSubmitting ? 'Submitting.....' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ForgottenForm;
