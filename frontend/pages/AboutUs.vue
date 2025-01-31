<template>
  <div class="min-h-[calc(100vh-13rem)]">
    <div
      class="bg-fixed bg-center bg-cover h-full pt-10 md:pt-28 relative pb-10 md:pb-16"
      style="background-image: url('https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/side_scaffolding.jpg');"
    >
      <div class="z-10">
        <h1 
          class="font-raleway text-4xl md:text-6xl text-secondary text-center pb-16 md:pb-44 pt-16 uppercase"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);"
        >
         {{ $t('aboutus') }} 
        </h1>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <div class="py-12 flex flex-col gap-6 w-[90%] md:w-[70%]">
        <p class="md:text-lg font-light text-justify  md:leading-relaxed">
          {{ locale === 'fr' 
            ? "Fort de plus de 20 ans d'expérience dans la construction de maisons personnalisées dans une grande variété de climats, Finition 108 a su s'adapter et exceller, que ce soit dans les conditions extrêmes des déserts arides du nord du Nouveau-Mexique et du Colorado, où la chaleur intense et les conditions difficiles sont la norme, ou dans les zones marécageuses du sud de la Louisiane, connues pour leurs terrains humides et leurs conditions de travail particulières. Nous avons également une vaste expérience dans les climats froids et rigoureux du nord-est, où la neige et les températures glaciales imposent des défis uniques." 
            : "With over 20 years of experience in building custom homes across a wide range of climates, Finition 108 has proven its ability to adapt and excel in various conditions. From the scorching heat and harsh conditions of the high desert in Northern New Mexico and Colorado, to the marshy lowlands of southern Louisiana, known for their unique challenges of humidity and terrain, we have successfully handled diverse environments." 
          }}
        </p>
        <p class="md:text-lg font-light text-justify  md:leading-relaxed">
          {{ locale === 'fr' 
            ? "Finition 108 se distingue particulièrement par sa capacité à prendre des mesures supplémentaires pour garantir que chaque structure puisse résister à tous les types de climats. Nous veillons à ce que les maisons que nous construisons puissent supporter les conditions climatiques les plus extrêmes pendant de nombreuses années, offrant ainsi à nos clients une sécurité et une tranquillité d'esprit inégalées." 
            : "Additionally, our experience extends to the bitter cold of the Northeast, where extreme snow and freezing temperatures require specialized construction methods. Finition 108 prides itself on going the extra mile to ensure that every structure we build can withstand the toughest climates. We take meticulous care to ensure that the homes we construct are built to endure for many years, providing our clients with unmatched peace of mind and security." 
          }}
        </p>
        <p class="md:text-lg font-light text-justify md:leading-relaxed ">
          {{ locale === 'fr' 
            ? "Nous sommes une entreprise clé en main, spécialisée dans la gestion complète de vos projets de construction. Dès le début du projet, nous nous engageons à assurer une prise en charge totale, en veillant à ce que l'équipe qui commence les travaux soit la même qui les mène à bien, du début à la fin. Cela inclut chaque étape du processus, depuis la démolition initiale et la préparation de la fondation, jusqu'aux dernières touches de finition, telles que l'installation des armoires et des détails de menuiserie. Notre approche intégrée et cohérente garantit que votre projet se déroule de manière fluide, sans les interruptions ou complications qui peuvent parfois surgir lorsque plusieurs équipes sont impliquées." 
            : "We are a turnkey company that provides comprehensive management for your construction projects. From the outset, we ensure that the same team that begins the project will see it through to completion, handling all phases of the work without interruptions. This includes everything from the initial demolition and foundation work to the final touches, such as the installation of cabinets and trim details. Our integrated approach ensures that your project progresses smoothly, eliminating the potential disruptions or complications that can arise when multiple teams are involved." 
          }}
        </p>
      </div>
  
  
      <NuxtImg
        src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/front_renov.jpg"
        class="w-full md:w-[50%] aspect-video"
      />
      
      <div class="flex flex-col md:flex-row w-[90%] md:w-[70%] gap-16">
        <p class="md:text-lg font-light text-justify md:leading-relaxed py-12 ">
          {{ locale === 'fr' 
            ? "En travaillant en étroite collaboration avec un groupe restreint d'architectes, d'ingénieurs et de sous-traitants spécialisés en mécanique, nous sommes en mesure de proposer des solutions innovantes et de gérer chaque aspect de votre projet de manière efficace. Cette collaboration rapprochée nous permet de garantir un calendrier parfaitement respecté, sans retards ni imprévus, ce qui est essentiel pour la réussite de tout projet de construction. Nous sommes fiers d’être entièrement licenciés, garantis et assurés, ce qui nous permet de prendre en charge des projets de toutes tailles et de toutes complexités techniques. Notre expertise et notre expérience nous permettent d’aborder des défis de plus en plus complexes, sans aucune limite dans le type de projet que nous acceptons. Nous desservons non seulement la grande région de Montréal, mais également les Cantons-de-l'Est, offrant ainsi à nos clients un service de proximité et une réactivité optimale." 
            : "By working closely with a select group of architects, engineers, and mechanical subcontractors, we are able to deliver innovative solutions and manage every aspect of your project efficiently. This close-knit collaboration allows us to ensure a seamless timeline, free from delays or unexpected hurdles, which is crucial for the success of any construction project. We take great pride in being fully licensed, bonded, and insured, enabling us to handle projects of all sizes and complexities. Our expertise and experience empower us to tackle increasingly technical challenges, with no limits on the type of projects we are willing to take on. We serve not only the greater Montreal area but also the Eastern Townships, providing our clients with localized service and optimal responsiveness." 
          }}
        </p>
      </div>

      <NuxtImg
        src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/20230908_101911.jpg"
        class="w-full md:w-[50%]"
      />
      <div class="flex flex-col md:flex-row md:w-[70%]">
        <div class="lg:w-1/2">
          <div class="flex flex-col gap-2 items-center justify-center w-full h-60 md:h-96 px-4 md:text-lg font-light">
            <p class="text-center">
              {{ locale === 'en' ? "Got questions or a project in mind?" : "Vous avez des questions ou un projet en tête ?" }}
            </p>
            <p class="text-center">
              {{ locale === 'en' ? "Don't hesitate to get in touch with us!" : "N'hésitez pas à nous contacter !" }}
            </p>

            <nuxt-link
              :to="localePath('contact')"
              class="primary-button mt-6"
            >
              {{ locale === 'en' ? 'Contact us' : 'Contactez-nous' }}
            </nuxt-link>
          </div>
        </div>
        <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
        <div class="lg:w-1/2">
          <div class="flex flex-col gap-2 items-center justify-center w-full h-60 md:h-96 px-4 md:text-lg font-light">
            <p class="text-center">
              {{ locale === 'en' ? 'See for yourself what we can achieve. ' : "Voyez par vous-même ce que nous pouvons réaliser." }}
            </p>

            <p class="text-center">
              {{ locale === 'en' ? 'Explore our portfolio!' : "Découvrez notre portfolio !" }}
            </p>

            <nuxt-link
              :to="localePath('portfolio')"
              class="primary-button mt-6"
            >
              {{ locale === 'fr' ? 'Plus de projets' : 'See more projects' }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useLocalePath , useHead } from '#imports'

const localePath = useLocalePath()
const { locale } = useI18n()


const pageTitle = 'En savoir plus sur Finition108'
const pageDescription = "En savoir plus sur Finition108, nos valeurs et notre engagement à fournir des services de rénovation exceptionnels. Rencontrez notre équipe d'experts passionnés par la réalisation de votre vision."

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
