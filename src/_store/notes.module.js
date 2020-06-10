export const notes = {
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
};
