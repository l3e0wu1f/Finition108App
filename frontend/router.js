// custom/router.js

export default defineNuxtPlugin(nuxtApp => {
  // Access the Nuxt router
  const router = useRouter();

  // Add custom routes
  router.addRoute({
    path: '/AboutUs',
    name: 'aboutus',
    component: () => import('@/pages/AboutUs.vue'),
  });

  router.addRoute({
    path: '/Services',
    name: 'services',
    component: () => import('@/pages/Services.vue'),
  });

  router.addRoute({
    path: '/Process',
    name: 'process',
    component: () => import('@/pages/Process.vue'),
  });

  router.addRoute({
    path: '/Contact',
    name: 'contact',
    component: () => import('@/pages/Contact.vue'),
  });

  router.addRoute({
    path: '/portfolio/all',
    name: 'portfolio',
    component: () => import('@/pages/portfolio/all.vue'),
  });

  // Optional: You can set a fallback route for undefined paths
  router.addRoute({
    path: '*',
    redirect: '/' // Redirect to homepage or a safe route
  });
});
