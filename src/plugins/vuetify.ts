import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import { aliases, md } from "vuetify/iconsets/md";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
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
