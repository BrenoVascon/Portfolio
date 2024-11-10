/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background": "url('./public/background.jpg')",
      },
      colors: {
        // Defina suas cores personalizadas aqui
        primary: "#03235E", // Cor primária (exemplo)
        secondary: "#BF439C", // Cor secundária (exemplo)
      },
      screens: {
        xl2: "1600px", // Definindo um breakpoint para telas maiores que 1600px
      },
    },
  },
  plugins: [],
};
