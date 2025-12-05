import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: '#4A5D23',
        washi: '#F9F7F2',
        gold: '#C5A059',
        ink: '#1c1917',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        'serif-jp': ['var(--font-serif-jp)', 'Hiragino Mincho ProN', 'Yu Mincho', 'serif'],
      },
      letterSpacing: {
        'luxury': '0.35em',
        'ultra': '0.5em',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
