/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          red: '#b91c1c', // Rich BBQ Red
          dark: '#1a1a1a', // Charcoal
          cream: '#fffbeb', // Warm background
          gold: '#facc15', // Accent
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
