import { cn } from '@/lib';

import { inter } from '@/assets/Fonts';
import { BaseLayoutProps } from '@/types/layout.types';

export async function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body
        className={cn(
          'bg-gradient-primary h-full overflow-y-auto',
          inter.className
        )}
      >
        <header className='fixed min-h-5' />
        {children}
        <footer className='fixed min-h-5' />
      </body>
    </html>
  );
}
