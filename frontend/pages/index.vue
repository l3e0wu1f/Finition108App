<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div>
    <div class="h-[calc(100vh-5rem)] w-screen overflow-hidden z-0 relative">
      <div
        class="bg-fixed bg-cover bg-center h-full w-full absolute"
        style="background-image: url('img/backdrop.jpg');"
      />
      <div class="flex flex-col justify-center p-4 md:p-14 z-5 absolute lg:h-[25rem] bottom-0 right-0">
        <h1
          class="text-2xl md:text-3xl lg:text-5xl text-secondary font-medium text-right p-1"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);"
        >
          {{ locale === 'fr' ? "Finition 108 : Maîtriser l'art de la construction" :'Finition 108: Mastering the art of' }}
        </h1>
        <h1
          class="text-2xl md:text-3xl lg:text-5xl text-secondary font-medium text-right p-1"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);"
        >
          {{ locale === 'fr' ? "depuis plus de 20 ans." :'construction for over 20 years.' }}
        </h1>

        <nuxt-link
          :to="localePath('contact')"
          class="w-60 lg:w-80 h-16 flex justify-center items-center rounded-2xl text-lg font-light text-center bg-primarybis/60 hover:primarybisary/80 text-secondary self-end mt-10"
        >
          {{ locale === 'fr' ? 'Contactez-nous' : 'Contact us' }}
        </nuxt-link>
      </div>
    </div>
    <div class="bg-secondary z-10">
      <div class="md:h-[calc(100vw/2.5)] flex flex-col md:flex-row items-center relative overflow-hidden justify-between">
        <NuxtImg
          src="/img/home_woman.jpg"
          class="h-screen max-w-none md:w-screen absolute opacity-20"
          fit="outside"
          loading="lazy"
        />

        <div class="md:h-[calc((100vw/2.5)-8rem)] w-1/2 overflow-hidden hidden md:block z-10">
          <NuxtImg
            src="/img/home_woman.jpg"
            class="md:h-[calc((100vw/2.5)-8rem)] max-w-none hidden md:block ml-16"
            fit="outside"
            loading="lazy"
          />
        </div>
        <div class="w-full p-10 overflow-hidden z-10 md:hidden block">
          <NuxtImg
            src="/img/home_woman.jpg"
            class="md:hidden block"
            fit="outside"
            loading="lazy"
          />
        </div>

        <div class="md:w-2/5 flex flex-col justify-end p-4 md:p-14 z-10 gap-10">
          <p class="lg:text-xl text-center md:text-end">
            {{ locale === 'fr' 
              ? "Nous sommes une équipe de professionnels engagés à transformer vos rêves de construction en réalité. Découvrez nos valeurs, notre expertise et comment nous livrons constamment des résultats de haute qualité sur chaque projet."
              : "We are a dedicated team of professionals committed to turning your construction dreams into reality. Learn more about our values, expertise, and how we consistently deliver high-quality results on every project."
            }}
          </p>
          <nuxt-link
            :to="localePath('aboutus')"
            class="primary-button self-center md:self-end"
          >
            {{ locale === 'fr' ? 'Plus sur nous' : 'More about us' }}
          </nuxt-link>
        </div>
      </div>
      <div class="md:h-[calc(100vw/2.5)] flex flex-col md:flex-row items-center relative overflow-hidden justify-between">
        <NuxtImg
          src="/img/home_paint.jpg"
          class="h-screen max-w-none md:w-screen absolute  opacity-20"
          fit="outside"
          loading="lazy"
        />
        <div class="w-full p-10 overflow-hidden z-10 md:hidden block">
          <NuxtImg
            src="/img/home_paint.jpg"
            class="md:hidden block"
            fit="outside"
            loading="lazy"
          />
        </div>

        <div class="md:w-2/5 flex flex-col  p-4 md:p-14 z-10 gap-10">
          <p class="lg:text-xl text-center md:text-start">
            {{ locale === 'fr' 
              ? "Vous souhaitez donner vie à votre projet de construction ? Avec notre large éventail de services, des rénovations de maisons aux conceptions sur mesure, nous sommes là pour vous aider à créer l'espace parfait avec un savoir-faire expert et des solutions personnalisées."
              : "Looking to bring your construction project to life? With our wide range of services, from home renovations to custom designs, we are here to help you create the perfect space with expert craftsmanship and personalized solutions."
            }}
          </p>
          <nuxt-link
            :to="localePath('services')"
            class="primary-button self-center md:self-start"
          >
            {{ locale === 'fr' ? 'En savoir plus sur nos services' : 'See more about services' }}
          </nuxt-link>
        </div>

        <div class="md:h-[calc((100vw/2.5)-8rem)] w-1/2 overflow-hidden hidden md:block z-10 mr-16">
          <NuxtImg
            src="/img/home_paint.jpg"
            class="h-[calc((100vw/2.5)-8rem)] max-w-none"
            fit="outside"
            loading="lazy"
          />
        </div>
      </div>
      <div class="md:h-[calc(100vw/2.5)] flex flex-col md:flex-row items-center relative overflow-hidden justify-between">
        <NuxtImg
          src="/img/home_house.jpg"
          class="h-screen max-w-none md:w-screen absolute opacity-20"
          fit="outside"
          loading="lazy"
        />

        <div class="md:h-[calc((100vw/2.5)-8rem)] w-1/2 overflow-hidden hidden md:block z-10 ml-16">
          <NuxtImg
            src="/img/home_house.jpg"
            class="h-[calc((100vw/2.5)-8rem)] max-w-none"
            fit="outside"
            loading="lazy"
          />
        </div>
        <div class=" w-full p-10 overflow-hidden z-10 md:hidden block">
          <NuxtImg
            src="/img/home_house.jpg"
            class="md:hidden block"
            fit="outside"
            loading="lazy"
          />
        </div>

        <div class="md:w-2/5 flex flex-col justify-end p-4 md:p-14 z-10 gap-10">
          <p class="lg:text-xl text-center md:text-end">
            {{ locale === 'fr' 
              ? "Jetez un œil à notre portfolio pour voir comment nous avons aidé nos clients à transformer leurs maisons et entreprises. Des rénovations résidentielles uniques aux espaces commerciaux époustouflants, notre travail reflète notre passion pour la qualité et l'attention aux détails."
              : "Take a look at our portfolio to see how we've helped clients transform their homes and businesses. From unique residential renovations to stunning commercial spaces, our work reflects our passion for quality and attention to detail."
            }}
          </p>
          <nuxt-link
            :to="localePath('portfolio')"
            class="primary-button self-center md:self-end"
          >
            {{ locale === 'fr' ? 'Plus de projets' : 'See more projects' }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
const { locale } = useI18n()
</script>
