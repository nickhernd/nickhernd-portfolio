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
          50: '#f6f5ff',
          100: '#ede9ff',
          200: '#dad2fe',
          300: '#c0b0fc',
          400: '#a389f8',
          500: '#8662f2',
          600: '#724ae6',
          700: '#6037cd',
          800: '#4f2da6',
          900: '#432a85',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      blink: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0' }
      },
      drawPath: {
        '0%': { 'stroke-dashoffset': '100', opacity: '0' },
        '100%': { 'stroke-dashoffset': '0', opacity: '1' }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}