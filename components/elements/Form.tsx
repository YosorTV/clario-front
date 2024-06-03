'use client';

import React, { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import { useHookFormParams } from '@/lib/hookform';
import { InputProps } from '@/types/input.types';

export const Form: FC<any> = ({
  children,
  state = {},
  className,
  schema = null,
  ...rest
}) => {
  const methods = useHookFormParams({ state, schema });

  const submitHandler = (data: any) => {
    rest?.onSubmit(data);
    methods.reset();
  };

  const renderChildren = (
    child: React.ReactElement,
    index: number
  ): React.ReactNode => {
    if (child?.props?.name) {
      return React.createElement(
        child.type as React.ComponentType<InputProps>,
        {
          ...child?.props,
          register: methods.register,
          key: `${child.props?.name}_${index}`,
          error: methods.formState.errors[child.props?.name]?.message,
        }
      );
    }

    if (child?.props?.children) {
      return React.cloneElement(child, {
        ...child.props,
        children: React.Children.map(
          child.props.children,
          (childElement, childIndex) =>
            renderChildren(childElement as React.ReactElement, childIndex)
        ),
      });
    }

    return child;
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submitHandler)}
        className={className}
      >
        {React.Children.map(children as React.ReactElement[], (child, index) =>
          renderChildren(child, index)
        )}
      </form>
    </FormProvider>
  );
};
