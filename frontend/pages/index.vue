<template>
    <div>
        <div class="h-[calc(100vh-5rem)] overflow-hidden z-0 relative ">
            <NuxtImg 
                src="/img/backdrop.jpg"
                class='h-screen max-w-none absolute opacity-70'
                fit="outside"
            />
            <div class="h-[calc(100vh-5rem)] w-screen bg-primary"></div>

            <div class="flex flex-col justify-center p-14 z-5 absolute h-[25rem] m-auto right-0 top-0 bottom-0">
                <h1 class="text-5xl text- text-secondary text-right p-1" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);">{{ locale === 'fr' ? "Finition 108 : 20 ans de savoir-faire," :'Finition 108: 20 years of hands-on expertise,' }}</h1>
                <h1 class="text-5xl text- text-secondary text-right p-1" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);">{{ locale === 'fr' ? "construisant tout à partir de zéro." :'building everything from scratch.' }}</h1>
                <button class="w-80 h-16 rounded-2xl text-xl font-light bg-primary/60 hover:bg-primary/80 text-secondary self-end mt-10">{{ locale === 'fr' ? 'Contactez-nous' : 'Contact us' }}</button>
            </div>
        </div>
        <div class="bg-secondary z-10">
            <div class="h-[calc(100vw/2.2)] flex items-center relative overflow-hidden justify-between">
                <NuxtImg 
                        src="/img/home_woman.jpg"
                        class='w-screen absolute opacity-20'
                        fit="outside"
                        loading="lazy"
                />

                
                <div class='h-[calc((100vw/2.2)-8rem)] w-1/2 overflow-hidden z-10 '>
                    <NuxtImg 
                        src="/img/home_woman.jpg"
                        class='h-[calc((100vw/2.2)-8rem)] max-w-none'
                        fit="outside"
                        loading="lazy"
                    />
                </div>

                <div class="w-[30rem] flex flex-col justify-end p-14 z-10 gap-10">
                    <p class="text-primary text-xl text-end">Who we are, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla turpis vitae ipsum lobortis fringilla. </p>
                    <button class="w-80 h-16 rounded-2xl text-xl font-light bg-primary/80 hover:bg-primary text-secondary self-end drop-shadow-lg">{{ locale === 'fr' ? 'Plus sur nous' : 'More about us' }}</button>
                </div>
            </div>
            <div class="h-[calc(100vw/2.2)] flex items-center relative overflow-hidden justify-between">
                <NuxtImg 
                        src="/img/home_paint.jpg"
                        class='w-screen absolute opacity-20'
                        fit="outside"
                        loading="lazy"
                />

            
                <div class="w-[30rem] flex flex-col  p-14 z-10 gap-10">
                    <p class="text-primary text-xl ">Who we are, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla turpis vitae ipsum lobortis fringilla. </p>
                    <button class="w-80 h-16 rounded-2xl text-xl font-light bg-primary/80 hover:bg-primary text-secondary drop-shadow-lg">{{ locale === 'fr' ? 'En savoir plus sur les services' : 'See more about services' }}</button>
                </div>

                <div class='h-[calc((100vw/2.2)-8rem)] w-1/2 overflow-hidden z-10'>
                    <NuxtImg 
                        src="/img/home_paint.jpg"
                        class='h-[calc((100vw/2.2)-8rem)] max-w-none'
                        fit="outside"
                        loading="lazy"
                    />
                </div>
            </div>
            <div class="h-[calc(100vw/2.2)] flex items-center relative overflow-hidden justify-between">
                <NuxtImg 
                        src="/img/home_house.jpg"
                        class='w-screen absolute opacity-20'
                        fit="outside"
                        loading="lazy"
                />

                
                <div class='h-[calc((100vw/2.2)-8rem)] w-1/2 overflow-hidden z-10 '>
                    <NuxtImg 
                        src="/img/home_house.jpg"
                        class='h-[calc((100vw/2.2)-8rem)] max-w-none'
                        fit="outside"
                        loading="lazy"
                    />
                </div>

                <div class="w-[30rem] flex flex-col justify-end p-14 z-10 gap-10">
                    <p class="text-primary text-xl text-end">Who we are, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla turpis vitae ipsum lobortis fringilla. </p>
                    <button class="w-80 h-16 rounded-2xl text-xl font-light bg-primary/80 hover:bg-primary text-secondary self-end drop-shadow-lg">{{ locale === 'fr' ? 'Plus de projets' : 'See more projects' }}</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>