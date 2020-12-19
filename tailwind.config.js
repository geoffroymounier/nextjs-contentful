module.exports = {
  darkMode: 'media', // 'media' or 'class',
  purge: ['../.next/**/*.{js,ts,jsx,tsx,html}','./.next/**/*.{js,ts,jsx,tsx,html}'],
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