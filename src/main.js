import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import App from "./App.vue";
import Create from "./components/Create.vue";
import Note from "./components/Note.vue";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

const routes = [
  { path: "/create", component: Create },
  { path: "/view/:id", component: Note },
];

const router = new VueRouter({ routes });

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: [],
  },
  mutations: {
    add(state, note) {
      state.notes.add(note);
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  store: store,
}).$mount("#app");
