/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
  },
  plugins: [
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],

}

