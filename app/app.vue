<template>
  <div class="min-h-screen bg-neutral-100 flex items-center justify-center px-4 py-8">
    <NuxtRouteAnnouncer />
    <div class="bg-white rounded-2xl py-8 px-8 shadow-md border border-neutral-200 w-full max-w-[380px]">
      <ProfileSection
        name="Patrick Luz"
        profile-image="/profile.jpeg"
        :github="config.public.githubUrl"
        :linkedin="config.public.linkedinUrl"
        :instagram="config.public.instagramUrl"
      />

      <CoffeeSelector v-model="selectedAmount" />

      <SupportButton
        :amount="selectedAmount"
        :price-per-coffee="config.public.coffeePrice"
        @click="handleSupport"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const config = useRuntimeConfig()
const selectedAmount = ref(1)

const handleSupport = () => {
  console.log(`Apoiando com ${selectedAmount.value} café(s)`)
  // Aqui você pode adicionar a lógica de pagamento
}
</script>
