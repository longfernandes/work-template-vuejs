<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BaseButton from "../common/BaseButton.vue";
import { useBrandProductStore } from "../stores/brandProductStore";
import { useCartStore } from "../stores/cartStore";

const route = useRoute();
const brand = route.params.brand;
const id = route.params.id.toString();

const store = useBrandProductStore();
const cartStore = useCartStore();

const product = ref(null);


onMounted(() => {
  store.loadProductsByBrand(brand);
  product.value = store.getProductById(brand, id);
});


const cartItem = computed(() =>
  cartStore.items.find((item) => item.id.toString() === id)
);

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value);
  }
};


const increase = () => cartStore.increaseQty(id);
const decrease = () => cartStore.decreaseQty(id);
</script>

<template>
  <div v-if="product" class="p-6 max-w-[1800px] mx-auto">
    <div class="flex flex-col md:flex-row gap-10 items-start">
      
      <img
        :src="product.image"
        alt="product image"
        class="w-full md:w-[50%] object-cover rounded shadow"
      />

      <div class="flex-1 space-y-6">
        <h1 class="text-4xl font-bold">{{ product.name }}</h1>
        <p class="text-gray-600 text-lg">{{ product.description }}</p>
        <p class="text-red-500 text-3xl font-bold">{{ product.price }}$</p>

        <div v-if="cartItem">
          <div class="flex items-center gap-4">
            <BaseButton
              @click="decrease"
              variant="secondary"
              size="sm"
            >
              -
            </BaseButton>
            <span class="text-xl font-bold">{{ cartItem.quantity }}</span>
            <BaseButton
              @click="increase"
              variant="secondary"
              size="sm"
            >
              +
            </BaseButton>
          </div>
        </div>

        <div v-else>
          <BaseButton
            @click.stop.prevent="addToCart"
            variant="add"
            
          >
            Thêm vào giỏ hàng
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
