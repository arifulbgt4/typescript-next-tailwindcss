module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        varela: ['Varela Round', 'sans-serif'],
      },
      colors: {
        primary: '#C10708',
        secondary: '#A4A4A4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};