/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyFitPrimary: '#002664',
        skyFitSecondary: '#B9133E', 
      },
      fontFamily: {
        sans: ['Exo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}