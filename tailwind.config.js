/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aboutBG': "url('src/assets/aboutBG.jpg')",
      },
      fontSize: {
        // className="text-fontTitle"
        'fontBiggestTitles': '76px',
        'fontBigTitles': '69px',
        'fontTitle': '46px',
        'fontSubTitle': '24px',
        'fontDefault': '21px',
      },
      fontFamily: {
        // className="font-inter"
        inter: ['Inter', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

