<template>
  <div class="min-h-[calc(100vh-13rem)]">
    <h1 class="font-raleway text-4xl sm:text-6xl  text-center mt-20 mb-12 md:mt-32 md:mb-20 pt-8 uppercase">
      {{ $t('process') }}
    </h1>
    <p
      class="md:text-lg font-light w-[90%] md:w-[70%] mx-auto text-center leading-relaxed z-50 pb-12"
    >
      {{ locale === 'fr'
        ? "Chez Finition 108, nous croyons en une approche transparente et collaborative de la construction. Notre processus est conçu pour garantir que chaque projet se déroule sans accroc, du début à la fin, en livrant des résultats qui dépassent vos attentes. Voici comment nous procédons :"
        : "At Finition 108, we believe in a transparent and collaborative approach to construction. Our process is designed to ensure that each project runs smoothly from start to finish, delivering results that exceed your expectations. Here’s how we do it:"
      }}
    </p>
    <div class="w-[80%] xl:w-[70%] mx-auto flex flex-col  my-10">
      <div class="flex flex-col md:flex-row gap-3 w-full py-10 md:py-16 border-b border-orange-950/10">
        <h2 class="text-lg md:w-2/5 uppercase">
          {{ locale === 'fr' ? "1. Consultation Initiale" : "1. Initial Consultation" }}
        </h2>
        <p class="md:text-lg mx-auto md:w-3/5 font-light text-justify md:leading-loose">
          {{ locale === 'fr' 
            ? "Nous commençons par une discussion détaillée pour comprendre votre vision, vos besoins et votre budget." 
            : "We start with a detailed discussion to understand your vision, needs, and budget." 
          }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-3 w-full py-10 md:py-16 border-b border-orange-950/10">
        <h2 class="text-lg md:w-2/5 uppercase">
          {{ locale === 'fr' ? "2. Évaluation du Site" : "2. Site Assessment" }}
        </h2>
        <p class="md:text-lg mx-auto md:w-3/5 font-light text-justify md:leading-loose">
          {{ locale === 'fr' 
            ? "Notre équipe effectue une évaluation approfondie de votre site pour identifier les défis et les opportunités pour votre projet." 
            : "Our team conducts a thorough evaluation of your site to identify any challenges and opportunities for your project." 
          }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-3 w-full py-10 md:py-16 border-b border-orange-950/10">
        <h2 class="text-lg md:w-2/5 uppercase">
          {{ locale === 'fr' ? "3. Conception et Planification" : "3. Design and Planning" }}
        </h2>
        <p class="md:text-lg mx-auto md:w-3/5 font-light text-justify md:leading-loose">
          {{ locale === 'fr' 
            ? "Nous créons un plan personnalisé comprenant des concepts de design, des délais et des estimations des coûts. Votre contribution est essentielle à cette étape pour garantir que le design final reflète votre style." 
            : "We create a custom plan that includes design concepts, timelines, and cost estimates. Your input is vital during this stage to ensure the final design reflects your style." 
          }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-3 w-full py-10 md:py-16 border-b border-orange-950/10">
        <h2 class="text-lg md:w-2/5 uppercase">
          {{ locale === 'fr' ? "4. Permis et Approbations" : "4. Permitting and Approvals" }}
        </h2>
        <p class="md:text-lg mx-auto md:w-3/5 font-light text-justify md:leading-loose">
          {{ locale === 'fr' 
            ? "Nous nous chargeons de tous les permis et approbations nécessaires, en veillant à la conformité avec les règlements locaux." 
            : "We handle all necessary permits and approvals, ensuring compliance with local regulations." 
          }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-3 w-full py-10 md:py-16 border-b border-orange-950/10">
        <h2 class="text-lg md:w-2/5 uppercase">
          {{ locale === 'fr' ? "5. Phase de Construction" : "5. Construction Phase" }}
        </h2>
        <p class="md:text-lg mx-auto md:w-3/5 font-light text-justify md:leading-loose">
          {{ locale === 'fr' 
            ? "Notre équipe qualifiée commence le travail, en vous tenant informé à chaque étape. Nous privilégions un travail de qualité et un progrès dans les délais." 
            : "Our skilled team begins work, keeping you informed at every step. We prioritize quality craftsmanship and timely progress." 
          }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-3 w-full py-10 md:py-16 border-b border-orange-950/10">
        <h2 class="text-lg md:w-2/5 uppercase">
          {{ locale === 'fr' ? "6. Mises à Jour Régulières" : "6. Regular Updates" }}
        </h2>
        <p class="md:text-lg mx-auto md:w-3/5 font-light text-justify md:leading-loose">
          {{ locale === 'fr' 
            ? "Tout au long du projet, nous fournissons des mises à jour régulières sur l'avancement et répondons à toutes vos questions ou préoccupations." 
            : "Throughout the project, we provide regular updates on progress and address any questions or concerns you may have." 
          }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-3 w-full py-10 md:py-16 border-b border-orange-950/10">
        <h2 class="text-lg md:w-2/5 uppercase">
          {{ locale === 'fr' ? "7. Visite Finale" : "7. Final Walkthrough" }}
        </h2>
        <p class="md:text-lg mx-auto md:w-3/5 font-light text-justify md:leading-loose">
          {{ locale === 'fr' 
            ? "Une fois la construction terminée, nous effectuons une visite finale avec vous pour nous assurer que tout répond à vos attentes." 
            : "Once construction is complete, we conduct a final walkthrough with you to ensure everything meets your satisfaction." 
          }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-3 w-full py-10 md:py-16">
        <h2 class="text-lg md:w-2/5 uppercase">
          {{ locale === 'fr' ? "8. Support Post-Complétion" : "8. Post-Completion Support" }}
        </h2>
        <p class="md:text-lg mx-auto md:w-3/5 font-light text-justify md:leading-loose">
          {{ locale === 'fr' 
            ? "Notre engagement ne se termine pas lorsque le projet est achevé. Nous offrons un support continu et un entretien pour garantir que votre projet résiste à l'épreuve du temps." 
            : "Our commitment doesn’t end when the project is finished. We offer ongoing support and maintenance to ensure your project stands the test of time." 
          }}
        </p>
      </div>

    </div>


</div>
</template>

<script setup>
import { useHead } from '#imports'
const { locale } = useI18n()

const pageTitle = 'Notre Processus'
const pageDescription = "Comprenez notre processus de rénovation centré sur le client qui garantit l'excellence et la satisfaction. De la consultation initiale aux dernières finitions, découvrez comment nous gérons votre projet avec précision et soin à chaque étape."

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