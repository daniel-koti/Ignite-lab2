/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx' // Dentro do arquivo src, qualquer pasta que tenha um arquivo tsx. (Terei estilização do tailwind)
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      }, 
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
