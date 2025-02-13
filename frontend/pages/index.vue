<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div>
    <div class="h-[300px] sm:h-[calc(100vh-5rem)] w-screen overflow-hidden z-0 relative">
      <div
        class="sm:bg-fixed bg-contain object-contain sm:bg-cover sm:object-cover sm:bg-center h-full w-full absolute"
        style="background-image: url('https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/backdrop.jpg'); background-repeat: no-repeat;"
      />
    </div>
    <div class="flex flex-col justify-center p-4 lg:p-14 z-5 absolute lg:h-[25rem] md:bottom-0 right-0">
      <h1
        class="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-secondary font-medium text-right p-1"
        style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);"
      >
        {{ locale === 'fr' ? "Finition 108 : Maîtriser l'art de la construction" :'Finition 108: Mastering the art of' }}
      </h1>
      <h1
        class="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-secondary font-medium text-right p-1"
        style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);"
      >
        {{ locale === 'fr' ? "depuis plus de 20 ans." :'construction for over 20 years.' }}
      </h1>

      <a
        href="/Contact"
        class="w-60 lg:w-80 h-16 flex justify-center items-center rounded-2xl text-lg font-light text-center bg-primarybis/60 hover:primarybisary/80 text-secondary self-end mt-10"
      >
        {{ locale === 'fr' ? 'Contactez-nous' : 'Contact us' }}
      </a>
    </div>
    <div class="bg-secondary z-10">
      <div class="lg:h-[calc(100vw/2.5)] flex flex-col lg:flex-row items-center relative overflow-hidden justify-between">
        <NuxtImg
          src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/about-us_home.jpg"
          class="h-screen max-w-none lg:w-screen absolute opacity-20"
          fit="outside"
          loading="lazy"
        />

        <div class="lg:h-[calc((100vw/2.5)-8rem)] w-1/2 overflow-hidden hidden lg:block z-10">
          <NuxtImg
            src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/about-us_home.jpg"
            class="lg:h-[calc((100vw/2.5)-8rem)] max-w-none hidden lg:block ml-16"
            fit="outside"
            loading="lazy"
          />
        </div>
        <div class="w-full p-10 overflow-hidden z-10 lg:hidden block">
          <NuxtImg
            src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/about-us_home.jpg"
            class="lg:hidden block"
            fit="outside"
            loading="lazy"
          />
        </div>

        <div class="lg:w-2/5 flex flex-col justify-end p-4 lg:p-14 z-10 gap-10">
          <p class="lg:text-xl text-center lg:text-end">
            {{ locale === 'fr' 
              ? "Nous sommes une équipe de professionnels engagés à transformer vos rêves de construction en réalité. Découvrez nos valeurs, notre expertise et comment nous livrons constamment des résultats de haute qualité sur chaque projet."
              : "We are a dedicated team of professionals committed to turning your construction dreams into reality. Learn more about our values, expertise, and how we consistently deliver high-quality results on every project."
            }}
          </p>
          <a
            href="/AboutUs"
            class="primary-button self-center lg:self-end"
          >
            {{ locale === 'fr' ? 'Plus sur nous' : 'More about us' }}
          </a>
        </div>
      </div>
      <div class="lg:h-[calc(100vw/2.5)] flex flex-col lg:flex-row items-center relative overflow-hidden justify-between">
        <NuxtImg
          src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/services_home.jpg"
          class="h-screen max-w-none lg:w-screen absolute  opacity-20"
          fit="outside"
          loading="lazy"
        />
        <div class="w-full p-10 overflow-hidden z-10 lg:hidden block">
          <NuxtImg
            src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/services_home.jpg"
            class="lg:hidden block"
            fit="outside"
            loading="lazy"
          />
        </div>

        <div class="lg:w-2/5 flex flex-col  p-4 lg:p-14 z-10 gap-10">
          <p class="lg:text-xl text-center lg:text-start">
            {{ locale === 'fr' 
              ? "Vous souhaitez donner vie à votre projet de construction ? Avec notre large éventail de services, des rénovations de maisons aux conceptions sur mesure, nous sommes là pour vous aider à créer l'espace parfait avec un savoir-faire expert et des solutions personnalisées."
              : "Looking to bring your construction project to life? With our wide range of services, from home renovations to custom designs, we are here to help you create the perfect space with expert craftsmanship and personalized solutions."
            }}
          </p>
          <a
            href="/Services"
            class="primary-button self-center lg:self-start"
          >
            {{ locale === 'fr' ? 'En savoir plus sur nos services' : 'See more about services' }}
          </a>
        </div>

        <div class="lg:h-[calc((100vw/2.5)-8rem)] w-1/2 overflow-hidden hidden lg:block z-10 mr-16">
          <NuxtImg
            src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/services_home.jpg"
            class="h-[calc((100vw/2.5)-8rem)] max-w-none"
            fit="outside"
            loading="lazy"
          />
        </div>
      </div>
      <div class="lg:h-[calc(100vw/2.5)] flex flex-col lg:flex-row items-center relative overflow-hidden justify-between">
        <NuxtImg
          src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/front_house.jpg"
          class="h-screen max-w-none lg:w-screen absolute opacity-20"
          fit="outside"
          loading="lazy"
        />

        <div class="lg:h-[calc((100vw/2.5)-8rem)] w-1/2 overflow-hidden hidden lg:block z-10 ml-16">
          <NuxtImg
            src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/front_house.jpg"
            class="h-[calc((100vw/2.5)-8rem)] max-w-none"
            fit="outside"
            loading="lazy"
          />
        </div>
        <div class=" w-full p-10 overflow-hidden z-10 lg:hidden block">
          <NuxtImg
            src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/front_house.jpg"
            class="lg:hidden block"
            fit="outside"
            loading="lazy"
          />
        </div>

        <div class="lg:w-2/5 flex flex-col justify-end p-4 lg:p-14 z-10 gap-10">
          <p class="lg:text-xl text-center lg:text-end">
            {{ locale === 'fr' 
              ? "Jetez un œil à notre portfolio pour voir comment nous avons aidé nos clients à transformer leurs maisons et entreprises. Des rénovations résidentielles uniques aux espaces commerciaux époustouflants, notre travail reflète notre passion pour la qualité et l'attention aux détails."
              : "Take a look at our portfolio to see how we've helped clients transform their homes and businesses. From unique residential renovations to stunning commercial spaces, our work reflects our passion for quality and attention to detail."
            }}
          </p>
          <a
            href="portfolio/all"
            class="primary-button self-center lg:self-end"
          >
            {{ locale === 'fr' ? 'Plus de projets' : 'See more projects' }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLocalePath , useHead } from '#imports'

const localePath = useLocalePath()
const { locale } = useI18n()

const pageTitle = "Bienvenue chez Finition108"
const pageDescription = "Découvrez des solutions de rénovation de premier choix avec Finition108. Explorez nos services, consultez notre portfolio et découvrez comment nous pouvons transformer votre espace en la maison ou le bureau de vos rêves. Commencez votre projet de rénovation avec nous dès aujourd'hui !!"

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
