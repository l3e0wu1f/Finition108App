<template>
    <div class="min-h-[calc(100vh-13rem)]">
        <h1 class="font-raleway text-3xl md:text-5xl  text-center my-20 pt-8 uppercase">
            {{ id }}
        </h1>
        <p class="w-[70%] mx-auto text-center pb-10">
            {{ locale == 'fr'
              ? "Vous avez un projet commercial ou résidentiel à réaliser ? Vous souhaitez découvrir les services proposés par Finition.108 ? Nous serions heureux d'échanger avec vous et de vous accompagner dans la concrétisation de vos idées."
              : "Do you have a commercial or residential project you'd like to discuss? Want to learn more about the services offered by Finition.108? We would be happy to connect with you and help bring your ideas to life."
            }}
        </p>
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
const route = useRoute()
const { locale } = useI18n()
const portfolio = ref(null)
const id = route.params.id

const images = ref(null)



onMounted(async () => {
    try {
        const response = await fetch(`http://localhost:3001/api/portfolio/${id}`) // Adjust the endpoint as needed
        const data = await response.json()
        portfolio.value = data.portfolio
        images.value = data.images.map(image => "http://localhost:3001" + image);
        console.log(images.value)
    }
    catch (error) {
        console.error('Error fetching portfolios:', error)
    }
})

</script>
