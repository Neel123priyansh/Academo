/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif'],
        'quicksand': ['"Quicksand"', 'sans-serif'],
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'Nunito' : ['"Nunito"', 'sans-serif'],
        'Lato' : ['"Lato"', 'serif']
      },
      colors: {
        'custom-bg': '#283142f9',
      },
    },
  },
  plugins: [],
}