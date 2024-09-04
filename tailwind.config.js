/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        width: "1409px",
        center: true,
      },
      colors:{
        primary:"#2C2643",
        secoundery:"#43E7DF"
      },
      fontFamily:{
        Chivo: "Chivo, sans-serif",
        DMSans: "DM Sans, sans-serif"
      },
      backgroundImage:{
        banner:"url('https://i.ibb.co/6tdFTyt/banner.png')",
        customerBanner:"url('https://i.ibb.co/FsCzMyH/Contents.png')",
        contactShape:"url('https://i.ibb.co/FsCzMyH/Contents.png')"
      }
    },
  },
  plugins: [],
}