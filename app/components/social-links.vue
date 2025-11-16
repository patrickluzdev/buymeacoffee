<template>
  <div class="flex items-center justify-center gap-3 mt-4">
    <a
      v-if="github"
      :href="github"
      target="_blank"
      rel="noopener noreferrer"
      class="transition-transform hover:scale-110"
      aria-label="GitHub"
    >
      <Icon name="skill-icons:github-dark" :size="iconSize" />
    </a>

    <a
      v-if="linkedin"
      :href="linkedin"
      target="_blank"
      rel="noopener noreferrer"
      class="transition-transform hover:scale-110"
      aria-label="LinkedIn"
    >
      <Icon name="skill-icons:linkedin" :size="iconSize" />
    </a>

    <a
      v-if="instagram"
      :href="instagram"
      target="_blank"
      rel="noopener noreferrer"
      class="transition-transform hover:scale-110"
      aria-label="Instagram"
    >
      <Icon name="skill-icons:instagram" :size="iconSize" />
    </a>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  github?: string
  linkedin?: string
  instagram?: string
  iconSize?: number
}>(), {
  iconSize: 24
})
</script>
