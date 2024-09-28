/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./screen/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'netflix-bold' : '/assets/fonts/NetflixSans-Bold.otf',
      'netflix-light' : '/assets/fonts/NetflixSans-Light.otf',
      'netflix-medium' : '/assets/fonts/NetflixSans-Medium.otf',
      'netflix-regular' : '/assets/fonts/NetflixSans-Regular.otf'
    },
    screens: {
      'ms': {'min' : '320px', 'max' : '374px'},
      'mm': {'min' : '375px', 'max' : '424px'},
      'ml': {'min' : '425px', 'max' : '767px'},
      'tablet': {'min' : '768px', 'max' : '1023px'},
      'ls': {'min' : '1024px', 'max' : '1439px'},
      'll': {'min' : '1440px', 'max' : '2559px'},
      'xl': {'min' : '2560px'}
    },
    extend: {
    },
  },
  plugins: [],
}

