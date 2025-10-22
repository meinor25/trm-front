<!-- <template>
  <section class="py-20 px-6 max-w-7xl mx-auto space-y-5 text-center">
    <h1 class="text-2xl lg:text-5xl font-bold">
      Donde la musica une <span class="text-primary">generaciones</span>
    </h1>
    <p class="text-sm lg:text-lg">
      Subimos el volumen a tu talento. conecta, toca y crece junto a otros
      músicos.
    </p>
    <u-button class="text-white" size="lg">Comienza ahora</u-button>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style> -->
<script setup lang="ts">
const links = ref([
  {
    label: 'Unirse',
    to: '/auth/register',
  },
  {
    label: 'Explorar Eventos',
    to: '/events',

    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
])
</script>

<template>
  <UPageHero
    :ui="{
      container: 'max-w-6xl ',
    }"
    title="Donde la musica une generaciones"
    description="Únete a eventos donde cada canción cobra vida entre voces e instrumentos reales.
Regístrate, elige tu instrumento y forma parte de experiencias musicales colaborativas.
Ya seas guitarrista, vocalista o baterista, hay un lugar para ti en cada canción."
    :links="links"
  >
    <template #headline>
      <UBadge color="primary" variant="subtle">
        <Icon name="fluent-emoji-flat:guitar" />
        +20 bandas formadas
      </UBadge>
    </template>
  </UPageHero>
</template>
