/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
    extend: {
        fontFamily: {
          sans: ['__Oswald_b42c86', '__Oswald_Fallback_b42c86', 'sans-serif'],
      },
    },
  },
  plugins: [    require('@tailwindcss/typography'),
],
};