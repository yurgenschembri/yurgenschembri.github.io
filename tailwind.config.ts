import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        onyx: {
          DEFAULT: "#343639",
          100: "#0a0b0b",
          200: "#141516",
          300: "#1f2022",
          400: "#292a2d",
          500: "#343639",
          600: "#595d63",
          700: "#80858c",
          800: "#aaaeb2",
          900: "#d5d6d9",
        },
        carolina_blue: {
          DEFAULT: "#87bcde",
          100: "#0f2838",
          200: "#1f5170",
          300: "#2e79a8",
          400: "#4f9ecf",
          500: "#87bcde",
          600: "#9fcae5",
          700: "#b7d7eb",
          800: "#cfe4f2",
          900: "#e7f2f8",
        },
        wheat: {
          DEFAULT: "#f1d9b0",
          100: "#47320d",
          200: "#8e6319",
          300: "#d59526",
          400: "#e5b86a",
          500: "#f1d9b0",
          600: "#f4e1c1",
          700: "#f7e9d0",
          800: "#f9f0e0",
          900: "#fcf8ef",
        },
        golden_brown: {
          DEFAULT: "#99621e",
          100: "#1f1406",
          200: "#3d270c",
          300: "#5c3b12",
          400: "#7b4e18",
          500: "#99621e",
          600: "#d08529",
          700: "#dfa45b",
          800: "#e9c292",
          900: "#f4e1c8",
        },
        bittersweet: {
          DEFAULT: "#ef5b5b",
          100: "#3c0606",
          200: "#790c0c",
          300: "#b51212",
          400: "#e92020",
          500: "#ef5b5b",
          600: "#f27d7d",
          700: "#f59e9e",
          800: "#f9bebe",
          900: "#fcdfdf",
        },
      },
      fontFamily: {
        serif: ["Cambria"],
        sans: ["Bahnschrift"],
        mono: ["Monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
