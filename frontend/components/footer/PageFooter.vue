<template>
  <div class="w-full min-h-32 bg-primarybis text-secondary lg:hidden flex flex-col items-center gap-5 md:flex-row p-6 z-50">
    <div class="flex flex-col gap-5 items-center">
      <div class="items-center flex flex-col grow-0 w-fit">
        <nuxt-link
          :to="'/'"
          class="flex flex-col grow-0 items-center -mt-2"
        >
          <img
            class="h-24"
            src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/logo.png"
          >
          <p class="text-sm font-light -mt-2">
            Finition108 Inc ©2025
          </p>
        </nuxt-link>
        
      </div>
      <div class="flex gap-2 flex-wrap my-3">
        <nuxt-link
          class="hover:text-secondary/70 underline text-sm"
          :class="{ 'font-extrabold': path === '/' }"
          :to="localePath('/')"
        >
          {{ $t('home') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70 underline text-sm"
          :class="{ 'font-extrabold': path.includes('services') }"
          :to="localePath('/services')"
        >
          {{ $t('services') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70 underline text-sm"
          :class="{ 'font-extrabold': path.includes('process') }"
          :to="localePath('/process')"
        >
          {{ $t('process') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70 underline text-sm"
          :class="{ 'font-extrabold': path.includes('portfolio') }"
          :to="localePath('/portfolio/all')"
        >
          {{ $t('portfolio') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70 underline text-sm"
          :class="{ 'font-extrabold': path.includes('aboutus') }"
          :to="localePath('/aboutus')"
        >
          {{ $t('aboutus') }}
        </nuxt-link>
        <nuxt-link
          class="hover:text-secondary/70 underline text-sm"
          :class="{ 'font-extrabold': path.includes('contact') }"
          :to="localePath('/contact')"
        >
          {{ $t('contact') }}
        </nuxt-link>
      </div>
    </div>
    <div class="flex gap-10 items-center text-sm">
      <div class="flex flex-col gap-2 text-right">
        <a
          href="mailto:admin@finition108.io"
          class="underline hover:text-secondary/70"
        >
          admin@finition108.io
        </a>
        <a
          href="tel:(514)652-0712"
          class="underline hover:text-secondary/70"
        >
          (514)652-0712
        </a>
      </div>
      <a
        href="https://www.google.com/maps/search/?api=1&query=5674+Rue+Sherbrooke+Ouest,+Montreal,+Canada"
        target="_blank"
        rel="noopener noreferrer"
        class="underline hover:text-secondary/70 flex flex-col"
      >
        <p>5674 Rue Sherbrooke</p>
        <p>Ouest, Montreal, QC,</p>
        <p>Canada</p>
      </a>
    </div>
  </div>
  <div class="w-full h-32 bg-primarybis text-secondary hidden lg:flex items-center justify-between px-6 z-50">
    <div class="flex gap-10">
      <nuxt-link
        :to="'/'"
        class="flex flex-col items-center -mt-2"
      >
        <img
          class="h-24"
          src="https://imagery.tor1.cdn.digitaloceanspaces.com/frontend/logo.png"
        >
        <p class="text-sm font-light -mt-2">
          Finition108 Inc ©2025
        </p>
      </nuxt-link>
      <div class="flex gap-4 items-center">
        <div class="flex gap-2">
          <nuxt-link
            class="hover:text-secondary/70 underline text-sm"
            :class="{ 'font-extrabold': path === '/' }"
            :to="localePath('/')"
          >
            {{ $t('home') }}
          </nuxt-link>
          <nuxt-link
            class="hover:text-secondary/70 underline text-sm"
            :class="{ 'font-extrabold': path.includes('services') }"
            :to="localePath('/services')"
          >
            {{ $t('services') }}
          </nuxt-link>
          <nuxt-link
            class="hover:text-secondary/70 underline text-sm"
            :class="{ 'font-extrabold': path.includes('process') }"
            :to="localePath('/process')"
          >
            {{ $t('process') }}
          </nuxt-link>
          <nuxt-link
            class="hover:text-secondary/70 underline text-sm"
            :class="{ 'font-extrabold': path.includes('portfolio') }"
            :to="localePath('/portfolio/all')"
          >
            {{ $t('portfolio') }}
          </nuxt-link>
          <nuxt-link
            class="hover:text-secondary/70 underline text-sm"
            :class="{ 'font-extrabold': path.includes('aboutus') }"
            :to="localePath('/aboutus')"
          >
            {{ $t('aboutus') }}
          </nuxt-link>
          <nuxt-link
            class="hover:text-secondary/70 underline text-sm"
            :class="{ 'font-extrabold': path.includes('contact') }"
            :to="localePath('/contact')"
          >
            {{ $t('contact') }}
          </nuxt-link>
        </div>
        <div class="flex">
          <button
            :class="{ 'font-extrabold': locale==='en' }"
            class=" hover:text-secondary/70 text-sm underline"
            @click="setLocale('en')"
          >
            en
          </button>
          <p>/</p>
          <button
            :class="{ 'font-extrabold': locale==='fr' }"
            class=" hover:text-secondary/70 text-sm underline"
            @click="setLocale('fr')"
          >
            fr
          </button>
        </div>
      </div>
    </div>
    <div class="flex gap-10 items-center">
      <div class="flex flex-col gap-2 text-right">
        <a
          href="mailto:admin@finition108.io"
          class="underline hover:text-secondary/70"
        >
          admin@finition108.io
        </a>
        <a
          href="tel:(514)652-0712"
          class="underline hover:text-secondary/70"
        >
          (514)652-0712
        </a>
      </div>
      <!-- <a
        href="https://www.google.com/maps/search/?api=1&query=5674+Rue+Sherbrooke+Ouest,+Montreal,+Canada"
        target="_blank"
        rel="noopener noreferrer"
        class="underline hover:text-secondary/70 flex flex-col"
      >
        <p>5674 Rue Sherbrooke</p>
        <p>Ouest, Montreal, QC,</p>
        <p>Canada</p>
      </a> -->
    </div>
  </div>
</template>

<script setup>
import { useLocalePath } from '#imports'

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const path = computed(() => route.path)
</script>
