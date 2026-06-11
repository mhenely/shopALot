/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#faf6ef',
        clay: {
          100: '#f1e4d6',
          600: '#b4541f',
          700: '#97431a',
          900: '#5c2c12',
        },
        ink: '#241c17',
      },
    },
  },
  plugins: [],
}
