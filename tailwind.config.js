/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem" },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B1E1E",
          light: "#A83A3A",
          dark: "#6B1414",
        },
        secondary: "#2B2B2B",
        accent: "#D9D9D9",
        success: "#1D8F5A",
        surface: "#FFFFFF",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(43,43,43,0.04), 0 8px 24px rgba(43,43,43,0.06)",
        elevated: "0 4px 8px rgba(43,43,43,0.06), 0 20px 40px rgba(43,43,43,0.10)",
      },
      keyframes: {
        sheen: {
          "0%": { transform: "translateX(-150%) rotate(8deg)" },
          "100%": { transform: "translateX(150%) rotate(8deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        sheen: "sheen 2.4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
