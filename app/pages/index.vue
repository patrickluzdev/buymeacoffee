<template>
  <div class="min-h-screen bg-neutral-100 flex items-center justify-center px-4 py-8">
    <div class="flex flex-col lg:flex-row gap-6 w-full max-w-[400px]">
      <div class="bg-white rounded-2xl py-8 px-8 shadow-md border border-neutral-200 flex-1">

        <ProfileSection
          name="Patrick Luz"
          profile-image="/profile.jpeg"
          :github="config.public.githubUrl"
          :linkedin="config.public.linkedinUrl"
          :instagram="config.public.instagramUrl"
        />

        <CoffeeSelector v-model="selectedQuantity" />
        <SupportButton
          v-if="coffeeProduct"
          :product="coffeeProduct"
          :quantity="selectedQuantity"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Buy Me a Coffee'
})

const config = useRuntimeConfig()
const selectedQuantity = ref(1)

const { data: coffeeProduct } = await useFetch('/api/products/coffee')
</script>
