// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3001,
  },
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],
  piniaPluginPersistedstate: {
    storage: "localStorage",
    debug: true,
  },
  css: ["~/assets/css/main.css"],
});
