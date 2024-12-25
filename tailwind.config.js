/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    screens: {
      'ms': '320px',
      'ml': '425px',
      'ff': '540px',
      'sm': '640px',
      'tb': '768px',
      'lg': '1024px',
    },
    extend: {
      
    },
  }, 
  plugins: [],
}