import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router/index";
import mitt from "mitt";
const pinia = createPinia();
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.use(pinia).use(router).mount("#app");
