export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Avenir Next"', '"Segoe UI"', 'sans-serif'],
        handwriting: ['"Comic Sans MS"', '"Bradley Hand"', 'cursive'],
      },
      colors: {
        cream: '#FFF7E8',
        blush: '#F7DDE5',
        lavender: '#E8E0FA',
        powder: '#DCEFFC',
        mint: '#DDF2DF',
        brown: '#594B45',
        coral: '#F29B91',
      },
      boxShadow: {
        soft: '0 14px 40px rgba(89, 75, 69, 0.12)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 13s linear infinite',
        bob: 'bob 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(18px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
