<template>
  <div class="min-h-screen bg-neutral-100 flex items-center justify-center px-4 py-8">
    <div class="flex flex-col lg:flex-row gap-6 w-full max-w-[800px]">
      <!-- Versão Frontend (SDK) -->
      <div class="bg-white rounded-2xl py-8 px-8 shadow-md border border-neutral-200 flex-1">
        <div class="mb-4 text-center">
          <span class="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
            Frontend (SDK)
          </span>
        </div>

        <ProfileSection
          name="Patrick Luz"
          profile-image="/profile.jpeg"
          :github="config.public.githubUrl"
          :linkedin="config.public.linkedinUrl"
          :instagram="config.public.instagramUrl"
        />

        <CoffeeSelector v-model="selectedQuantityFrontend" />
        <SupportButtonFrontend
          v-if="coffeeProduct"
          :product="coffeeProduct"
          :quantity="selectedQuantityFrontend"
        />

        <div class="mt-4 text-xs text-neutral-500 text-center">
          Processa com SDK do Mercado Pago no frontend
        </div>
      </div>

      <!-- Versão Backend (Redirect) -->
      <div class="bg-white rounded-2xl py-8 px-8 shadow-md border border-neutral-200 flex-1">
        <div class="mb-4 text-center">
          <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
            Backend (Redirect)
          </span>
        </div>

        <ProfileSection
          name="Patrick Luz"
          profile-image="/profile.jpeg"
          :github="config.public.githubUrl"
          :linkedin="config.public.linkedinUrl"
          :instagram="config.public.instagramUrl"
        />

        <CoffeeSelector v-model="selectedQuantityBackend" />
        <SupportButtonBackend
          v-if="coffeeProduct"
          :product="coffeeProduct"
          :quantity="selectedQuantityBackend"
        />

        <div class="mt-4 text-xs text-neutral-500 text-center">
          Processa tudo no backend com redirect direto
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Buy Me a Coffee - Teste Frontend vs Backend'
})

const config = useRuntimeConfig()
const selectedQuantityFrontend = ref(1)
const selectedQuantityBackend = ref(1)

const { data: coffeeProduct } = await useFetch('/api/products/coffee')
</script>
