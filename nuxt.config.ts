// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/kinde",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
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
    // google: {
    //   clientId: process.env.NUXT_GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
    // },
    mongodbUri: process.env.NUXT_MONGODBURL,
  },

  css: ["~/assets/main.css"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
