/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        sage: {
          50:  '#F0F5F0',
          100: '#D9E8DB',
          200: '#B5D1B9',
          300: '#8DB892',
          400: '#7C9A7E',
          500: '#5E8262',
          600: '#4A7C59',
          700: '#3A6247',
          800: '#2C4E38',
          900: '#1E3A28',
        },
        navy: {
          50:  '#E8EDF5',
          100: '#C5D1E5',
          200: '#8DA5CB',
          300: '#5578B1',
          400: '#2D4A7A',
          500: '#1B2D4F',
          600: '#152440',
          700: '#0F1B30',
          800: '#0A1220',
          900: '#050A10',
        },
        sand: {
          50:  '#FDFAF5',
          100: '#F5ECD7',
          200: '#E8D5B7',
          300: '#D4B896',
          400: '#C09B75',
          500: '#A67E54',
        },
        cream: '#FAFAF7',
      },
      backgroundImage: {
        'aurora':       'linear-gradient(135deg, #0F1B30 0%, #1B2D4F 35%, #2C4E38 65%, #3A6247 100%)',
        'aurora-soft':  'linear-gradient(160deg, #F5ECD7 0%, #D9E8DB 40%, #C5D1E5 100%)',
        'aurora-mid':   'linear-gradient(135deg, #1B2D4F 0%, #2D4A7A 40%, #4A7C59 75%, #7C9A7E 100%)',
        'hero-bg':      'linear-gradient(160deg, #050A10 0%, #0F1B30 30%, #1B2D4F 55%, #1E3A28 80%, #2C4E38 100%)',
        'card-glow':    'linear-gradient(135deg, rgba(74,124,89,0.15) 0%, rgba(45,74,122,0.1) 100%)',
      },
      animation: {
        'float':        'float 7s ease-in-out infinite',
        'pulse-slow':   'pulse 5s ease-in-out infinite',
        'breathe':      'breathe 4s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)',    opacity: '0.3' },
          '50%':      { transform: 'scale(1.12)', opacity: '0.6' },
        },
      },
      boxShadow: {
        'glass':   '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glow-sage': '0 0 40px rgba(124, 154, 126, 0.25)',
        'glow-navy': '0 0 40px rgba(27, 45, 79, 0.3)',
        'soft':    '0 4px 24px rgba(27, 45, 79, 0.08)',
        'lift':    '0 16px 48px rgba(27, 45, 79, 0.14)',
      },
    },
  },
  plugins: [],
}
