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
        'fontBigTitles': '55px',
        'fontTitle': '35px',
        'fontSubTitle': '24px',
        'fontDefault': '16px',
        'badge':'13px'
      },
      fontFamily: {
        // className="font-inter"
        inter: ['Inter', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'roundedBTN2': '12px',
      }
    },
  },
  plugins: [],
}

