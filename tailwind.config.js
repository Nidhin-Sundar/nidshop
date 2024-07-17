/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
         colors: {
        'custom-green': 'rgb(222, 249, 236)',
        'custom-green1': '#3BB77E',
      },
    },
  },
  plugins: [],
}