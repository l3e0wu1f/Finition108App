// plugins/router.js
import { defineNuxtPlugin } from '@nuxtjs/composition-api';

export default defineNuxtPlugin(({ app }) => {
  app.router.addRoutes([
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
