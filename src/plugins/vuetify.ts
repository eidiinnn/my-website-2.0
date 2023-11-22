import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: "#f5bde6",
          secondary: "#7dc4e4",
          surface: "#363a4f",
          background: "#181926",
        },
      },
      light: {
        dark: false,
        colors: {
          primary: "#d9777f",
          secondary: "#2992c2",
          background: "#eee",
          surface: "#fff",
        },
      },
    },
  },
});
