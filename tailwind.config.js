module.exports = {
  darkMode: 'media', // 'media' or 'class',
  purge: [
    '../_next/**/*.{js,ts,jsx,tsx,html}',
    './_next/**/*.{js,ts,jsx,tsx,html}',
    './dist/_next/**/*.{js,ts,jsx,tsx,html}',
    '_next/**/*.{js,ts,jsx,tsx,html}'],
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