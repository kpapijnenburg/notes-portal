import Vue from "vue";
import Router from "vue-router";

import Create from "../components/Create.vue";
import Note from "../components/Note.vue";
import Login from "../components/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/create", component: Create, meta: { requiresAuth: true } },
    { path: "/view/:id", component: Note, meta: { requiresAuth: true } },
    { path: "/login", component: Login, meta: { requiresAuth: false } },
    { path: "*", redirect: "/login", meta: { requiresAuth: false } },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  const authRequired = to.matched.some((record) => record.meta.requiresAuth);

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
