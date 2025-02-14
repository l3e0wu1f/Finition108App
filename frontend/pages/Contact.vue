<!-- eslint-disable @stylistic/indent -->
<template>
  <div class="min-h-[calc(100vh-13rem)] flex flex-col">
    <div
      class="flex flex-col xl:flex-row justify-between sm:bg-fixed bg-contain object-contain sm:bg-cover sm:object-cover h-full relative"
      style="background-image: url('https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/signing.jpg'); background-repeat: no-repeat;"
    >
      <div class="z-10 xl:w-2/5">
        <h1
          class="font-raleway text-4xl sm:text-6xl w-full text-center py-20 xl:mt-10 uppercase text-secondary"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);"
        >
          Contact
        </h1>
      </div>
      <div class="flex flex-col items-end gap-10 text-lg  p-6 sm:p-10 xl:w-3/5  bg-secondary/85">
        <div class="flex flex-col gap-3 leading-relaxed  text-justify ">
          <h2 class="text-2xl sm:text-3xl pb-3">
            {{ locale == 'fr' ? 'Comment pouvons-nous vous aider ?' : 'How can we help?' }}
          </h2>
          <p class="text-md">
            {{ locale == 'fr'
              ? "Vous avez un projet commercial ou résidentiel à réaliser ? Vous souhaitez découvrir les services proposés par Finition.108 ? Nous serions heureux d'échanger avec vous et de vous accompagner dans la concrétisation de vos idées."
              : "Do you have a commercial or residential project you'd like to discuss? Want to learn more about the services offered by Finition.108? We would be happy to connect with you and help bring your ideas to life."
            }}
          </p>
          <p>
            {{ locale == 'fr'
              ? "Veuillez remplir le formulaire pour nous aider à mieux comprendre vos besoins. N'hésitez pas à inclure vos plans et/ou photos. Nous reviendrons vers vous dans les plus brefs délais."
              : "Please fill out the form to help us better understand your needs. Feel free to include any plans and/or photos. We will get back to you as soon as possible."
            }}
          </p>
        </div>
        <div class="w-full">
          <h2 class="text-2xl py-10 text-center">
            {{ locale == 'fr' ? 'Formulaire de contact' : 'Contact form' }}
          </h2>
          
          <iframe
            id="JotFormIFrame-250437073443251"
            title="Finition108 Job Inquiry Form"
            onload="window.parent.scrollTo(0,0)"
            allowtransparency="true"
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/250437073443251"
            frameborder="0"
            style="min-width:100%;max-width:100%;height:600px;border:none;"
            scrolling="yes"
          >
          </iframe>
          <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
          <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-250437073443251']", "https://form.jotform.com/")</script>
          <script>
            function iframeLoaded() {
              // Wait for the iframe content to fully load and then apply styles
              const iframe = document.getElementById('JotFormIFrame-250437073443251');
              const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          
              if (iframeDoc) {
                // Hide the form footer by applying styles with !important
                const formFooter = iframeDoc.getElementsByClassName('formFooter')[0];
                if (formFooter) {
                  formFooter.style.setProperty('display', 'none', 'important');
                }
          
                // Set height of formFooter-heightMask to 0 with !important
                const formFooterHeightMask = iframeDoc.getElementsByClassName('formFooter-heightMask')[0];
                if (formFooterHeightMask) {
                  formFooterHeightMask.style.setProperty('height', '0', 'important');
                }
              }
            }
          </script>
          <!--
          <form
            id="contactForm"
            ref="contactForm"
            action="/contact-form"
            enctype="multipart/form-data"
            method="post"
            class="flex flex-col align-stretch w-full h-full gap-3"
            @submit.prevent="handleSubmit"
          >
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div class="flex flex-col sm:flex-row sm:gap-3 w-full sm:w-1/2">
                <label
                  class="w-32"
                  for="name"
                >{{ locale == 'fr' ? 'Nom *' : 'Name *' }}</label>
                <input
                  id="name"
                  class="font-light bg-transparent border-b border-primarybis/30 self-baseline flex-grow max-[640px]:w-full"
                  placeholder="test"
                  type="text"
                  name="name"
                  required
                >
              </div>

              <div class="flex flex-col sm:flex-row sm:gap-3 w-full sm:w-1/2">
                <label
                  class="w-32"
                  for="email"
                >Email *</label>
                <input
                  id="email"
                  class="font-light bg-transparent border-b border-primarybis/30 self-baseline flex-grow max-[640px]:w-full"
                  placeholder="test@expl.com"
                  type="email"
                  name="email"
                  required
                >
              </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:gap-3 w-full sm:w-1/2 pr-3">
              <label
                class="w-32"
                for="phone"
              >{{ locale == 'fr' ? 'Téléphone *' : 'Phone *' }}</label>
              <input
                id="phone"
                class="font-light bg-transparent border-b border-primarybis/30 self-baseline flex-grow max-[640px]:w-full"
                placeholder="test"
                type="text"
                name="phone"
                required
              >
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-6 align-stretch">
              <div class="flex flex-col sm:flex-row sm:gap-3 w-full sm:w-1/2">
                <label
                  class="w-32"
                  for="job_needed"
                >{{ locale == 'fr' ? 'Job demandé *' : 'Job needed *' }}</label>
                <input
                  id="job_needed"
                  class="font-light bg-transparent border-b border-primarybis/30 self-baseline flex-grow max-[640px]:w-full"
                  placeholder="test"
                  type="text"
                  name="job_needed"
                  required
                >
              </div>
              <div class="flex flex-col sm:flex-row sm:gap-3 w-full sm:w-1/2">
                <label
                  class="w-32"
                  for="budget"
                >Budget</label>
                <input
                  id="budget"
                  class="font-light bg-transparent border-b border-primarybis/30 self-baseline flex-grow max-[640px]:w-full"
                  placeholder="test"
                  type="text"
                  name="budget"
                >
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-6 align-stretch sm:mt-6">
              <div class="flex flex-col gap-3 w-full sm:w-1/2">
                <p>{{ locale == 'fr' ? 'Plans et/ou photos (PDF/Image)' : 'Plans and/or pictures (PDF/Image)' }}</p>
                <label
                  ref="dropContainer"
                  for="deposit_file"
                  class="flex flex-col justify-center items-center gap-2.5 sm:h-52 p-5 border border-dashed border-primarybis/30 hover:bg-orange-950/10 font-light overflow-hidden"
                  @dragover.prevent
                  @dragenter="onDragEnter"
                  @dragleave="onDragLeave"
                  @drop="onDrop"
                >
                  <span>{{ locale == 'fr' ? "Déposez vos fichiers ici" : "Drop files here " }}</span>
                  {{ locale == 'fr' ? "ou" : "or" }}
                  <input
                    id="deposit_file"
                    ref="fileInput"
                    type="file"
                    name="deposit_file"
                    class="text-sm md:text-base"
                    accept="image/*,application/pdf"
                    multiple
                  >
                </label>
              </div>
              <div class="flex flex-col gap-3 w-full sm:w-1/2 max-sm:h-52">
                <label for="description">Description *</label>
                <textarea
                  id="description"
                  class="bg-transparent h-full font-light"
                  placeholder="I am wondering if ..."
                  name="description"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              class="primary-button self-end mt-8 "
            >
              {{ locale == 'fr' ? "Envoyer" : "Send" }}
            </button>
            <p v-if="messageSent" class="text-green-600 font-thin md:text-lg self-end min-w-60 md:min-w-80 text-center">
              {{ locale === 'fr'
              ? "Votre message a bien été envoyé !"
              : "Your message has been sent!"
              }}
            </p>
          </form>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useHead } from '#imports'

const { locale } = useI18n()

const dropContainer = ref(null)
const fileInput = ref(null)

const contactForm = ref(null) // Reference to the form
const messageSent = ref(false)

async function sendData() {
    // Associate the FormData object with the form element
    const formData = new FormData(contactForm.value)
    console.log(contactForm.value)
    try {
        const response = await fetch('http://localhost:3001/api/contact-form', {
            method: 'POST',
            // Set the FormData instance as the request body
            body: formData,
        })
        if (response.status === 201) {
            contactForm.value.reset()
            messageSent.value  = true
        }
    }
    catch (e) {
        console.error(e)
    }
}

function handleSubmit(event) {
    console.log('submit')
    event.preventDefault()
    sendData()
}

onMounted(() => {
    dropContainer.value.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    dropContainer.value.addEventListener('dragenter', () => {
        console.log('dragenter')
        dropContainer.value.classList.add('drag-active')
    })

    dropContainer.value.addEventListener('dragleave', () => {
        dropContainer.value.classList.remove('drag-active')
    })

    dropContainer.value.addEventListener('drop', (e) => {
        console.log('drop')
        e.preventDefault()
        dropContainer.value.classList.remove('drag-active')
        // Get the files that are currently in the input field
        const existingFiles = fileInput.value.files

        // Convert the FileList to an array to append the new files
        const existingFilesArray = Array.from(existingFiles)

        // Get the dropped files from the drag event
        const droppedFiles = e.dataTransfer.files

        // Convert the dropped FileList to an array
        const droppedFilesArray = Array.from(droppedFiles)

        // Combine the existing files and dropped files
        const allFiles = [...existingFilesArray, ...droppedFilesArray]

        // Create a new FileList (we cannot directly set a FileList, but we can create a new one using DataTransfer)
        const dataTransfer = new DataTransfer()

        // Add all files to the DataTransfer
        allFiles.forEach((file) => {
            dataTransfer.items.add(file)
        })

        // Update the input's files with the new FileList
        fileInput.value.files = dataTransfer.files
    })
})

const pageTitle = 'Contactez-Nous'
const pageDescription = "Prêt à commencer votre rénovation ? Contactez Finition108 dès aujourd'hui pour planifier une consultation ou pour nous poser vos questions sur nos services et notre processus. Nous sommes ici pour vous aider à réaliser vos objectifs de rénovation."

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
