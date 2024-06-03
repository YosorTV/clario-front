import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

import Yup from 'yup';

export interface FormProps<T> {
  children: ReactNode;
  state?: Partial<T> | null;
  className?: string;
  schema?: Yup.ObjectSchema<any>;
  onSubmit: SubmitHandler<T>;
  id?: string;
}
