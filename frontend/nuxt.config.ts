// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
      preset: 'node-server',
    },
    site: {
        url: 'https://finition108.io',
        name: 'Finition108',
        description: "Bienvenue chez Finition 108, votre partenaire de choix pour des rénovations de qualité. Nous combinons savoir-faire technique et design créatif pour transformer chaque espace selon vos souhaits. Explorez nos services variés, jetez un œil à notre portfolio inspirant, et laissez-nous vous aider à réaliser l'espace de vos rêves.",
    },
    modules: ['@nuxtjs/i18n', '@nuxt/image', '@nuxt/eslint', '@nuxt/ui', '@nuxtjs/seo'],
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
    env: {
        API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3001',
    },
    extendRoutes(routes, resolve) {
        routes.push(
            {
                path: '/AboutUs',
                name: 'aboutus',
                component: resolve(__dirname, 'pages/AboutUs.vue')
            },
            {
                path: '/Services',
                name: 'services',
                component: resolve(__dirname, 'pages/Services.vue')
            },
            {
                path: '/Process',
                name: 'process',
                component: resolve(__dirname, 'pages/Process.vue')
            },
            {
                path: '/Contact',
                name: 'contact',
                component: resolve(__dirname, 'pages/Contact.vue')
            },
            {
                path: '/portfolio/all',
                name: 'portfolio',
                component: resolve(__dirname, 'pages/portfolio/all.vue')
            }
        )
    },
    server: {
        host: '159.203.52.35', // Default: localhost
        port: 3000, // Default: 3000
        allowedHosts: ['finition108.io', 'localhost'] // Add your domain here
    }
})
