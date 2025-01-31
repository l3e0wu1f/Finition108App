<template>
  <div v-if="!isMenuOpen" class="sticky top-0 w-full h-20 bg-primarybis text-secondary flex items-center justify-between px-6 z-50">
    <nuxt-link
      :to="'/'"
      class="flex items-center gap-2 -ml-4"
    >
      <img
        class="h-20"
        src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/logo.png"
      >
      <p class="text-xl font-light md:hidden lg:block">
        Finition108
      </p>
    </nuxt-link>
    <div class="hidden md:flex gap-6">
      <div class="flex gap-4">
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold': path === '/' || path === '/en' }"
          :to="localePath('/')"
        >
          {{ $t('home') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold': path.includes('services') }"
          :to="localePath('/services')"
        >
          {{ $t('services') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold': path.includes('process') }"
          :to="localePath('/process')"
        >
          {{ $t('process') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold': path.includes('portfolio') }"
          :to="localePath('/portfolio/all')"
        >
          {{ $t('portfolio') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold': path.includes('aboutus') }"
          :to="localePath('/aboutus')"
        >
          {{ $t('aboutus') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold': path.includes('contact') }"
          :to="localePath('/contact')"
        >
          {{ $t('contact') }}
        </nuxt-link>
      </div>
      <div class="flex">
        <button
          :class="{ 'font-extrabold': locale==='en' }"
          class=" hover:text-secondary/70"
          @click="setLocale('en')"
        >
          en
        </button>
        <p>/</p>
        <button
          :class="{ 'font-extrabold': locale==='fr' }"
          class=" hover:text-secondary/70"
          @click="setLocale('fr')"
        >
          fr
        </button>
      </div>
    </div>
    <div v-if="!isMenuOpen" class="md:hidden flex gap-6">
      <button @click="() => {isMenuOpen = true}">
        <UIcon name="la:bars" class="w-10 h-10 text-secondary" />
      </button>
    </div>
  </div>
  <div v-if="isMenuOpen" class="bg-primarybis sticky text-secondary text-xl top-0 h-screen w-screen z-50">
    <div class="flex flex-col w-full">
      <div class="flex justify-between px-6 w-full">
        <nuxt-link
          :to="'/'"
          class="flex items-center gap-2 -ml-4"
        >
          <img
            class="h-20"
            src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/logo.png"
          >
          <p class="text-xl font-light md:hidden lg:block">
            Finition108
          </p>
        </nuxt-link>
        <button @click="() => {isMenuOpen = false}">
          <UIcon name="carbon:close" class="w-10 h-10" />
        </button>
      </div>
      <div class="flex flex-col gap-6 p-6">
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold underline underline-offset-4': path === '/' || path === '/en' }"
          :to="localePath('/')"
        >
          {{ $t('home') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold underline underline-offset-4': path.includes('services') }"
          :to="localePath('/services')"
        >
          {{ $t('services') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold underline underline-offset-4': path.includes('process') }"
          :to="localePath('/process')"
        >
          {{ $t('process') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold underline underline-offset-4': path.includes('portfolio') }"
          :to="localePath('/portfolio/all')"
        >
          {{ $t('portfolio') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold underline underline-offset-4': path.includes('aboutus') }"
          :to="localePath('/aboutus')"
        >
          {{ $t('aboutus') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70"
          :class="{ 'font-extrabold underline underline-offset-4': path.includes('contact') }"
          :to="localePath('/contact')"
        >
          {{ $t('contact') }}
        </nuxt-link>
      </div>
      <div class="flex p-10 text-2xl">
        <button
          :class="{ 'font-extrabold underline underline-offset-2': locale==='en' }"
          class=" hover:text-secondary/70"
          @click="setLocale('en')"
        >
          en
        </button>
        <p>/</p>
        <button
          :class="{ 'font-extrabold underline underline-offset-2': locale==='fr' }"
          class=" hover:text-secondary/70"
          @click="setLocale('fr')"
        >
          fr
        </button>
      </div>

    </div>
    </div>
</template>

<script setup>
import { useLocalePath } from '#imports'

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const path = computed(() => route.path)
const isMenuOpen = ref(false)

watch(path, () => {
    isMenuOpen.value=false
})


</script>
