import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#511989',
          light: '#F0E0F5',
          dark: '',
        },
        secondary: {
          DEFAULT: '#fac007',
          light: '',
          dark: '',
        },
        font: {
          primary: '#B261C7',
          secondary: '',
          light: '#FFFFFF',
          dark: '',
        },
        background: {
          DEFAULT: '#f1eef4',
          light: '#f3f3f3',
          dark: 'lightgrey',
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tw-elements/plugin.cjs")],
};
export default config;
