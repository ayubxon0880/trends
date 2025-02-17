/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E3030F', 
        secondary: '#000000', 
      },
    },
  },
  daisyui: {
    themes: ["light",],
  },
  plugins: [require('daisyui'),],
}

