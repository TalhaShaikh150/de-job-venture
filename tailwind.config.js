/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ensure you have installed this font or imported it in index.css
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#6BC551", // text-brand-green, bg-brand-green
          dark: "#161F33",  // bg-brand-dark (Used in the component)
          bg: "#161F33",    // bg-brand-bg (Fixes your specific error)
        },
      },
    },
  },
  plugins: [],
}