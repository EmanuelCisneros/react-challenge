/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        animation: {
          pulse: 'pulse 2s infinite',
        },
      },
    },
    plugins: [],
  }