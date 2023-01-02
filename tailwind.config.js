/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#432C7A',
        'light-purple': '#80489C',
        'dark-pink': '#FF8FB1',
        'light-pink': '#FCE2DB'
      },
      fontFamily: {
        'fira': ['Fira Sans', 'sans-serif']
      },
      fontSize: {
        'xl': ['calc(1.375rem + 1.5vw)']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
