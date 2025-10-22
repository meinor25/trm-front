<script setup lang="ts">
import type { AuthFormField } from '@nuxt/ui'
import * as z from 'zod'
import { ALLOWED_INSTRUMENTS } from '~/types/domain/instrument'
definePageMeta({
  layout: 'auth',
})

useHead({
  title: 'Registrate',
})

const registerForm = useTemplateRef('registerForm')

watchEffect(() => console.log(registerForm.value?.state))

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
  {
    name: 'nombre',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Enter your name',
    required: true,
  },
  {
    name: 'username',
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
  },
  {
    name: 'instrumento_preferido',
    type: 'select',
    label: 'Instrumento preferido',
    placeholder: 'Selecciona tu instrumento preferido',
    items: [
      {
        label: 'Guitarra',
        value: ALLOWED_INSTRUMENTS.GUITAR,
      },
      {
        label: 'Bateria',
        value: ALLOWED_INSTRUMENTS.DRUMS,
      },
      {
        label: 'Bajo',
        value: ALLOWED_INSTRUMENTS.BASS,
      },
      {
        label: 'Teclado',
        value: ALLOWED_INSTRUMENTS.KEYS,
      },
      {
        label: 'Voz',
        value: ALLOWED_INSTRUMENTS.VOCALS,
      },
    ],
  },
]

const schema = z.object({
  email: z.email('Ingresa un Email Valido'),
  password: z
    .string('La contraseña es requerida')
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
  nombre: z.string('El nombre es requerido'),
  username: z.string('El username es requerido'),
  instrumento_preferido: z.object(
    {
      value: z.enum(ALLOWED_INSTRUMENTS, {
        error: 'Agrega un instrumento valido',
      }),
    },
    'Elige un instrumento'
  ),
})
</script>
<template>
  <NuxtLink to="/" class="text-center mb-10">
    <h2 class="text-2xl font-bold">Karaoke Jamming</h2>
    <p>by TRM</p>
  </NuxtLink>
  <UPageCard
    title="Crea tu cuenta"
    description="Registrate para continuar"
    class="w-full max-w-xl"
  >
    <UAuthForm
      :schema="schema"
      :fields="fields"
      ref="registerForm"
      @submit="console.log(registerForm?.state)"
    />
  </UPageCard>
  <div class="flex mt-10 items-center">
    <p>¿Ya tienes una cuenta?</p>
    <UButton variant="ghost" label="Iniciar Sesión" to="/auth/login" />
  </div>
</template>

<style scoped></style>
