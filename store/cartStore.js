import { createStore } from "vuex";

export const cartStore = createStore({
  state() {
    return {
      cartItems: [],
      counselingCheckbox: false,
    };
  },
  mutations: {
    setCounselingCheckbox(state, value) {
      state.counselingCheckbox = value;
    },
    setItems(state, items) {
      state.cartItems = items;
    },
    addItemToCart(state, newItem) {
      state.cartItems.push(newItem);
    },
    removeItemFromCart(state, itemId) {
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    incrementItemQuantity(state, itemId) {
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItemQuantity(state, itemId) {
      const item = state.cartItems.find((item) => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
  actions: {
    async submitOrder({ state }) {
      const url = "/api/submit";

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state.cartItems),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! ${response.status}`);
        }

        console.log(await response.json());
      } catch (error) {
        console.error(error);
      }
    },
    async fetchItems({ commit }) {
      try {
        const response = await fetch("/products/index.json");

        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }

        const items = await response.json();
        commit("setItems", items);
      } catch (error) {
        console.error(error);
      }
    },
    updateCounselingCheckbox({ commit }, value) {
      commit("setCounselingCheckbox", value);
    },
    removeItemFromCart({ commit }, itemId) {
      commit("removeItemFromCart", itemId);
    },
    incrementItemQuantity({ commit }, itemId) {
      commit("incrementItemQuantity", itemId);
    },
    decrementItemQuantity({ commit }, itemId) {
      commit("decrementItemQuantity", itemId);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
  },
  getters: {
    getCounselingCheckbox(state) {
      return state.counselingCheckbox;
    },
    getItems(state) {
      return state.cartItems;
    },
    getProductsQuantity(state) {
      return state.cartItems.reduce((acc, n) => acc + n.quantity, 0);
    },
    getTotalAmount(state) {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    getTotalQuantity(state) {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
});
