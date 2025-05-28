import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#445D4A", // Dark green for buttons
        secondary: "#C1C6B9", // Light olive/gray
        accent: "#ebe9e2", // Cream
        black: "#000000", // Buttons / text
        white: "#ffffff", // Text background
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translate(0%)" },
          "95%": { transform: "translate(-95%)" },
        },
        scrollReverse: {
          "0%": { transform: "translate(-55%)" },
          "95%": { transform: "translate(55%)" },
        },
      },
      animation: {
        scroll: "scroll 100s infinite",
        scrollReverse: "scrollReverse 100s infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        "purple-dark": {
          extend: "dark",
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#fffaf1",
              400: "#c031e2",
              700: "#ecd9b4",
              800: "#a1a694",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
        },
      },
    }),
  ],
};
