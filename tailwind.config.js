/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary: "#1C6C8C",
        secondary: "#FF6B35",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-in-delay": "fadeIn 1s ease-in-out 0.5s both",
        "fade-in-delay-2": "fadeIn 1s ease-in-out 1s both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
