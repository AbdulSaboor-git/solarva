/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      backgroundImage: {
        radial: "radial-gradient(var(--tw-gradient-stops))",
        "radial-top-right":
          "radial-gradient(circle at center right, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
