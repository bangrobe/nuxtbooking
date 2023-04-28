// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "nuxt-icon", "@sfxcode/nuxt-primevue"],
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    'primeflex/primeflex.css'
  ],
  build: {
    transpile: ["primevue"],
  },
  primevue: {
    config: {
      ripple: true
    }
  },
  imports: {
    dirs: [
      "stores", // Pinia Stores Autoimport
    ],
  },
});
