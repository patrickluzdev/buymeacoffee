<template>
  <PaymentFeedbackLayout>
    <div class="mb-6">
      <PaymentFeedbackIcon icon="ph:check-circle-fill" variant="success" />
      <h1 class="text-2xl font-bold text-neutral-900 mb-2">Pagamento Confirmado!</h1>
      <p class="text-neutral-600 mb-6">
        Obrigado pelo seu apoio! Seu pagamento foi processado com sucesso.
      </p>
    </div>

    <PaymentStatusCard status="Aprovado" variant="success" />

    <NuxtLink
      to="/"
      class="inline-block w-full bg-neutral-900 text-white rounded-full px-6 py-3 font-medium hover:bg-neutral-800 transition-colors"
    >
      Voltar ao Início
    </NuxtLink>
  </PaymentFeedbackLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl
const pageTitle = 'Pagamento Confirmado - Buy Me a Coffee'
const pageDescription = 'Seu pagamento foi processado com sucesso. Obrigado pelo seu apoio!'
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
