/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Scan app directory for Tailwind classes
    './components/**/*.{js,ts,jsx,tsx}', // Scan components directory
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1E293B',
        'light-gray': '#F1F5F9',
      },
    },
  },
  plugins: [],
};
