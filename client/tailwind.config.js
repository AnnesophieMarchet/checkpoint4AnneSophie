export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFDE4", // Définir une couleur primaire personnalisée
        secondary: "#851342",
        colorwhite: "#FFFFFF", // Définir une couleur secondaire personnalisée
        colorblack: "#000000", // Vous pouvez ajouter d'autres couleurs personnalisées ici si nécessaire
      },
      fontFamily: {
        custom: ['"Jost-VariableFont_wght"', "sans-serif"], // Définir une police de caractères personnalisée
        // Vous pouvez ajouter d'autres polices personnalisées ici si nécessaire
      },

      screens: {
        sm: "440px", // Définir un breakpoint personnalisé pour les écrans mobiles
        md: "768px", // Exemple d'autres breakpoints habituels
        lg: "1024px",
        xl: "1280px", // Très grand écran et au-delà
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
