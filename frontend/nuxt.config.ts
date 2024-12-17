// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/i18n', '@nuxt/image', '@nuxt/eslint','@nuxt/ui'],
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    compatibilityDate: '2024-04-03',
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    i18n: {
        vueI18n: './i18n.config.ts',
        locales: ['en', 'fr'],
        defaultLocale: 'fr',
        strategy: 'prefix_except_default',
        lazy: true,
    },
})