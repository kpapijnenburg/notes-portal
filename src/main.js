import Vue from "vue";
import router from "./_helpers/router";
import { store } from "./_store/index";

import App from "./App.vue";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

//import { configureFakeBackend } from "./_helpers/fake-backend.ts";
//configureFakeBackend();

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store: store,
}).$mount("#app");
