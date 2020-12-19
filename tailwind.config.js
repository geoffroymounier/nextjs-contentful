module.exports = {
  darkMode: 'media', // 'media' or 'class',
  purge: [
    '../_next/**/*.{js,ts,jsx,tsx,html,json}',
    './_next/**/*.{js,ts,jsx,tsx,html,json}',
    './dist/_next/**/*.{js,ts,jsx,tsx,html,json}',
    '_next/**/*.{js,ts,jsx,tsx,html,json}',
    '../.next/**/*.{js,ts,jsx,tsx,html,json}',
    './.next/**/*.{js,ts,jsx,tsx,html,json}',
    './dist/.next/**/*.{js,ts,jsx,tsx,html,json}',
    '.next/**/*.{js,ts,jsx,tsx,html,json}'
  ],
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