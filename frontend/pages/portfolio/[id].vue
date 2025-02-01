<template>
  <div class="min-h-[calc(100vh-13rem)]">
    <h1 class="font-raleway text-3xl md:text-5xl  text-center my-4 md:my-6 pt-20 uppercase">
      {{ id }}
    </h1>
    <div v-if="portfolio" class="flex flex-col md:flex-row justify-center gap-4 md:gap-2 pb-10">
      <div>
        <h3 v-if="portfolio?.credit" class="text-xl font-light text-center">
          {{ locale === 'fr' ? 'Crédit' : 'Credit' }} : {{ portfolio.credit }} 
        </h3>
        <h3 v-if="portfolio?.credit_architect" class="text-xl font-light text-center">
          {{ locale === 'fr' ? 'Crédit Architecte' : 'Credit Architect' }} : {{ portfolio.credit_architect }}
        </h3>
      </div>
      <span class="hidden md:block">●</span>
      <div>
        <h3 v-if="portfolio?.city" class="text-xl font-light text-center">
          {{ locale === 'fr' ? 'Lieu' : 'Location' }} : {{ portfolio.city }}
        </h3>
      </div>
    </div>
    <div v-if="!images" class="flex w-full items-center justify-center h-[calc(100vh*0.7)]">
      <UIcon name="line-md:loading-twotone-loop" class="w-16 h-16 text-primarybis" />
    </div>
    <div v-if="images" class="w-screen flex items-center justify-center my-4 md:my-10">
      <UCarousel 
        v-slot="{ item }" 
        :items="images" 
        :ui="{ item: 'basis-full' }" 
        class="overflow-hidden md:h-[calc(100vh*0.7)] md:w-[calc(100vw*0.7)]" 
        arrows
      >
        <NuxtImg :src="item" class="object-contain max-w-full max-h-[calc(100vh*0.7)] aspect-auto mx-auto" draggable="false" loading="lazy" />
      </UCarousel>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead, useRoute } from '#imports'
const { locale } = useI18n()

const route = useRoute()
const portfolio = ref(null)
const id = route.params.id
const images = ref(null)

onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:3001/portfolio/${id}`) // Adjust the endpoint as needed
    const data = await response.json()
    portfolio.value = data.portfolio
    images.value = data.images.map(image => `https://imagery.tor1.cdn.digitaloceanspaces.com/uploads/${image}`);
  } catch (error) {
    console.error('Error fetching portfolios:', error)
  }
})

const pageTitle = 'Projet ' + route.params.id
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
