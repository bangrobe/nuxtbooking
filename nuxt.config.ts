// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "nuxt-icon"],
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
  ],
  build: {
    transpile: ["primevue"],
  },

  imports: {
    dirs: [
      "stores", // Pinia Stores Autoimport
    ],
  },
});
