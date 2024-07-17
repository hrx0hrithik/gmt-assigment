/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondaryBg' : '#FE8C00'
      },
      fontFamily: {
        'Inter' : ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

