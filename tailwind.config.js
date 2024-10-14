/** @type {import('tailwindcss').Config} */
export default {
 purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
     fontFamily: {
        pingAR: ['PingAR', 'sans-serif'], 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
