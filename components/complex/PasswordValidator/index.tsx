'use client';

import { cn, useHookForm } from '@/lib';
import { FC, useEffect, useState } from 'react';

type OptionProps = {
  text: string;
  isValidated: boolean;
  expression: RegExp;
};

interface PasswordValidatorProps {
  options: OptionProps[];
}

export const PasswordValidator: FC<PasswordValidatorProps> = ({ options }) => {
  const [validation, setValidation] = useState(options);

  const { watch, formState } = useHookForm();

  const password = watch('password', '');

  useEffect(() => {
    if (formState.isSubmitSuccessful) setValidation(options);
  }, [formState.isSubmitSuccessful, options]);

  useEffect(() => {
    const newValidation = validation.map((option) => ({
      ...option,
      isValidated: option.expression.test(password),
    }));

    setValidation(newValidation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  return (
    <ul className='mt-2 text-[12px] text-black'>
      {validation.map(({ text, isValidated }) => (
        <li key={text}>
          <span
            className={cn(
              isValidated ? 'text-green-500' : 'text-black',
              'h-5 w-5'
            )}
          >
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
};
