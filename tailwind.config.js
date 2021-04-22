module.exports = {
  darkMode: 'media', // 'media' or 'class',
  purge: {
    content: ['./classArray.json','./src/**/*.{js,ts,jsx,tsx}'],
    css: ['./styles/index.css'],
  },
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
}