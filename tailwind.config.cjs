/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Garantindo que temos fontes serifadas para luxo
        serif: ['Playfair Display', 'serif'], 
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Nova paleta DOURADO LUXO (substituindo o amber/laranja)
        gold: {
          100: '#FBF4D9',
          300: '#E6D491',
          500: '#D4AF37', // Dourado Base (Metallic Gold)
          600: '#B8860B', // Dourado Escuro (Dark Goldenrod)
          700: '#996515', // Dourado Profundo
        },
      },
      keyframes: {
        // Animação de brilho (shimmer)
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        // Animação de entrada suave de baixo para cima
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Animação de pulso suave para o brilho da logo
        logoPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 2px #D4AF37)' },
          '50%': { filter: 'drop-shadow(0 0 8px #FBF4D9)' },
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        logoPulse: 'logoPulse 3s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}