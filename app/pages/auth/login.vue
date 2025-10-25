<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'
definePageMeta({
  layout: 'auth',
})

useHead({
  title: 'Iniciar Sesion',
})

const { login } = useAuth()

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
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
    name: 'remember',
    label: 'Remember me',
    type: 'checkbox',
  },
]

const schema = z.object({
  email: z.email('Ingresa un Email Valido'),
  password: z
    .string('La contraseña es requerida')
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
  remember: z.boolean().optional(),
})

type FormData = z.infer<typeof schema>
const onSubmit = async (payload: FormSubmitEvent<FormData>) => {
  const { email, password, remember } = payload.data
  console.log(payload.data)
  await login(email, password, remember)
}
</script>
<template>
  <div class="text-center mb-10">
    <h2 class="text-2xl font-bold">Karaoke Jamming</h2>
    <p>by TRM</p>
  </div>
  <UPageCard
    title="Bienvenido de vuelta"
    description="Inicia sesión para continuar"
    class="w-full max-w-xl"
  >
    <UAuthForm :schema="schema" :fields="fields" @submit="onSubmit" />
  </UPageCard>
  <div class="flex mt-10 items-center">
    <p>¿No tienes una cuenta?</p>
    <UButton variant="ghost" label="Unete" to="/auth/register" />
  </div>
</template>

<style scoped></style>
