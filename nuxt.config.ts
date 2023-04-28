// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "nuxt-icon", "@sfxcode/nuxt-primevue",'@unocss/nuxt',],
  css: [
    "primevue/resources/themes/saga-orange/theme.css",
    "primevue/resources/primevue.css",
  ],

  build: {
    transpile: ["primevue"],
  },
  unocss: {
    uno: true,
    theme: {
      colors: {
        'primary': '#f3c300',
      }
    },
    attributify: true,
    preflight: false,
    icons: {
      scale: 1.2
    },
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50']
    ]
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
