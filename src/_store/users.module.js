import UserService from "./../services/UserService";

export const users = {
  userService: new UserService(),
  namespaced: true,
  state: {
    all: {},
  },
  actions: {
    getAll({ commit }) {
      commit("getAllRequest");

      this.userService.getAll().then(
        (users) => commit("getAllSuccess", users),
        (error) => commit("getAllFailure", error)
      );
    },
  },
  mutations: {
    getAllRequest(state) {
      state.all = { loading: true };
    },
    getAllSuccess(state, users) {
      state.all = { items: users };
    },
    getAllFailure(state, error) {
      state.all = { error };
    },
  },
};
