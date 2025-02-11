// custom/router.js

export default defineNuxtPlugin(nuxtApp => {
  // Access the Nuxt router
  const router = useRouter();

  // Optional: You can set a fallback route for undefined paths
  router.addRoute({
    path: '*',
    redirect: '/' // Redirect to homepage or a safe route
  });
});
