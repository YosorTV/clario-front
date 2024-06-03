import { useForm, useFormContext } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface HookFormProps {
  state?: any;
  schema?: Yup.ObjectSchema<any>;
}

export const useHookForm = () => {
  const methods = useFormContext();

  return { ...methods };
};

export const useHookFormParams = ({ state, schema }: HookFormProps) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: state,
    resolver: schema ? yupResolver(schema) : null,
  });

  return methods;
};
