module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#BD97D3",
          600: "#550f8c",
          900: "#13092E",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
