/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      preset: 'lemonade'
    },
  },
  plugins: [
    require('daisyui'),
    require('preline/plugin'),
    require('flowbite/plugin')
  ],
}