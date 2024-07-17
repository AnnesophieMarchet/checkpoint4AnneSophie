export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ca2061", // Définir une couleur primaire personnalisée
        secondary: "#851342",
        colorwhite: "#FFFFFF", // Définir une couleur secondaire personnalisée
        colorblack: "#000000", // Vous pouvez ajouter d'autres couleurs personnalisées ici si nécessaire
      },
      fontFamily: {
        custom: ['"Jost-VariableFont_wght"', "sans-serif"], // Définir une police de caractères personnalisée
        // Vous pouvez ajouter d'autres polices personnalisées ici si nécessaire
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
