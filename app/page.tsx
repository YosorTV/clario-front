import { SignUpForm } from '@/components/forms/SignUpForm';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='w-[420px]'>
        <h1 className='py-10 text-center text-3xl text-base font-bold'>
          Sign up
        </h1>
        <SignUpForm />
      </section>
    </main>
  );
}
