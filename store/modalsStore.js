export const modalsStoreModule = {
  state: () => ({
    modalMessage: {
      message: "",
    },
  }),
  getters: {
    getModalMessage(state) {
      return state.modalMessage;
    },
  },
  actions: {
    setModalMessage({commit}, text) {
      commit("setModalMessage", text);
    },
  },
  mutations: {
    setModalMessage(state, text) {
      state.modalMessage.message = text;
    },
  },
};
