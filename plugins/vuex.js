import { cartStore } from "@/store/cartStore.js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(cartStore);
});
