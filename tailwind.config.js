/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pix: {
          dark: '#08080A',
          charcoal: '#101014',
          surface: '#15151A',
          card: '#1A1A22',
          'card-hover': '#20202A',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-gold': 'rgba(212, 175, 55, 0.25)',
          'border-gold-hover': 'rgba(212, 175, 55, 0.5)',
          gold: '#D4AF37',
          'gold-light': '#F6E6BF',
          'gold-muted': '#A3894E',
          'gold-dark': '#8A6D27',
          text: '#F4F4F6',
          muted: '#9CA3AF',
          dim: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F6E6BF 0%, #D4AF37 50%, #A3894E 100%)',
        'gold-subtle': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.12) 0%, rgba(8, 8, 10, 0) 70%)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 175, 55, 0.18), rgba(255, 255, 255, 0))',
      },
      boxShadow: {
        'gold-sm': '0 0 15px -3px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 30px -5px rgba(212, 175, 55, 0.25)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
