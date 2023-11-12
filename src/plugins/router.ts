import * as Router from "vue-router";
import homePageVue from "../pages/home-page.vue";

const router = Router.createRouter({
  history: Router.createWebHashHistory(),
  routes: [{ path: "/", component: homePageVue }],
});

export default router;
