<template>
  <div class="min-h-[calc(100vh-13rem)]">
    <h1 class="font-raleway text-4xl sm:text-6xl  text-center mt-20 mb-12 md:mt-32 md:mb-20 pt-8 uppercase">
      Portfolio
    </h1>
    <p class="md:text-lg font-light text-justify md:text-center w-[90%] md:w-[70%] mx-auto leading-relaxed pb-12">
      {{ locale == 'fr' 
        ? portfolio.descriptionfr || "Explorez nos projets de rénovation..."
        : portfolio.descriptionen || "Explore our renovation projects..."
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
            :src="portfolio.primary"
            :alt="portfolio.name"
            class="object-cover w-full h-full absolute"
          >
          <img
            v-if="portfolio.hover"
            :src="portfolio.hover"
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
const portfolio = ref({ descriptionfr: '', descriptionen: '' }) // Initialize the portfolio object

onMounted(async () => {
  try {
    const response = await fetch(`/api/portfolio/all`) // Use environment variable for the base URL
    const data = await response.json()
    // console.log(data);
    portfolios.value = data.portfolios
    
    if (data.portfolios.length > 0) {
      portfolio.value = data.portfolios[0]
    }
  }
  catch (error) {
    console.error('Error fetching portfolios:', error)
  }
})



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
