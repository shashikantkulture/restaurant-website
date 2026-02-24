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
        maroon: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#8B0000",
          600: "#7B0000",
          700: "#6B0000",
          800: "#5B0000",
          900: "#4B0000",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#D4AF37",
          600: "#B8941F",
          700: "#9A7A0A",
          800: "#7C6000",
          900: "#5E4700",
        },
        cream: {
          50: "#fefdfb",
          100: "#fef9f3",
          200: "#fdf2e7",
          300: "#fcebd5",
          400: "#fae4c3",
          500: "#F5E6D3",
          600: "#E8D4B8",
          700: "#DBC29D",
          800: "#CEB082",
          900: "#C19E67",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
