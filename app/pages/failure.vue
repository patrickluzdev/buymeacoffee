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
useHead({
  title: 'Pagamento Não Autorizado - Buy Me a Coffee'
})
</script>
