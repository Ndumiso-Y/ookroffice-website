/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // KRF Foundation colors
      colors: {
        gold: "#B27300", // KRF gold
        charcoal: "#1D1D1B",
        // Kgotla colors
        forest: "#1B5538",
        'kgotla-gold': "#c27700",
        // Koketso Rakhudu Group colors
        'royal-blue': '#174E81',
        'neutral-gray': '#F4F4F4',
        // Coffee colors
        deepCoffee: "#4B1D00",
        warmCoffee: "#6B2E00",
        coffeeOrange: "#E06A1C",
        cream: {
          DEFAULT: "#F5E9DA",
          50: "#FFF9F2"
        },
        // Business School colors
        'primary-brown': "#542a02",
        'accent-clay': "#753500",
        'forest-green': "#345623",
        'leadership-green': "#009444",
        'sky-blue': "#00a8be",
        'cyan-mist': "#a3cfdc",
        'footer-dark': "#0c3b2e",
      },
      fontFamily: {
        // Coffee fonts
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        worksans: ["Work Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        // Business School fonts
        heading: ['Oswald', 'Poppins', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        // Coffee gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'coffee-gradient': 'linear-gradient(135deg, #6B2E00 0%, #4B1D00 50%, #2C1200 100%)',
        'cream-gradient': 'linear-gradient(135deg, #FFF9F2 0%, #F5E9DA 100%)',
        'orange-gradient': 'linear-gradient(135deg, #F97316 0%, #E06A1C 50%, #C2410C 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
      },
      boxShadow: {
        // Coffee shadows
        'soft': '0 4px 20px rgba(75, 29, 0, 0.08)',
        'medium': '0 8px 30px rgba(75, 29, 0, 0.12)',
        'strong': '0 20px 60px rgba(75, 29, 0, 0.15)',
        'glow': '0 0 40px rgba(224, 106, 28, 0.3)',
        'inner-soft': 'inset 0 2px 4px rgba(0,0,0,0.06)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)'
      },
      animation: {
        // Coffee animations
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(224, 106, 28, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(224, 106, 28, 0.6)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}

