// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],
  app: {
    head: {
      titleTemplate: '%s | Karaoke Jamming by TRM',
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
