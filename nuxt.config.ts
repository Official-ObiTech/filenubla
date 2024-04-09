// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/kinde", "@nuxt/ui"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    // github: {
    // 	clientId: process.env.NUXT_GITHUB_CLIENT_ID,
    // 	clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET,
    // },
    google: {
      clientId: process.env.NUXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
    },
  },

  css: ["~/assets/main.css"],
});
