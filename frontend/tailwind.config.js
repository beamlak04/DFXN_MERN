/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      xs: "380px",
      ss: "480px",
      sm: "540px",
      md: "768px",
      lg: "1060px",
      xl: "1440px",
      xxl: "1700px"
    }
  },
  plugins: [],
}