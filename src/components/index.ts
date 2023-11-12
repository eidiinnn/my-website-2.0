import { App } from "vue";
import itsComponentVue from "./componentTest.vue";
import topMenuVue from "./top-menu.vue";

export default (app: App<Element>) => {
  app
    .component("ComponentTest", itsComponentVue)
    .component("topMenu", topMenuVue);
};
