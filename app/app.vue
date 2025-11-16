<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  script: [
    {
      src: 'https://sdk.mercadopago.com/js/v2',
      defer: true,
    },
  ],
})
</script>
