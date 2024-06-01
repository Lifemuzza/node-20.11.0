import { fetchRelatedProducts } from "@/api/products.js";

export const relatedProductsModule = {
  state: () => ({
    relatedProducts: [],
  }),
  getters: {
    getRelatedProducts(state) {
      return state.relatedProducts;
    },
  },
  actions: {
    async loadRelatedProducts({ commit }) {
      try {
        const products = await fetchRelatedProducts();

        commit("setRelatedProducts", products);
      } catch (error) {
        this.error = error.message;
      } finally {
        // this.isLoading = false;
      }
    },
  },
  mutations: {
    setRelatedProducts(state, value) {
      state.relatedProducts = value;
    },
  },
};