'use client';

import { schemas, toaster } from '@/lib';

import { Form, Input } from '@/components';
import { PasswordValidator } from '../complex/PasswordValidator';
import { ShowPassIcon } from '@/assets/Icons';
import { useState } from 'react';

export const SignUpForm = () => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const options = [
    {
      text: '8 characters or more (no spaces)',
      expression: /.{8,}/,
      isValidated: false,
    },
    {
      text: 'Uppercase and lowercase letters',
      expression: /(?=.*[a-z])(?=.*[A-Z])/,
      isValidated: false,
    },
    {
      text: 'At least one digit',
      expression: /.*\d/,
      isValidated: false,
    },
  ];

  const onSubmit = async (data: any) => {
    console.log(data);
    toaster({ key: 'success', message: 'Sign up success' });
  };

  const handleClick = () => setShowPass(!showPass);

  return (
    <Form
      id='signup-form'
      onSubmit={onSubmit}
      schema={schemas.signup}
      className='flex w-full flex-col gap-8'
    >
      <Input
        name='email'
        type='email'
        label='Email'
        placeholder='Enter your email address'
        autoComplete='email'
      />

      <Input
        name='password'
        type={showPass ? 'text' : 'password'}
        label='Create a password'
        placeholder='Enter your password'
        autoComplete='password'
        icon={<ShowPassIcon isOpened={showPass} onClick={handleClick} />}
      />

      <PasswordValidator options={options} />
      <button
        type='submit'
        className='btn bg-gradient-secondary text-md rounded-full border-none py-2.5 font-bold text-white'
      >
        Sign up
      </button>
    </Form>
  );
};
