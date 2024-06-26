/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'extra-light': 100,
        'medium-bold': 550,
        'extra-bold': 950,
      },
      colors: {
        blue: {
          155:'#DBF1FF'
        }
      },
    },
  },
  plugins: [],
}
