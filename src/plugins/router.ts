import * as Router from "vue-router";
import helloWorldVue from "../pages/helloWorld.vue";

const router = Router.createRouter({
  history: Router.createWebHashHistory(),
  routes: [{ path: "/", component: helloWorldVue }],
});

export default router;
