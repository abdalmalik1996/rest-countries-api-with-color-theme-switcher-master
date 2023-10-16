/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          background: "#fafafa", //(Light Mode Background)
          primary: "#ffffff", // (Light Mode Elements)
          secondary: "#111517", //(Light Mode Text)
          darkGray: "#858585",
        },
      },
      dark: {
        colors: {
          background: "#202c37", //(Dark Mode Background)
          primary: "#2b3945", //(Dark Mode Elements)
          secondary: "#ffffff", //(Dark Mode Text)
          surface: "#2b3945", //(Dark Mode Elements)
          darkGray: "#858585",
        },
      },
    },
  },
});
