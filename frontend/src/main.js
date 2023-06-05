import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store.js";
import "@/assets/styles/styles.scss";
import VueInsProgressBar from "vue-ins-progress-bar";

Vue.use(VueInsProgressBar);

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
