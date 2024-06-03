import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#4A4E71',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom, #F4F9FF, #E0EDFB)',
        'gradient-secondary': 'linear-gradient(to right, #70C3FF, #4B65FF)',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
