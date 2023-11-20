import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

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
          secondary: "#c6a0f6",
          surface: "#363a4f",
          background: "#181926",
        },
      },
      light: {
        dark: false,
        colors: {
          primary: "#ee99a0",
          secondary: "#c6a0f6",
          background: "#eee",
          surface: "#fff",
        },
      },
    },
  },
});
