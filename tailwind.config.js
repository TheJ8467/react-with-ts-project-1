/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minHeight: {
        555: '555px',
        700: '700px',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveOpposite: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        move: 'move 2s infinite',
        moveOpposite: 'moveOpposite 2s infinite',
      },
    },
  },
  plugins: [],
};
