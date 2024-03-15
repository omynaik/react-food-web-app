/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBisque: "#FFE4C4",
        customPink: "#FFC0CB",
        customLavender: "#e6e6fa",
        customSerenity: "#b3cee5",
        customBeige: "#f5f5dc",
        customPeach: "#ffe5b4",
        customSilver: "#c0c0c0",
        customCream: "#fffdd0",
        customTan: "#d2b48c",
        customTaupe: "#483C32",
        //RED variants
        customPastelRed: "#9acd32",
        customCoral: "#ff7f50",
        customOrangeRed: "#ff5349",
        customCrimson: "#dc143c",
        customYellowOrange: "#ffae42",
      },
    },
  },
  plugins: [],
};
