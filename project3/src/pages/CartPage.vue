<!-- src/pages/CartPage.vue -->


<template>
  <div class="max-w-[1200px] mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">🛒 Giỏ Hàng</h1>

    <div v-if="cartStore.items.length">
      <div
        v-for="item in cartStore.items"
        :key="item.id"
        class="flex items-center justify-between gap-6 border-b py-4"
      >
        <img :src="item.image" class="w-24 h-24 object-cover rounded" />
        <div class="flex-1">
          <h3 class="text-xl font-semibold">{{ item.name }}</h3>
          <p class="text-red-500 font-bold">{{ item.price }}$</p>
        </div>

        <div class="flex items-center gap-2">
          <BaseButton
            @click="cartStore.decreaseQty(item.id)"
            variant="secondary"
          >-</BaseButton>

          <span class="text-xl font-semibold">{{ item.quantity }}</span>

          <BaseButton
            @click="cartStore.increaseQty(item.id)"
            variant="secondary"
          >+</BaseButton>
        </div>

        <BaseButton
          @click="cartStore.removeFromCart(item.id)"
          variant="add"
        >
          Xóa
        </BaseButton>
      </div>

      <div class="text-right text-2xl font-bold mt-6">
        Tổng tiền: {{ totalPrice }}$
      </div>
    </div>

    <div v-else class="text-center text-gray-500 text-xl">
      Giỏ hàng trống.
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from '../common/BaseButton.vue'
import { useCartStore } from '../stores/cartStore'


const cartStore = useCartStore()

const totalPrice = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>
