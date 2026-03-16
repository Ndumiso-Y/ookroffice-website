/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#174E81',
        'gold': '#C99A3E',
        'charcoal': '#1A1A1A',
        'neutral-gray': '#F4F4F4',
      },
      fontFamily: {
        'heading': ['Poppins', 'Montserrat', 'sans-serif'],
        'body': ['Inter', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
