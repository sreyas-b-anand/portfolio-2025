import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundStart: "#11071F",
        backgroundMid: "#130921",
        backgroundEnd: "#130E1A",
        text: "#FFD700",
        primary: "#5A189A",
        secondary: "#7B2CBF",
        hover: "#9D4EDD",
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 10s ease infinite',
      },
      
    },
  },
  plugins: [],
} satisfies Config;
