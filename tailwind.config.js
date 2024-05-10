/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      preset: 'lemonade'
    },
  },
  plugins: [
    require('daisyui'),
    require('preline/plugin'),
  ],
}