/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    //menimpa yang ada
    container: {
      center: true,
      padding: "16px"
    },
    //menambahkan baru
    extend: {
      fontFamily: {
        SourceSansPro: ["Source Sans Pro", "cursive"],
        Poppins: ["Poppins", "cursive"]
      },
      colors: {
        primary: "#06b6d4",
        dark: "#0f172a"
      },
      screen: {
        "2xl": "1320px"
      }
    },
  },
  plugins: [],
}
