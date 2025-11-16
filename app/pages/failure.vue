<template>
  <PaymentFeedbackLayout>
    <div class="mb-6">
      <PaymentFeedbackIcon icon="ph:x-circle-fill" variant="error" />
      <h1 class="text-2xl font-bold text-neutral-900 mb-2">Pagamento Não Autorizado</h1>
      <p class="text-neutral-600 mb-6">
        Infelizmente, não foi possível processar seu pagamento. Tente novamente ou use outro método de pagamento.
      </p>
    </div>

    <PaymentStatusCard status="Recusado" variant="error" />

    <div class="space-y-3">
      <NuxtLink
        to="/"
        class="inline-block w-full bg-neutral-900 text-white rounded-full px-6 py-3 font-medium hover:bg-neutral-800 transition-colors"
      >
        Tentar Novamente
      </NuxtLink>
      <button
        @click="$router.back()"
        class="w-full text-neutral-600 rounded-full px-6 py-2.5 font-medium hover:text-neutral-900 transition-colors text-sm"
      >
        Voltar
      </button>
    </div>
  </PaymentFeedbackLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl
const pageTitle = 'Pagamento Não Autorizado - Buy Me a Coffee'
const pageDescription = 'Não foi possível processar seu pagamento. Tente novamente ou use outro método de pagamento.'
const ogImage = `${baseUrl}/profile.jpeg`

useHead({
  title: pageTitle,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'description', content: pageDescription },

    // Open Graph
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:image', content: ogImage },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: ogImage },
  ],
})
</script>
