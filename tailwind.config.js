/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4361ee",
          light: "#4895ef",
          dark: "#3f37c9",
        },
        secondary: {
          DEFAULT: "#3a0ca3",
          light: "#7209b7",
          dark: "#480ca8",
        },
      },
    },
  },
  plugins: [],
}