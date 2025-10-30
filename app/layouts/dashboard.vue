<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const user = {
  name: 'Isaias Rodriguez',
  avatar: 'https://github.com/mdo.png', // reemplázalo por el avatar real del usuario
}

const mainMenu: NavigationMenuItem[] = [
  {
    label: 'Inicio',
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Jams',
    icon: 'i-lucide-music-2',
    to: '/jams',
  },
  {
    label: 'Mis inscripciones',
    icon: 'i-lucide-bookmark',
    to: '/inscripciones',
  },
  {
    label: 'Configuración',
    icon: 'i-lucide-settings',
    to: '/configuracion',
  },
]

// Placeholder logout action
const logout = () => {
  console.log('Cerrando sesión...')
  // Aquí puedes limpiar el estado, borrar tokens y redirigir:
  // navigateTo('/login')
}
</script>

<template>
  <UDashboardGroup>
    <!-- Sidebar -->
    <UDashboardSidebar
      :min-size="20"
      :max-size="40"
      :ui="{ footer: 'border-t border-default' }"
    >
      <!-- Header del sidebar -->
      <template #header="{ collapsed }">
        <div class="flex items-center gap-2">
          <UAvatar :src="user.avatar" size="sm" />
          <span v-if="!collapsed" class="font-medium truncate">
            {{ user.name }}
          </span>
        </div>
      </template>

      <!-- Menú principal -->
      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="mainMenu"
          orientation="vertical"
          class="space-y-3"
        />
      </template>

      <!-- Footer del sidebar -->
      <template #footer="{ collapsed }">
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-log-out"
          :label="collapsed ? undefined : 'Cerrar sesión'"
          class="w-full"
          @click="logout"
        />
      </template>
    </UDashboardSidebar>

    <!-- Panel principal -->
    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar>
          <template #left>
            <h1 class="text-lg font-semibold">Dashboard</h1>
          </template>

          <template #right>
            <div class="flex items-center gap-2">
              <UAvatar :src="user.avatar" size="sm" />
              <span class="hidden sm:inline">{{ user.name }}</span>
            </div>
          </template>
        </UDashboardNavbar>
      </template>

      <template #default>
        <!-- Contenido del layout -->
        <div class="p-6">
          <slot />
        </div>
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
