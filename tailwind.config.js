module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        game: {
          black: "#000000",
          milk: "#F8F8FF",
          dark: "#0A0A0A",
          gray: "#1A1A1A",
          accent: "#333333",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        gaming: ["Orbitron", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        slide: "slide 15s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slide: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
