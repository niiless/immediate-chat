import { createApp } from "vue";
import "./style.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "amfe-flexible";
import { router } from "./router/index";
import App from "./App.vue";
const app = createApp(App);
app.use(Antd).use(router).mount("#app");
