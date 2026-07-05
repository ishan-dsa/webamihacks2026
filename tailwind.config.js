/** @type {import('tailwindcss').Config} */
module.exports = {


  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        neon: "#EFFF00",
        "neon-dim": "#BFCC00",
      },

      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
      },

      animation: {
        "pulse-slow":
          "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },

  plugins: [],
};
