const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          300: '#aa248e',
          600: '#550f8c',
          800: '#190d44',
          900: '#130a34',
        },
      },
      fontFamily: {
        titillium: ['"Titillium Web"', ...defaultTheme.fontFamily.sans],
        source: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
