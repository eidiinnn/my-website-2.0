import { App } from "vue";
import vuetify from "./vuetify";
import router from "./router";

export default (app: App<Element>) => {
  app.use(router).use(vuetify);
};
