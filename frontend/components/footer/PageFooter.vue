<template>
    <div class="w-full h-32 bg-primary text-secondary flex items-center justify-between px-6 z-50">
        <div class="flex gap-10">
            <nuxt-link :to="'/'" class="flex flex-col items-center -mt-2">
                <img class="h-24" src="/img/logo.png">
                <p class="text-sm font-light -mt-2">Finition108 Inc ©2025</p>
            </nuxt-link>
            <div class="flex gap-4 items-center">
                <div class="flex gap-2">
                    <nuxt-link class="hover:text-secondary/70 underline text-sm" :class="{'font-extrabold' : path === '/'}" :to="localePath('/')">{{ $t('home') }}</nuxt-link>
                    <nuxt-link class="hover:text-secondary/70 underline text-sm" :class="{'font-extrabold' : path.includes('services')}" :to="localePath('/services')">{{ $t('services') }}</nuxt-link>
                    <nuxt-link class="hover:text-secondary/70 underline text-sm" :class="{'font-extrabold' : path.includes('process')}" :to="localePath('/process')">{{ $t('process') }}</nuxt-link>
                    <nuxt-link class="hover:text-secondary/70 underline text-sm" :class="{'font-extrabold' : path.includes('portfolio')}" :to="localePath('/portfolio')">{{ $t('portfolio') }}</nuxt-link>
                    <nuxt-link class="hover:text-secondary/70 underline text-sm" :class="{'font-extrabold' : path.includes('aboutus')}" :to="localePath('/aboutus')">{{ $t('aboutus') }}</nuxt-link>
                    <nuxt-link class="hover:text-secondary/70 underline text-sm" :class="{'font-extrabold' : path.includes('contact')}" :to="localePath('/contact')">{{ $t('contact') }}</nuxt-link>
                </div>
                <div class="flex">
                    <button :class="{'font-extrabold':locale==='en'}" @click="setLocale('en')" class=" hover:text-secondary/70 text-sm underline">en</button>
                    <p>/</p>
                    <button @click="setLocale('fr')" :class="{'font-extrabold':locale==='fr'}" class=" hover:text-secondary/70 text-sm underline" >fr</button>
                </div>
            </div>
        </div>
        <div class="flex gap-10 items-center">
            <div class="flex flex-col gap-2 text-right">
                <a href="mailto:admin@finition108.io" class="underline hover:text-secondary/70">
                    admin@finition108.io
                </a>
                <a href="tel:(514)652-0712" class="underline hover:text-secondary/70">
                    (514)652-0712
                </a>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=5674+Rue+Sherbrooke+Ouest,+Montreal,+Canada" target="_blank" rel="noopener noreferrer" class="underline hover:text-secondary/70 flex flex-col">
                <p>5674 Rue Sherbrooke</p>
                <p>Ouest, Montreal, QC,</p>
                <p>Canada</p>
            </a>

        </div>
        
    </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()
import { useLocalePath } from '#imports'
const localePath = useLocalePath()
const route = useRoute();
const path = computed(() => route.path);
console.log(path.value)
</script>