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
        yellow: '#CBBA64',
        white2: '#F3F3F3',
        lightGray: '#D5D5D5',

        bc: '#F04651',
        shinhan: '#0046FF',
        kakaobank: '#FFE600',
        hyundai: '#000000',
        woori: '#007BC8',
        lotte: '#ED1C24',
        hana: '#009490',
        kb: '#6A6056',
      },
    },
  },
  plugins: [],
} satisfies Config;
