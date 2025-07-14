/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eeefff",
          100: "#dfe2ff",
          200: "#c6c8ff",
          300: "#a3a5fe",
          400: "#857efb",
          500: "#6b56f4",
          600: "#6542e9",
          700: "#5834ce",
          800: "#472da6",
          900: "#3c2c83",
          950: "#251a4c",
        }
      }
    },
  },
  plugins: [],
}

