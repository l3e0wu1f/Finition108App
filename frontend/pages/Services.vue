<template>
  <div class="w-screen min-h-screen">
    <div
      class="bg-fixed bg-center bg-cover h-full pt-10 md:pt-28 relative"
      style="background-image: url('https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/paint_brush.jpg');"
    >
      <div class="z-10">
        <h1 
          class="font-raleway text-4xl md:text-6xl text-secondary text-center pb-16 md:pb-36 pt-8 uppercase"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);"
        >
          Services
        </h1>
        <p
          class="text-secondary md:text-lg font-light w-[90%] md:w-[75%] lg:w-[50%] mx-auto text-center md:leading-relaxed z-50"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);"
        >
          {{ locale === 'en'
            ? "At Finition108, we take pride in handling every aspect of your construction project ourselves. With over 20 years of experience, our team manages everything from start to finish, ensuring quality and consistency every step of the way."
            : "Chez Finition108, nous sommes fiers de gérer chaque aspect de votre projet de construction nous-mêmes. Forts de plus de 20 ans d'expérience, nous prenons tout en charge, de A à Z, garantissant ainsi qualité et cohérence à chaque étape."
          }}
        </p>
        <p
          class="text-white font-light md:text-lg w-[90%] md:w-[75%] lg:w-[50%]  mx-auto text-center md:leading-relaxed mt-2"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);"
        >
          {{ locale === 'en'
            ? "Whether it's building from scratch or handling complex tasks, you can trust us to deliver exceptional results, done entirely by our skilled team."
            : "Que ce soit pour construire de zéro ou réaliser des tâches complexes, vous pouvez compter sur nous pour livrer des résultats exceptionnels, entièrement réalisés par notre équipe qualifiée."
          }}
        </p>
        <div class="flex  justify-center items-center mx-4 gap-4 md:gap-[calc(100vw*0.1)] py-10 md:py-20">
          <nuxt-link
            :to="localePath('aboutus')"
            class="primary-button w-40"
            href="/AboutUs"
          >
            {{ locale === 'fr' ? 'Plus sur nous' : 'More about us' }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('contact')"
            class="primary-button w-40"
            href="/Contact"
          >
            {{ locale === 'fr' ? 'Nous contacter' : 'Contact us' }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
    
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Construction résidentielle"
            : "Residential Construction"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('residential_construction')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Construction résidentielle"
              : "Residential Construction"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.residential_construction" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.residential_construction" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.residential_construction? 'block' : 'hidden md:block'" class="w-[90%] f mt-10 md:mt-16 lg:mt-20 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nous offrons une gamme complète de services de construction résidentielle, y compris des rénovations complètes de maisons, la conception de maisons sur mesure et la construction générale depuis la fondation. Que vous construisiez votre maison de rêve depuis zéro ou que vous ajoutiez une extension à votre espace existant, nous nous spécialisons dans la création de maisons adaptées à vos besoins et préférences. Notre équipe d'experts veille à ce que chaque projet soit réalisé selon les normes les plus strictes de qualité et de savoir-faire."
          : "We offer a comprehensive range of residential construction services, including full home renovations, custom home design, and general construction from the foundation up. Whether you're building your dream home from the ground up or adding an extension to your existing space, we specialize in creating homes tailored to your needs and preferences. Our expert team ensures that each project is completed to the highest standards of quality and craftsmanship."
        }}
      </p>

      <p :class="isParagraphVisible.residential_construction? 'block' : 'hidden md:block'" class="w-[90%] font mt-3 md:mt-5 lg:mt-7 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nous nous spécialisons dans les rénovations et les remodelages de maisons, y compris la rénovation de cuisines, la rénovation de salles de bains, l'aménagement de sous-sols et les rénovations de maisons complètes. Notre objectif est de vous aider à transformer vos espaces de vie pour mieux correspondre à votre mode de vie. Que vous mettiez à jour une seule pièce ou que vous entrepreniez une rénovation complète de votre maison, nous travaillons avec vous pour donner vie à votre vision tout en garantissant qualité et attention aux détails."
          : "We specialize in home renovations and remodeling, including kitchen remodeling, bathroom renovations, basement finishing, and whole-house renovations. Our goal is to help you transform your living spaces to better suit your lifestyle. Whether you’re updating a single room or undertaking a complete home renovation, we work with you to bring your vision to life while ensuring quality and attention to detail."
        }}
      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
    
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Construction commerciale"
            : "Commercial Construction"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('commercial_construction')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Construction commerciale"
              : "Commercial Construction"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.commercial_construction" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.commercial_construction" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.commercial_construction? 'block' : 'hidden md:block'" class="w-[90%] fo mt-10 md:mt-16 lg:mt-20 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nos services de construction commerciale couvrent les rénovations de bureaux, les espaces commerciaux, les restaurants et autres petites entreprises. Nous travaillons en étroite collaboration avec les propriétaires d'entreprises pour concevoir et construire des espaces fonctionnels et efficaces qui répondent aux besoins de leurs opérations commerciales. Que vous souhaitiez créer un espace de bureau moderne ou un magasin de détail, notre équipe possède l'expérience et l'expertise pour concrétiser votre vision."
          : "Our commercial construction services cover interior office renovations, retail spaces, restaurants, and other small businesses. We work closely with business owners to design and build functional, efficient spaces that meet the demands of your business operations. Whether you're looking to create a modern office space or a retail store facility, our team has the experience and expertise to bring your vision to life."
        }}
      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
    
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Services de toiture"
            : "Roofing Services"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('roofing_services')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Services de toiture"
              : "Roofing Services"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.roofing_services" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.roofing_services" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.roofing_services? 'block' : 'hidden md:block'" class="w-[90%] font-ligh mt-10 md:mt-16 lg:mt-20 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nos services de toiture incluent l'installation et le remplacement de toitures, ainsi que la réparation et l'entretien des toitures. Nous offrons des solutions de toiture complètes qui garantissent la sécurité et la durabilité de votre maison ou de votre entreprise. Des réparations mineures aux remplacements complets de toitures, notre équipe veille à ce que votre toiture soit conçue pour résister aux intempéries. Nous proposons également des services d'installation et de réparation de gouttières pour protéger votre propriété contre les dégâts des eaux."
          : "Our roofing services include roof installation and replacement, as well as roof repair and maintenance. We provide comprehensive roofing solutions that ensure the safety and durability of your home or business. From minor repairs to full roof replacements, our team ensures your roof is built to withstand the elements. We also offer gutter installation and repair services to protect your property from water damage."
        }}      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
    
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Installation de revêtements de sol"
            : "Flooring Installation"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('flooring_installation')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Installation de revêtements de sol"
              : "Flooring Installation"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.flooring_installation" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.flooring_installation" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.flooring_installation? 'block' : 'hidden md:block'" class="w-[90%] font mt-10 md:mt-16 lg:mt-20 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nous fournissons des services professionnels d'installation de revêtements de sol, y compris l'installation de planchers en bois, de carreaux et de pierres. Notre équipe travaille avec vous pour sélectionner les meilleures options de revêtement de sol pour votre espace, en veillant à ce qu'elles correspondent à la fois à vos préférences esthétiques et à vos besoins fonctionnels. Nous assurons une installation précise et des résultats durables pour chaque type de revêtement de sol."
          : "We provide professional flooring installation services, including hardwood floor installation, and tile and stone flooring. Our team works with you to select the best flooring options for your space, ensuring that they match both your aesthetic preferences and functional needs. We ensure precise installation and long-lasting results for every type of flooring."
        }}
      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
    
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Terrasses et espaces extérieurs"
            : "Deck and Outdoor Living Spaces"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('deck_and_outdoor')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Terrasses et espaces extérieurs"
              : "Deck and Outdoor Living Spaces"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.deck_and_outdoor" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.deck_and_outdoor" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.deck_and_outdoor? 'block' : 'hidden md:block'" class="w-[90%] font-ligh mt-10 md:mt-16 lg:mt-20 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nos services de terrasse et d'aménagement extérieur comprennent la construction et la réparation de terrasses, la construction de patios et de porches, la création de cuisines extérieures et l'aménagement paysager. Nous nous spécialisons dans la création d'espaces extérieurs beaux et fonctionnels qui étendent votre espace de vie et améliorent votre plaisir des espaces extérieurs. Que vous souhaitiez une simple terrasse ou une cuisine extérieure entièrement équipée, nous réalisons votre vision extérieure avec un savoir-faire de qualité."
          : "Our deck and outdoor living services include deck construction and repairs, patio and porch building, outdoor kitchens, and landscaping. We specialize in creating beautiful and functional outdoor spaces that extend your living area and enhance your enjoyment of the outdoors. Whether you want a simple deck or a fully equipped outdoor kitchen, we bring your outdoor vision to life with quality craftsmanship."
        }}
      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
    
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Structure et ossature"
            : "Framing and Structure"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('framing_and_structure')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Structure et ossature"
              : "Framing and Structure"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.framing_and_structure" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.framing_and_structure" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.framing_and_structure? 'block' : 'hidden md:block'" class="w-[90%] font mt-10 md:mt-16 lg:mt-20 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nous offrons des services d'encadrement et de structure d'experts, y compris des conceptions ouvertes, de l'encadrement en bois et en acier, ainsi que des modifications structurelles. Notre équipe possède les compétences et l'expérience nécessaires pour gérer tous les aspects de l'encadrement, que vous construisiez une nouvelle structure ou que vous modifiiez une structure existante. Nous veillons à ce que le cadre de votre bâtiment soit solide et soutienne votre vision de l'espace."
          : "We offer expert framing and structural services, including open concept, both wood and steel framing and structural modifications. Our team has the skills and experience to handle all aspects of framing, whether you're building a new structure or modifying an existing one. We ensure that the framework of your building is solid and supports your vision for the space."
        }}
      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
    
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Services électriques, de plomberie et de CVC (HVAC)"
            : "Electrical, Plumbing and HVAC Services"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('electrical_and_plumbing')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Services électriques, de plomberie et de CVC (HVAC)"
              : "Electrical, Plumbing and HVAC Services"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.electrical_and_plumbing" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.electrical_and_plumbing" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.electrical_and_plumbing? 'block' : 'hidden md:block'" class="w-[90%] fo mt-10 md:mt-16 lg:mt-20 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nos sous-traitants en électricité, plomberie et CVC (HVAC) forment un groupe soudé, fiable et ponctuel qui travaille avec nous sur chaque projet que nous réalisons. Ce sont des relations que nous avons bâties au fil du temps, et qui jouent un rôle clé dans l'achèvement professionnel et ponctuel de votre projet. Leurs services que nous gérons incluent les mises à niveau des systèmes, les installations, et les réparations, ainsi que l'installation et la maintenance des systèmes CVC (HVAC). Nous offrons des solutions fiables pour garantir que les systèmes électriques et de plomberie de votre maison fonctionnent efficacement et en toute sécurité. Nos techniciens qualifiés sont disponibles pour gérer tout, de la maintenance de routine aux installations de systèmes complexes."
          : "Our electrical, plumbing, and HVAC subcontractors are a close knit, reliable, and timely set of teams that work with us on every project we do. These are relationships we have built over time, and are a key factor in completing your project professionally and on time. Their services we manage include system upgrades, installations, and repairs, as well as HVAC installation and maintenance. We provide reliable solutions to ensure your home's electrical and plumbing systems function efficiently and safely. Our skilled technicians are available to handle everything from routine maintenance to complex system installations."
        }}
      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
    
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Fenêtres et portes"
            : "Windows and Doors"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('windows_doors')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Fenêtres et portes"
              : "Windows and Doors"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.windows_doors" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.windows_doors" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.windows_doors? 'block' : 'hidden md:block'" class="w-[90%] font-light mt-10 md:mt-16 lg:mt-20 md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nous nous spécialisons dans l'installation et le remplacement de fenêtres et de portes, ainsi que dans la création de traitements de fenêtres sur mesure. Que vous souhaitiez améliorer l'efficacité énergétique de votre maison ou en augmenter l'attrait extérieur, notre équipe offre des services d'installation d'experts pour garantir que vos fenêtres et portes soient à la fois fonctionnelles et esthétiques. Nous proposons également des traitements de fenêtres sur mesure pour correspondre à votre décoration intérieure."
          : "We specialize in window and door installation and replacement, as well as custom window treatments. Whether you're upgrading the energy efficiency of your home or enhancing its curb appeal, our team provides expert installation services that ensure your windows and doors are both functional and beautiful. We also offer custom window treatments to match your interior design."
        }}
      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
    
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Finitions intérieures"
            : "Interior Finishes"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('interior_finishes')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Finitions intérieures"
              : "Interior Finishes"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.interior_finishes" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.interior_finishes" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.interior_finishes? 'block' : 'hidden md:block'" class="w-[90%] font-lig mt-10 md:mt-16 lg:mt-20 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nos services de finitions intérieures comprennent l'installation et la réparation de cloisons sèches, le plâtrage de niveau 5, la peinture (intérieure et extérieure), la création d'escaliers sur mesure, ainsi que l'installation de moulures. Nous nous concentrons sur les dernières touches qui complètent l'intérieur de votre maison, en assurant des résultats lisses et professionnels. Que vous ayez besoin de réparations de cloisons sèches, d'une nouvelle couche de peinture ou de travaux de moulures personnalisées, notre équipe fera en sorte que votre maison soit élégante et raffinée."
          : "Our interior finishes services include drywall installation and repair, level 5 plastering, painting (both interior and exterior), custom staircases, and trim and molding installation. We focus on providing the final touches that complete your home's interior, ensuring smooth, professional results. Whether you need drywall repairs, a fresh coat of paint, or custom trim work, our team will make your home look polished and refined."
        }}
      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Solutions de construction durable"
            : "Sustainable Building Solutions"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('sustainable_building_solutions')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Solutions de construction durable"
              : "Sustainable Building Solutions"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.sustainable_building_solutions" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.sustainable_building_solutions" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.sustainable_building_solutions? 'block' : 'hidden md:block'" class="w-[90%] mt-10 md:mt-16 lg:mt-20 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nous sommes engagés dans des pratiques de construction durables et offrons des solutions de construction écoénergétiques, en mettant l'accent sur l'isolation appropriée, l'étanchéité des extérieurs, les barrières contre la vapeur et l'air, ainsi que l'utilisation de matériaux de construction écologiques lorsque cela est possible. Notre objectif est de vous aider à réduire votre impact environnemental tout en rénovant votre propriété. En intégrant des pratiques durables, nous veillons à ce que votre projet soit non seulement beau et fonctionnel, mais également écoénergétique et respectueux de l'environnement."
          : "We are committed to sustainable building practices and offer energy-efficient construction solutions, concentrating on properly insulating, waterproofing exteriors, vapor and air barriers, and using green building materials where possible. Our goal is to help you reduce your environmental impact while renovating your property. By incorporating sustainable practices, we ensure that your project is not only beautiful and functional but also energy-efficient and eco-friendly."
        }}
      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto lg:hidden" />
    <div class="w-full hover:md:bg-orange-950/10 py-8 md:py-20 lg:py-28">
      <div class="flex items-center justify-center gap-2 px-4">
    
        <h2 class="text-lg md:text-2xl text-center uppercase hidden md:block">
          {{ locale === 'fr' 
            ? "Gestion de projet"
            : "Project Management"
          }}
        </h2>
        <button 
          class="md:hidden text-lg flex items-center gap-2"
          @click="toggleParagraph('project_management')"
        >
          <h2 class="text-lg md:text-2xl text-center uppercase">
            {{ locale === 'fr' 
              ? "Gestion de projet"
              : "Project Management"
            }}
          </h2>
          <UIcon v-if="!isParagraphVisible.project_management" name="lineicons:chevron-down" class="w-6 h-6" />
          <UIcon v-if="isParagraphVisible.project_management" name="lineicons:chevron-up" class="w-6 h-6" />
        </button>
      </div>
      <p :class="isParagraphVisible.project_management? 'block' : 'hidden md:block'" class="w-[90%] font-li mt-10 md:mt-16 lg:mt-20 font-light md:w-[75%] mx-auto text-justify md:text-center md:leading-loose md:text-lg p-2">
        {{ locale === 'fr' 
          ? "Nos services de gestion de projet incluent la planification du budget, l'estimation des coûts, l'élaboration des délais et la supervision sur site. Nous travaillons en étroite collaboration avec vous pour garantir que votre projet reste sur la bonne voie et respecte le budget. De la planification initiale à l'achèvement final, nous gérons chaque aspect de votre projet de construction, en coordonnant les sous-traitants et les fournisseurs pour livrer les meilleurs résultats dans les délais et dans le respect du budget."
          : "Our project management services include budget planning, cost estimation, timeline development, and on-site supervision. We work closely with you to ensure that your project stays on track and within budget. From initial planning to final completion, we manage every aspect of your construction project, coordinating with subcontractors and suppliers to deliver the best results on time and within your budget."
        }}
      </p>
    </div>
    <div class="h-px w-full bg-orange-950/10 mx-auto" />
    <div class="flex flex-col gap-2 items-center justify-center w-full h-96 px-4 md:text-lg font-light">
      <p class="text-center">
        {{ locale === 'en' ? 'Ready to start your project?' : 'Prêt.e à commencer votre projet?' }}
      </p>
      <p class="text-center">
        {{ locale === 'en' ? 'Discover our step-by-step process and see how we bring your vision to life.' : 'Découvrez notre processus étape par étape et voyez comment nous donnons vie à votre vision.' }}
      </p>

      <nuxt-link
        :to="localePath('process')"
        class="primary-button mt-6"
        href="/Process"
      >
        {{ locale === 'en' ? 'See our process' : 'Voir notre processus' }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { useLocalePath , useHead } from '#imports'

const localePath = useLocalePath()
const { locale } = useI18n()

const isParagraphVisible = ref({
    residential_construction: false,
    commercial_construction: false,
    renovations_and_remodeling: false,
    roofing_services: false,
    flooring_installation: false,
    deck_and_outdoor: false,
    framing_and_structure: false,
    electrical_and_plumbing: false,
    windows_doors: false,
    interior_finishes: false,
    sustainable_building_solutions: false,
    project_management: false,
})

// Function to toggle paragraph visibility based on section
const toggleParagraph = (section) => {
    isParagraphVisible.value[section] = !isParagraphVisible.value[section]
}

const pageTitle = 'Nos Services'
const pageDescription = "Chez Finition108, nous offrons une gamme complète de services de rénovation incluant la rénovation de cuisines, la modernisation de salles de bain, et la rénovation complète de maisons. Découvrez comment notre équipe d'experts peut répondre à tous vos besoins en matière de rénovation."

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
