<template>
  <div class="bg-white">
    <div class="max-w-4xl mx-auto flex flex-col justify-center">
      <!-- Encabezado centrado -->
      <div class="text-center pb-10">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6">
          Preguntas Frecuentes
        </h1>
        <p class="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
          Encuentra respuestas a las preguntas más comunes sobre Karaoke
          Jamming. Si no encuentras lo que buscas, no dudes en contactarnos.
        </p>
      </div>

      <!-- Acordeón de preguntas -->
      <div class="w-full">
        <UAccordion :items="faqItems" variant="ghost" />
      </div>

      <!-- Última línea divisoria -->
      <div class="border-t border-gray-200 mt-0"></div>
    </div>
  </div>
</template>

<script setup>
// Meta tags para SEO
useHead({
  title: 'Preguntas Frecuentes - Karaoke Jamming',
  meta: [
    {
      name: 'description',
      content:
        'Encuentra respuestas a las preguntas más comunes sobre Karaoke Jamming, nuestra comunidad musical y cómo participar.',
    },
  ],
})

const faqItems = [
  {
    label: '¿Qué es Karaoke Jamming?',
    content:
      'Karaoke Jamming es una comunidad musical donde músicos de todos los niveles se reúnen para tocar canciones en conjunto.',
    defaultOpen: true,
  },
  {
    label: '¿Necesito ser músico profesional para participar?',
    content:
      'No, Karaoke Jamming está abierto a músicos de todos los niveles. Lo importante es tener pasión por la música y ganas de compartir con otros músicos.',
    defaultOpen: false,
  },
  {
    label: '¿Qué instrumentos puedo tocar?',
    content:
      'Puedes tocar cualquier instrumento musical. Guitarra, bajo, batería, teclado, voz, instrumentos de viento, y muchos más son bienvenidos en nuestras sesiones.',
    defaultOpen: false,
  },
  {
    label: '¿Cómo me uno a una sesión?',
    content:
      'Es muy sencillo. Solo necesitas registrarte en nuestra plataforma, revisar el calendario de sesiones disponibles y reservar tu lugar. Te enviaremos toda la información necesaria por correo.',
    defaultOpen: false,
  },
]
</script>
