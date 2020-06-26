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
    getById: (notes) => (id) => {
      return notes.find((note) => {
        return note.id == id;
      });
    },
  },
};
