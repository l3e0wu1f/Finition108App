<template>
  <div class="min-h-screen bg-secondary relative">
    <PageHeader />
    <slot />
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import PageHeader from '~/components/header/PageHeader.vue'
import PageFooter from '~/components/footer/PageFooter.vue'
</script>
