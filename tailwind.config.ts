import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "Menlo", "Monaco", "Courier New", "monospace"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        terminal: {
          black: "#1C2320", // Dark green-black
          green: "#A0906A", // Bronzish gold
          cyan: "#9F8871", // Warm bronze
          purple: "#7A6C5D", // Muted bronze
          pink: "#B39C77", // Light bronze
          blue: "#8D7E6D", // Muted brown
          darkpurple: "#1A1F1C", // Darker green
          darkgray: "#232923", // Dark green-gray
          bronze: "#A68D69", // Main bronze color
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        scan: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "2%": {
            transform: "translate(3px, -3px)",
            textShadow:
              "3px 0 5px rgba(160, 144, 106, 0.8), -3px 0 5px rgba(179, 156, 119, 0.8)",
          },
          "4%": {
            transform: "translate(-3px, 3px)",
            textShadow:
              "-3px 0 5px rgba(160, 144, 106, 0.8), 3px 0 5px rgba(179, 156, 119, 0.8)",
          },
          "5%": { transform: "translate(0)" },
          "100%": { transform: "translate(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cursor-blink": "blink 1s infinite",
        typing: "typing 3.5s steps(40, end)",
        scan: "scan 5s linear infinite",
        "terminal-glitch": "glitch 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      backgroundImage: {
        "grid-pattern": `url('/images/grid-background.png')`,
        "bronze-overlay": `
					radial-gradient(rgba(166, 141, 105, 0.1) 1px, transparent 1px)
				`,
        "grid-lines": `
					linear-gradient(rgba(166, 141, 105, 0.05) 1px, transparent 1px),
					linear-gradient(90deg, rgba(166, 141, 105, 0.05) 1px, transparent 1px),
					radial-gradient(rgba(166, 141, 105, 0.025) 1px, transparent 1px)
				`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
