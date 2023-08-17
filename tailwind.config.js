/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'backgroundColor':{
        'darkBlue':'#001C30'
      },
      'colors':{
        'lightGreen':'#03FA6E'
      },
      'screens':{
        'xl':'1031px',
        'lg':'930px',
        'sm':'500px',
        'xs':'400px'
      }
    },
  },
  plugins: [],
}

