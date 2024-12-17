<template>
  <div class="min-h-[calc(100vh-13rem)]">
    <h1 class="font-raleway text-4xl sm:text-6xl  text-center mt-20 mb-12 md:mt-32 md:mb-20 pt-8 uppercase">
      Portfolios
    </h1>
    <p
      class="text-lg font-light w-[90%] md:w-[50%] mx-auto text-center leading-relaxed z-50 pb-12"
    >
      {{ locale === 'fr'
        ? "Explorez nos projets de construction et de rénovation, où nous allions expertise technique et savoir-faire pour transformer vos espaces avec qualité et précision."
        : "Explore our construction and renovation projects, where we combine technical expertise and craftsmanship to transform your spaces with quality and precision."
      }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 m-10 md:gap-20 md:m-20">
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
const { locale } = useI18n()



const portfolios = ref([])


onMounted(async () => {
    try {
        const response = await fetch('http://localhost:3001/api/portfolio/all') // Adjust the endpoint as needed
        const data = await response.json()
        portfolios.value = data.portfolios
    }
    catch (error) {
        console.error('Error fetching portfolios:', error)
    }
})
</script>
