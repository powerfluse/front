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
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Titillium Web',
            },
            h2: {
              fontFamily: 'Titillium Web',
            },
            h3: {
              fontFamily: 'Titillium Web',
            },
            p: {
              fontFamily: 'Source Sans Pro',
            },
          },
        },
        'on-white': {
          css: {
            h2: {
              color: '#550f8c',
            },
          },
        },
        'on-purple': {
          css: {
            h2: {
              color: '#d1d5db',
            },
            h3: {
              color: '#550f8c',
            },
            p: {
              color: '#d1d5db',
            },
            strong: {
              color: '#aa248e',
              fontWeight: 700,
            },
            a: {
              color: '#aa248e',
            },
          },
        },
        'on-purple-aktuelles': {
          css: {
            h2: {
              color: '#d1d5db',
            },
            h3: {
              color: '#d1d5db',
            },
            p: {
              color: '#d1d5db',
            },
            strong: {
              color: '#d1d5db',
            },
            a: {
              color: '#aa248e',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
