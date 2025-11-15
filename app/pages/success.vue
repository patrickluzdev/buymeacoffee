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
useHead({
  title: 'Pagamento Confirmado - Buy Me a Coffee'
})
</script>
