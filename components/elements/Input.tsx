import React from 'react';
import { InputProps } from '@/types/input.types';
import { cn } from '@/lib';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      register,
      name,
      className,
      error,
      placeholder,
      type,
      label,
      icon,
      ...rest
    },
    ref
  ) => {
    return (
      <div className='relative flex flex-col gap-y-2'>
        <input
          ref={ref}
          {...(register ? register(name) : {})}
          {...rest}
          type={type}
          placeholder={placeholder}
          className={cn(
            className,
            !error ? 'input-success border-none' : 'input-error border-none',
            'input input-bordered w-full bg-white text-black'
          )}
        />
        <div className='absolute right-2 top-3 z-20 cursor-pointer p-1'>
          {icon}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
