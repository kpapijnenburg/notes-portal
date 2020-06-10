import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import App from "./App.vue";
import Create from "./components/Create.vue";
import Note from "./components/Note.vue";
import Login from "./components/Login.vue";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

const routes = [
  { path: "/create", component: Create, meta: { requiresAuth: true } },
  { path: "/view/:id", component: Note, meta: { requiresAuth: true } },
  { path: "/login", component: Login, meta: { requiresAuth: false } },
  // Redirect to home
  { path: "*", redirect: "/" },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  const authRequired = to.matched.some((record) => record.meta.requiresAuth);

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: [],
  },
  mutations: {
    add(state, note) {
      state.notes.push(note);
    },
  },
  getters: {
    getById: (state) => (id) => {
      return state.notes.find((note) => {
        return note.id == id;
      });
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  store: store,
}).$mount("#app");
