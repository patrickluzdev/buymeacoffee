<template>
  <div class="min-h-screen bg-neutral-100 flex items-center justify-center px-4 py-8">
    <div class="flex flex-col lg:flex-row gap-6 w-full max-w-[400px]">
      <div class="bg-white rounded-2xl py-8 px-8 shadow-md border border-neutral-200 flex-1">
        <ProfileSection
          :name="config.public.profileName"
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
const profileName = config.public.profileName
const pageTitle = `Buy Me a Coffee - ${profileName}`
const pageDescription = `Apoie ${profileName} com um café! Contribua com R$ ${config.public.coffeePrice},00 e ajude a manter meus projetos de desenvolvimento de software.`
const ogImage = `${baseUrl}/profile.jpeg`

useHead({
  title: pageTitle,
  link: [
    { rel: 'canonical', href: baseUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profileName,
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
        description: `Apoie ${profileName} com um café virtual e ajude a manter seus projetos de desenvolvimento de software.`,
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

useSeoMeta({
  description: pageDescription,
  keywords: 'buy me a coffee, apoiar desenvolvedor, doação, café, contribuição, developer support',
  author: profileName,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogImage,
  ogImageSecureUrl: ogImage,
  ogImageType: 'image/jpeg',
  ogImageWidth: '400',
  ogImageHeight: '400',
  ogImageAlt: `${profileName} - Desenvolvedor de Software`,
  ogUrl: baseUrl,
  ogType: 'website',
  ogLocale: 'pt_BR',
  ogSiteName: 'Buy Me a Coffee',
  twitterCard: 'summary',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: ogImage,
  twitterImageAlt: `${profileName} - Desenvolvedor de Software`,
})
</script>
