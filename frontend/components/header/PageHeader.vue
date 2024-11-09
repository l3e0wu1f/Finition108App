<template>
    <div class="sticky top-0 w-full h-20 bg-primary text-secondary flex items-center justify-between px-6 z-50">
        <nuxt-link :to="'/'" class="flex items-center gap-2 -ml-4">
            <img class="h-20" src="/img/logo.png">
            <p class="text-xl font-light">Finition108</p>
        </nuxt-link>
        <div class="flex gap-6">
            <div class='flex gap-4'>
                <nuxt-link class="hover:text-secondary/70" :class="{'font-extrabold' : path === '/' || path === '/en'}" :to="localePath('/')">{{ $t('home') }}</nuxt-link>
                <nuxt-link class="hover:text-secondary/70" :class="{'font-extrabold' : path.includes('services')}" :to="localePath('/services')">{{ $t('services') }}</nuxt-link>
                <nuxt-link class="hover:text-secondary/70" :class="{'font-extrabold' : path.includes('process')}" :to="localePath('/process')">{{ $t('process') }}</nuxt-link>
                <nuxt-link class="hover:text-secondary/70" :class="{'font-extrabold' : path.includes('portfolio')}" :to="localePath('/portfolio')">{{ $t('portfolio') }}</nuxt-link>
                <nuxt-link class="hover:text-secondary/70" :class="{'font-extrabold' : path.includes('aboutus')}" :to="localePath('/aboutus')">{{ $t('aboutus') }}</nuxt-link>
                <nuxt-link class="hover:text-secondary/70" :class="{'font-extrabold' : path.includes('contact')}" :to="localePath('/contact')">{{ $t('contact') }}</nuxt-link>
            </div>
            <div class="flex">
                <button :class="{'font-extrabold':locale==='en'}" @click="setLocale('en')" class=" hover:text-secondary/70">en</button>
                <p>/</p>
                <button @click="setLocale('fr')" :class="{'font-extrabold':locale==='fr'}" class=" hover:text-secondary/70" >fr</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()
import { useLocalePath } from '#imports'
const localePath = useLocalePath()
const route = useRoute();
const path = computed(() => route.path);
</script>
