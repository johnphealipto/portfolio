import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          strong: "#ff4000",
        },
        dark: "#0a0a0a",
      },
      borderColor: {
        DEFAULT: "#1a1a1a",
      },
      animation: {
        title: "title 3s ease-out forwards",
        "fade-in": "fade-in 3s ease-in-out",
      },
      keyframes: {
        title: {
          "0%": {
            opacity: "0",
            "line-height": "0%",
            transform: "scale(1.25)",
          },
          "25%": {
            opacity: "0",
            "line-height": "0%",
            transform: "scale(1.25)",
          },
          "80%": {
            opacity: "1",
            "line-height": "50%",
          },
          "100%": {
            opacity: "1",
            "line-height": "100%",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "75%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
