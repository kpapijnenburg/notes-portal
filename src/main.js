import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Create from "./components/Create.vue";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

const routes = [{ path: "/create", component: Create }];

const router = new VueRouter({ routes });

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
