import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        cream: {
          100: "#fcfbf7",
          200: "#f9f7ef",
          300: "#f6f3e8",
          400: "#f3efe0",
          500: "#f0ebd8",
          600: "#c0bcad",
          700: "#908d82",
          800: "#605e56",
          900: "#302f2b"
        },
        aqua: {
          100: "#eef8f8",
          200: "#dcf0f1",
          300: "#cbe9ea",
          400: "#b9e1e3",
          500: "#a8dadc",
          600: "#86aeb0",
          700: "#658384",
          800: "#435758",
          900: "#222c2c"
        },
        lb: {
          100: "#dae5eb",
          200: "#b5cad8",
          300: "#8fb0c4",
          400: "#6a95b1",
          500: "#457b9d",
          600: "#37627e",
          700: "#294a5e",
          800: "#1c313f",
          900: "#0e191f"
        },
        db: {
          100: "#d2d7dd",
          200: "#a5aebc",
          300: "#77869a",
          400: "#4a5d79",
          500: "#1d3557",
          600: "#172a46",
          700: "#112034",
          800: "#0c1523",
          900: "#060b11"
        },
      },
      fontFamily: {
        "mono": ["monospace"]
      }
    },
  },
  plugins: [],
} satisfies Config;
