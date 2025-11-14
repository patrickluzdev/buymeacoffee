<template>
  <div class="flex items-center justify-center gap-3 mb-6">
    <span class="text-3xl">☕</span>
    <span class="text-xl text-neutral-300 font-light">×</span>
    <button
      v-for="amount in amounts"
      :key="amount"
      :class="[
        'w-12 h-12 rounded-full border-[1.5px] text-base font-medium cursor-pointer transition-all duration-200',
        modelValue === amount
          ? 'bg-neutral-900 border-neutral-900 text-white'
          : 'bg-white border-neutral-300 text-neutral-600 hover:border-neutral-900'
      ]"
      @click="$emit('update:modelValue', amount)"
    >
      {{ amount }}
    </button>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: number
  amounts?: number[]
}>(), {
  amounts: () => [1, 3, 5]
})

defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>
