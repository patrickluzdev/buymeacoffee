<template>
  <button
    class="w-full py-3 bg-neutral-900 text-white rounded-lg text-base font-medium cursor-pointer transition-all duration-200 hover:bg-black"
    @click="$emit('click')"
  >
    Apoiar R$ {{ amount * pricePerCoffee }}
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  amount: number
  pricePerCoffee?: number
}>(), {
  pricePerCoffee: 5
})

defineEmits<{
  click: []
}>()
</script>
