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
const config = useRuntimeConfig()
const selectedQuantity = ref(1)

const { data: coffeeProduct } = await useFetch('/api/products/coffee')

const baseUrl = config.public.baseUrl
const pageTitle = 'Buy Me a Coffee - Patrick Luz'
const pageDescription = 'Apoie Patrick Luz com um café! Contribua com R$ 5,00 e ajude a manter meus projetos de desenvolvimento de software.'
const ogImage = `${baseUrl}/profile.jpeg`

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: 'buy me a coffee, apoiar desenvolvedor, doação, Patrick Luz, café, contribuição, developer support' },
    { name: 'author', content: 'Patrick Luz' },

    // Open Graph
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:image', content: ogImage },
    { property: 'og:url', content: baseUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:site_name', content: 'Buy Me a Coffee' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: ogImage },
  ],
  link: [
    { rel: 'canonical', href: baseUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Patrick Luz',
        url: baseUrl,
        image: ogImage,
        sameAs: [
          config.public.githubUrl,
          config.public.linkedinUrl,
          config.public.instagramUrl,
        ],
        description: 'Desenvolvedor de software',
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Café Virtual - Apoio ao Desenvolvedor',
        description: 'Apoie Patrick Luz com um café virtual e ajude a manter seus projetos de desenvolvimento de software.',
        image: `${baseUrl}/coffee.png`,
        offers: {
          '@type': 'Offer',
          price: config.public.coffeePrice,
          priceCurrency: 'BRL',
          availability: 'https://schema.org/InStock',
          url: baseUrl,
        },
      }),
    },
  ],
})
</script>
