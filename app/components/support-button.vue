<template>
  <form method="POST" action="/api/checkout">
    <input type="hidden" name="productId" :value="product.id" />
    <input type="hidden" name="quantity" :value="quantity" />
    <button
      type="submit"
      class="w-full py-3 bg-neutral-900 text-white rounded-lg text-base font-medium hover:bg-neutral-800 transition-colors"
    >
      Apoiar R$ {{ totalPrice }}
    </button>
  </form>
</template>

<script setup lang="ts">
import type { Product } from '~/app/types/product'

const props = defineProps<{
  product: Product
  quantity: number
}>()

const totalPrice = computed(() => {
  const total = props.product.price * props.quantity
  return total.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
})
</script>
