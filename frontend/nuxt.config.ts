// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/i18n', '@nuxt/image'],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [ 'en', 'fr'],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    lazy: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})