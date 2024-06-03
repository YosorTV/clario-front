import { InputHTMLAttributes, ReactNode } from 'react';
import { useForm } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: ReturnType<typeof useForm>['register'];
  error?: string;
  label?: string;
  icon?: ReactNode;
}
