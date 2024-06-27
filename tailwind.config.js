module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        main: '#025BD4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
