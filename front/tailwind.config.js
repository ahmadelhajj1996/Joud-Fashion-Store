// import { animate } from "framer-motion";

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Noto Sans Mono', 'cursive'],
      },
      animation: {
        'slide-in': 'slideIn 1s ease-out', // Animation name and duration
        // 'wiggle': 'wiggle 1s ease-in-out infinite',

      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(50%)' }, // Start off-screen
          '100%': { transform: 'translateX(0)' }, // End at the final position
        },
        // wiggle: {
        //   '0%, 100%': { transform: 'rotate(-3deg)' },
        //   '50%': { transform: 'rotate(3deg)' },
        // },
      },
    },
  },
  plugins: [
    // animate
  ],
};




