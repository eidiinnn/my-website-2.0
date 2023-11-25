import { App } from "vue";
import itsComponentVue from "./componentTest.vue";
import topMenuVue from "./top-menu.vue";
import resumeHeaderVue from "./resume-header.vue";
import sectionTitleVue from "./section-title.vue";
import experienceSectionVue from "./experience-section.vue";

export default (app: App<Element>) => {
  app
    .component("ComponentTest", itsComponentVue)
    .component("topMenu", topMenuVue)
    .component("resumeHeader", resumeHeaderVue)
    .component("section-title", sectionTitleVue)
    .component("experience-section", experienceSectionVue);
};
