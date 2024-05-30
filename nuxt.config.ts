// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-swiper"],
  css: ["~/assets/styles/index.less"],
  swiper: {
    prefix: "Swiper",
    styleLang: "css",

    modules: ["navigation", "pagination"],
  },
});
