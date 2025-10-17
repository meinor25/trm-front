<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const drawer = ref(false)

const links = ref<NavigationMenuItem[]>([
  {
    to: '/faq',
    label: 'FAQ',
  },
  {
    to: '/events',
    label: 'Eventos',
  },
])
</script>

<template>
  <header class="w-full border-b border-gray-200 bg-background">
    <div
      class="container mx-auto flex h-[70px] items-center justify-between gap-6 px-6"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5">
        <Icon name="lucide:music" class="h-8 w-8 text-primary" />
        <div class="flex flex-col">
          <span class="text-sm font-semibold tracking-tight"
            >Karaoke Jamming</span
          >
          <span class="text-[10px]">by TRM</span>
        </div>
      </NuxtLink>

      <div class="hidden lg:flex md:justify-center">
        <UNavigationMenu :items="links" />
      </div>

      <!-- Action Buttons -->
      <div class="hidden lg:flex items-center gap-3 flex-shrink-0">
        <button
          class="hidden sm:inline-flex h-11 px-5 items-center justify-center font-medium transition-colors"
        >
          Sign In
        </button>
        <button
          class="h-11 px-5 inline-flex items-center justify-center text-[15px] font-semibold bg-primary text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm"
        >
          Join as Musician
        </button>
        <UColorModeButton />
      </div>

      <div class="lg:hidden">
        <Icon name="lucide:menu" class="h-6 w-6" @click="drawer = !drawer" />
      </div>
    </div>

    <UDrawer
      :handle="false"
      v-model:open="drawer"
      direction="left"
      :ui="{
        content: 'w-[250px]',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <UColorModeButton />
          <Icon name="lucide:x" class="h-6 w-6" @click="drawer = !drawer" />
        </div>
      </template>
      <template #body>
        <UNavigationMenu :items="links" orientation="vertical" />
      </template>
      <template #footer>
        <UButton
          label="Unirse"
          trailing-icon="ph:user"
          variant="outline"
          to="/auth/login"
        />
        <UButton
          label="Iniciar Sesion"
          trailing-icon="ph:arrow-square-right"
          to="/auth/login"
        />
      </template>
    </UDrawer>

    <!-- Mobile Search Bar -->
  </header>
</template>

<style scoped>
.container {
  max-width: 1280px;
}
</style>
