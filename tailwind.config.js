module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['HelveticaNowDisplay', 'Helvetica Neue', 'Arial Nova', 'Helvetica', 'Arial', 'sans-serif'],
      'display': ['Schnyder S', 'Times', 'Times New Roman', 'serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#000',
        'off-black': '#222222',
        'white': '#FFF',
        'off-white': '#FBF4E8',
        'green': '#006700',
        'red': '#C20000',
        'gold': '#8E7E62',
        'navy': '#0C1F43',
        'grey': '#595959'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}