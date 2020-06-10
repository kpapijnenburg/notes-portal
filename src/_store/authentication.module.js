import UserService from "./../services/UserService";
import router from "./../_helpers/router";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

export const authentication = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ dispatch, commit }, { email, password }) {
      commit("loginRequest", { email });
      const userService = new UserService();
      userService.login(email, password).then(
        (user) => {
          commit("loginSuccess", user);
          router.push("/create");
        },
        (error) => {
          commit("loginFailure", error);
          dispatch("alert/error", error, { root: true });
        }
      );
    },
    register({ commit }, { email, password }) {
      const userService = new UserService();
      userService.register(email, password).then((user) => {
        commit("registerSuccess", user);
        router.push("/login");
      });
    },
    logout({ commit }) {
      const userService = new UserService();

      userService.logout();
      commit("logout");
    },
  },
  mutations: {
    loginRequest(state, user) {
      state.status = { loggingIn: true };
      state.user = user;
    },
    loginSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    loginFailure(state) {
      state.status = {};
      state.user = null;
    },
    logout(state) {
      state.status = {};
      state.user = null;
    },
  },
};
