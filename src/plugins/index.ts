import { App } from "vue";
import vuetify from "./vuetify";
import router from "./router";
import pinia from "./pinia";
import i18n from "./i18n";

export default (app: App<Element>) => {
  app.use(router).use(vuetify).use(pinia).use(i18n);
};
