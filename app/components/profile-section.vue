<template>
  <div class="text-center mb-6">
    <NuxtImg
      :src="profileImage"
      :alt="name"
      class="w-16 h-16 rounded-full object-cover mb-3 mx-auto border-2 border-neutral-200"
      width="64"
      height="64"
      loading="eager"
    />
    <h1 class="text-xl font-semibold text-neutral-900">{{ name }}</h1>
    <SocialLinks
      :github="github"
      :linkedin="linkedin"
      :instagram="instagram"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  profileImage: string
  github?: string
  linkedin?: string
  instagram?: string
}>()
</script>
