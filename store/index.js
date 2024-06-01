import { createStore } from "vuex";
import { cartModule } from "./cartStoreModule";
import { relatedProductsModule } from "./relatedProductsModule";

export const store = createStore({
  modules: {
    relatedProducts: relatedProductsModule,
    cart: cartModule,
  },
});
