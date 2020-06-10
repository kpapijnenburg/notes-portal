import Vue from "vue";
import Vuex from "vuex";
import router from "./_helpers/router";

import { alert } from "./_store/alert.module";
import { authentication } from "./_store/authentication.module";
import { users } from "./_store/users.module";
import { notes } from "./_store/notes.module";

import App from "./App.vue";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import { configureFakeBackend } from "./_helpers/fake-backend.ts";

configureFakeBackend();
Vue.use(VueMaterial);
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    alert,
    authentication,
    users,
    notes,
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store: store,
}).$mount("#app");
