import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7848F4',
        secondary: '#FF5C81',
        'e-black': '#131315',
        grey: '#687C94',
        'light-blue': '#27A5EE',
        background: '#F8F8FA',
        'navy-blue': '#10107B'
      },
    },
  },
  plugins: [],
};
export default config;
