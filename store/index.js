import { createStore } from "vuex";
import { cartModule } from "./cartStore.js";
import { modalsStoreModule } from "./modalsStore.js";
import { relatedProductsModule } from "./relatedProductsStore.js";

export const store = createStore({
  modules: {
    relatedProducts: relatedProductsModule,
    cart: cartModule,
    modals: modalsStoreModule,
  },
});
