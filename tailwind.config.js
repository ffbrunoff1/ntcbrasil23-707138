/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#54A9E3',
        'brand-white': '#FFFFFF',
        'brand-dark-blue': '#2a6f97',
        'brand-light-gray': '#f8f9fa',
        'brand-dark-gray': '#343a40',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        intense: '0 20px 40px -10px rgba(84, 169, 227, 0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      },
    },
  },
  plugins: [],
};
