import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Extracted directly from the Noviqa logo mark (navy badge + emerald stripe)
        navy: {
          DEFAULT: "#0A1B33",
          deep: "#040F24",
          mid: "#0D2540",
          light: "#173A5E",
        },
        emerald: {
          DEFAULT: "#1C8A4E",
          bright: "#2FA759",
          dim: "#155E38",
        },
        ivory: "#F7F4EE",
        paper: "#FBFAF7",
        ink: {
          DEFAULT: "#12202C",
          soft: "#3A4A56",
        },
        mist: "#8FA3B0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(4,15,36,0.06), 0 10px 28px -10px rgba(4,15,36,0.14)",
        cardHover: "0 4px 10px rgba(4,15,36,0.10), 0 28px 56px -14px rgba(4,15,36,0.26)",
        emeraldGlow: "0 10px 30px -8px rgba(47,167,89,0.45)",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
