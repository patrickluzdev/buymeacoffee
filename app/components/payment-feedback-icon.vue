<template>
  <div :class="containerClass" class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
    <Icon :name="icon" size="56" :class="iconClass" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  variant: 'success' | 'error' | 'warning'
}>()

const containerClass = computed(() => {
  const variants = {
    success: 'bg-green-100',
    error: 'bg-red-100',
    warning: 'bg-yellow-100'
  }
  return variants[props.variant]
})

const iconClass = computed(() => {
  const variants = {
    success: 'text-green-600',
    error: 'text-red-600',
    warning: 'text-yellow-600'
  }
  return variants[props.variant]
})
</script>
