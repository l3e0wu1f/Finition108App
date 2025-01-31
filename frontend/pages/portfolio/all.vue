<template>
  <div class="min-h-[calc(100vh-13rem)]">
    <h1 class="font-raleway text-4xl sm:text-6xl  text-center mt-20 mb-12 md:mt-32 md:mb-20 pt-8 uppercase">
      Portfolio
    </h1>
    <p class="md:text-lg font-light text-justify md:text-center w-[90%] md:w-[70%] mx-auto leading-relaxed pb-12">
            {{ locale == 'fr'
              ? (portfolio?.descriptionfr ? portfolio.descriptionfr : "Explorez nos projets de rénovation, qui illustrent notre engagement à transformer des espaces et à réaliser des visions. Chaque détail de ces rénovations a été méticuleusement planifié et exécuté avec une précision pour garantir non seulement la fonctionnalité mais aussi une esthétique exceptionnelle. Nous sommes fiers de pouvoir adapter nos services à une large gamme de besoins de rénovation. Notre objectif est toujours de dépasser les attentes en livrant des résultats impeccables qui allient confort, durabilité et style.")
              : (portfolio?.descriptionen ? portfolio.descriptionen : "Explore our renovation projects. They showcase our commitment to transforming spaces and realizing visions. Every detail of these renovations has been meticulously planned and executed with precision to ensure not only functionality but also outstanding aesthetics. We pride ourselves on being able to adapt our services to a wide range of renovation needs. Our goal is always to exceed expectations by delivering flawless results that combine comfort, durability, and style.")
            }}
    </p>
    <div v-if="!portfolios" class="flex w-full items-center justify-center h-[calc(100vh*0.4)]">
        <UIcon name="line-md:loading-twotone-loop" class="w-16 h-16 text-primarybis" />
    </div>
    <div v-if="portfolios" class="grid grid-cols-1 md:grid-cols-2 gap-10 m-10 md:gap-20 md:m-20">
      <div
        v-for="portfolio in portfolios"
        :key="portfolio.filepath"
        class="flex flex-col"
      >
        
        <nuxt-link :to="portfolio.filepath" class="text-2xl hover:opacity-70 self-center p-2 -mt-4 md:-mt-12">
          {{ portfolio.name }}
        </nuxt-link>
        <div class="aspect-square overflow-hidden relative group cursor-pointer" @click="navigateTo(portfolio.filepath)">
          <img
            v-if="portfolio.primary"
            :src="'http://localhost:3001'+portfolio.primary"
            :alt="portfolio.name"
            class="object-cover w-full h-full absolute"
          >
          <img
            v-if="portfolio.hover"
            :src="'http://localhost:3001'+portfolio.hover"
            :alt="portfolio.name"
            class="object-cover w-full h-full absolute opacity-0 hover:opacity-100"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '#imports'
const { locale } = useI18n()



const portfolios = ref(null)

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:3001/api/portfolio/all') // Adjust the endpoint as needed
        const data = await response.json()

        // Update the image URLs to use the CDN URL
        portfolios.value = data.portfolios.map(portfolio => {
            portfolio.imageUrl = `https://imagery.tor1.cdn.digitaloceanspaces.com/uploads/${portfolio.imageName}`;
            return portfolio;
        });
    }
    catch (error) {
        console.error('Error fetching portfolios:', error)
    }
})
// onMounted(async () => {
//     try {
//         const response = await fetch('http://localhost:3001/api/portfolio/all') // Adjust the endpoint as needed
//         const data = await response.json()
//         portfolios.value = data.portfolios
//     }
//     catch (error) {
//         console.error('Error fetching portfolios:', error)
//     }
// })

const pageTitle = 'Notre Portfolio'
const pageDescription = "Parcourez notre portfolio pour voir des exemples de notre savoir-faire et des divers projets que nous avons réalisés. Laissez-vous inspirer par les transformations que nous avons accompli dans des maisons et des entreprises."

useHead(() => ({
    title: pageTitle,
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: pageDescription
        }
    ]
}))
</script>
