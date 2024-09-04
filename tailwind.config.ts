import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          900: "#000000"
        },
        white: "#ffffff",
        primary: "#77C0E9"
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      maxWidth: {
        userView: '80rem'
      },
      width: {
        userView: '80rem'
      },
      margin: {
        userView: '3.625rem'
      },
      padding: {
        userView: '3.625rem'
      },
    },
  },
  plugins: [],
};
export default config;
