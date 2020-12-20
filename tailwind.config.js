module.exports = {
  darkMode: 'media', // 'media' or 'class',
  purge: {
    content: ['./classArray.json'],
    css: ['./styles/index.css'],
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}