/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#143424',
          light: '#1a4a32',
          dark: '#0d2218',
        },
        cta: {
          DEFAULT: '#15C15E',
          hover: '#12a850',
          light: '#e8faf0',
        },
        accent: {
          DEFAULT: '#D4A017',
          light: '#f5e6b0',
        },
        base: {
          DEFAULT: '#F7F8F5',
          dark: '#EDEEE9',
        },
        dark: {
          DEFAULT: '#0D2218',
          card: '#142e1f',
        },
        neutral: {
          body: '#4A5568',
          light: '#718096',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(13, 34, 24, 0.92) 0%, rgba(20, 52, 36, 0.85) 50%, rgba(21, 193, 94, 0.15) 100%)",
        'section-gradient': 'linear-gradient(180deg, #F7F8F5 0%, #EDEEE9 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0D2218 0%, #143424 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(20, 52, 36, 0.08)',
        'card-hover': '0 12px 40px rgba(20, 52, 36, 0.18)',
        'cta': '0 4px 20px rgba(21, 193, 94, 0.35)',
        'navbar': '0 2px 20px rgba(20, 52, 36, 0.12)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
