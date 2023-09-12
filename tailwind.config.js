/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        oxygen: ["Oxygen"],
      },
      colors: {
        blue: "#00b4d8",
      },
    },
  },
  plugins: [],
};
