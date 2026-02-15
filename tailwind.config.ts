import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f1ff',
          500: '#0891b2',
          700: '#0e7490'
        }
      },
      boxShadow: {
        card: '0 10px 30px rgba(2, 132, 199, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
