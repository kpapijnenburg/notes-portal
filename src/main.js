import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Note from "./components/Note.vue";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [{ path: "/notes:id", component: Note }];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
