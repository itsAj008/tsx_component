/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        squish: {
          '50%': { transform: 'scaleX(1.4) scaleY(0.6)' },
        },
      },
      animation : {
        squish : "squish 300ms ease-in-out "

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}