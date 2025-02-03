// custom/router.js
export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = nuxtApp;

  vueApp.router.addRoutes([
    {
      path: '/AboutUs',
      name: 'aboutus',
      component: () => import('@/pages/AboutUs.vue')
    },
    {
      path: '/Services',
      name: 'services',
      component: () => import('@/pages/Services.vue')
    },
    {
      path: '/Process',
      name: 'process',
      component: () => import('@/pages/Process.vue')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('@/pages/Contact.vue')
    },
    {
      path: '/portfolio/all',
      name: 'portfolio',
      component: () => import('@/pages/portfolio/all.vue')
    }
  ]);
});
