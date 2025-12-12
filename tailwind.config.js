/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
      },
      colors: {
        brand: {
          lightblue:"#3b82f6 ",
          accent: "#2557a7", // Blue 500
          dark: "#111827", // More refined dark
          navy: "#0d6604", // Slate 900
          success: "#059669", // Emerald 600
          surface: "#ffffff",
          bg: "#f9fafb", // Slightly refined bg
          border: "#e5e7eb",
        },
      },
      backgroundImage: {
        mesh: "radial-gradient(at 40% 20%, rgba(30, 64, 175, 0.05) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(5, 150, 105, 0.05) 0px, transparent 50%)",
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0,0,0,0.04)",
        hover: "0 10px 25px -5px rgba(0,0,0,0.08)",
        glow: "0 0 20px rgba(59, 130, 246, 0.1)",
      },
    },
  },
  plugins: [],
};
