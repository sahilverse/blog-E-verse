/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      lineHeight: {
        'relaxed': '1.625',
      }
    },
    colors: {
      "timberwolf": "#DAD7CD",
      "sage": "#A3B18A",
      "fernGreen": "#588157",
      "hunterGreen": "#3A5A40",
      "brunsickGreen": "#344E41",
      "background": "#fcfcfc",
      "cornsilk": "#FEFAE0",
      "hover-bg": "#374350",

    }
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]

  },
}