import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        black: {
          900: "#000000"
        },
        white: "#ffffff",
        primary: "#7CC1EA",
        blue: {
          300: "#55baf2",
          600: "#28B0FC"
        }
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
  plugins: [flowbite.plugin()],
};
export default config;
