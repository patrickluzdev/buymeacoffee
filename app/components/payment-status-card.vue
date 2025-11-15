<template>
  <div class="bg-neutral-50 rounded-lg p-4 mb-6">
    <p class="text-sm text-neutral-500 mb-1">Status</p>
    <p :class="statusClass" class="text-base font-semibold">{{ status }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  status: string
  variant: 'success' | 'error' | 'warning'
}>()

const statusClass = computed(() => {
  const variants = {
    success: 'text-green-600',
    error: 'text-red-600',
    warning: 'text-yellow-600'
  }
  return variants[props.variant]
})
</script>
