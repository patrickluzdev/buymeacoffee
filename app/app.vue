<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://sdk.mercadopago.com/js/v2',
      defer: true,
    },
  ],
})
</script>
