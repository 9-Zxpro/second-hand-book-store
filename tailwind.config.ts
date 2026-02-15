import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm paper-like palette
        paper: {
          50: "#faf7f2",
          100: "#f5ede0",
          200: "#ead9c4",
          300: "#dbbfa0",
          400: "#cb9e78",
          500: "#bc8459",
          600: "#af734e",
          700: "#925e42",
          800: "#764d3a",
          900: "#604030",
          950: "#321f17",
        },
        ink: {
          50: "#f6f5f0",
          100: "#e8e6dc",
          200: "#d3cfbe",
          300: "#b8b096",
          400: "#9e9474",
          500: "#8d8162",
          600: "#7a6e56",
          700: "#655a47",
          800: "#544b3c",
          900: "#473f34",
          950: "#26221b",
        },
        sage: {
          50: "#f3f7f3",
          100: "#e3ede4",
          200: "#c8daca",
          300: "#9fc0a3",
          400: "#6f9e75",
          500: "#4d8154",
          600: "#3b6641",
          700: "#315236",
          800: "#2a422d",
          900: "#233726",
          950: "#111f14",
        },
        amber: {
          warm: "#d97706",
          light: "#fbbf24",
          pale: "#fef3c7",
        },
        // Extended stone palette for backgrounds
        stone: {
          25: "#fdfcfb",
          50: "#faf9f7",
          75: "#f5f3ef",
          100: "#f5f4f1",
          150: "#eceae5",
          200: "#e7e5e0",
          300: "#d7d3cc",
          400: "#a9a49b",
          500: "#79746c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Lora'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        book: "4px 6px 20px rgba(0,0,0,0.15), 2px 3px 8px rgba(0,0,0,0.10), inset -2px 0 4px rgba(0,0,0,0.08)",
        "book-hover":
          "8px 12px 32px rgba(0,0,0,0.20), 4px 6px 12px rgba(0,0,0,0.12), inset -2px 0 4px rgba(0,0,0,0.08)",
        card: "0 2px 12px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover":
          "0 8px 32px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)",
        glass: "0 4px 24px rgba(0,0,0,0.08), 0 1px 6px rgba(0,0,0,0.04)",
        "inner-soft": "inset 0 1px 3px rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        "paper-texture":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a8a29e' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "warm-gradient": "linear-gradient(135deg, #faf7f2 0%, #f5ede0 100%)",
        "hero-gradient":
          "radial-gradient(ellipse at 30% 50%, rgba(217,119,6,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(77,129,84,0.05) 0%, transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
