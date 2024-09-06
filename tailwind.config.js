/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1972d2',
        secondary: '#111418',
        tertiary: '#f0f2f4',
        quaternary: '#637588',
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

