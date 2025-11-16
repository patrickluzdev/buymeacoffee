<template>
  <form method="POST" action="/api/checkout" @submit="handleSubmit">
    <input type="hidden" name="productId" :value="product.id" />
    <input type="hidden" name="quantity" :value="quantity" />
    <button
      type="submit"
      :disabled="loading"
      class="w-full py-3 bg-neutral-900 text-white rounded-lg text-base font-medium hover:bg-neutral-800 transition-colors disabled:bg-neutral-400 disabled:cursor-not-allowed"
    >
      {{ loading ? loadingText : `Apoiar R$ ${totalPrice}` }}
    </button>
  </form>
</template>

<script setup lang="ts">
import type { Product } from '~/app/types/product';

const props = defineProps<{
  product: Product
  quantity: number
}>()

const loading = ref(false)

const totalPrice = computed(() => {
  const total = props.product.price * props.quantity
  return total.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
})

const loadingTexts = [
  'Preparando seu apoio...',
  'Enviando cafézinho...',
  'Processando generosidade...',
  'Quase lá...',
  'Finalizando...',
]

const loadingText = computed(() => {
  return loadingTexts[Math.floor(Math.random() * loadingTexts.length)]
})

const handleSubmit = () => {
  loading.value = true
}
</script>
