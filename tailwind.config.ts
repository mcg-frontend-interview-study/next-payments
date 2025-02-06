import type {Config} from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#333333',
        grayVariants: '#111111',
        white: '#ffffff',
        border: '#ACACAC',
        label: '#8B95A1',
        red: '#FF3D3D',
        white2: '#F3F3F3',
      },
    },
  },
  plugins: [],
} satisfies Config;
