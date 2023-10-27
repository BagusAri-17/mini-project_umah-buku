/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '64px',
          lg: '128px',
        }
      },

      fontFamily: {
        "balthazar": ['Balthazar', 'sans-serif'],
      },

      colors: {
        'primary': '#3A2E26',
      },

    },
  },
  plugins: [],
}