import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import plugins from "./plugins";
import components from "./components";

const app = createApp(App);
plugins(app);
components(app);
app.mount("#app");
