<script setup lang="ts">
const colorMode = useColorMode()
console.log(useRuntimeConfig().public.apiUrl)
useHead({
  title: 'Inicio',
})
</script>
<template>
  <LandingHero />
</template>

<style scoped></style>
