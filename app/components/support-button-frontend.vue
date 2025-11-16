<template>
  <div>
    <button
      v-if="!preferenceId"
      @click="createPreference"
      :disabled="loading"
      class="w-full py-3 bg-neutral-900 text-white rounded-lg text-base font-medium hover:bg-neutral-800 transition-colors disabled:bg-neutral-400 disabled:cursor-not-allowed"
    >
      {{ loading ? loadingText : `Apoiar R$ ${totalPrice}` }}
    </button>
    <div v-else id="walletBrick_container_frontend"></div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/app/types/product';

const props = defineProps<{
  product: Product
  quantity: number
}>()

const config = useRuntimeConfig()
const loading = ref(false)
const preferenceId = ref<string | null>(null)

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

const createPreference = async () => {
  loading.value = true

  try {
    const response = await $fetch('/api/checkout', {
      method: 'POST',
      body: {
        productId: props.product.id,
        quantity: props.quantity
      }
    })

    preferenceId.value = response.preferenceId

    // Aguarda um pouco para garantir que o container foi renderizado
    await nextTick()

    // Inicializa o SDK do Mercado Pago
    renderWalletBrick()
  } catch (error) {
    console.error('Erro ao criar preferência:', error)
    alert('Erro ao processar pagamento. Tente novamente.')
  } finally {
    loading.value = false
  }
}

const renderWalletBrick = () => {
  // @ts-ignore - MercadoPago é carregado via script externo
  if (!window.MercadoPago) {
    console.error('MercadoPago SDK não carregado')
    return
  }

  // @ts-ignore
  const mp = new window.MercadoPago(config.public.mercadoPagoPublicKey)
  const bricksBuilder = mp.bricks()

  bricksBuilder.create('wallet', 'walletBrick_container_frontend', {
    initialization: {
      preferenceId: preferenceId.value,
    },
  })
}
</script>
