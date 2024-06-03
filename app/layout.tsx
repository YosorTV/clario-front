import type { Metadata } from 'next';

import { BaseLayout } from '@/components/layouts';
import { BaseLayoutProps } from '@/types/layout.types';

import './globals.css';
import { ClientSideRender } from '@/components/complex';

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Sign up page',
};

export default function RootLayout({ children }: BaseLayoutProps) {
  return (
    <BaseLayout>
      {children}
      <ClientSideRender />
    </BaseLayout>
  );
}
