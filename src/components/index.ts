import { App } from "vue";
import itsComponentVue from "./componentTest.vue";

export default (app: App<Element>) => {
  app.component("ComponentTest", itsComponentVue);
};
