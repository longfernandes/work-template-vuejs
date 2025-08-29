<template>
  <div class="bg-white cursor-pointer rounded p-2 hover:shadow-md transition">
    <img :src="product.image" :alt="product.title" class="w-full object-contain mb-2" />
    <h3 class="text-xl  font-bold line-clamp-2 ">{{ product.title }}</h3>
    <div class="mt-1">
      <p class="text-red-600 font-semibold">{{ product.price }}</p>
      <div v-if="product.oldPrice" class="text-xs text-gray-400 line-through">
        {{ product.oldPrice }}
      </div>
      <div v-if="product.discount" class="inline-block bg-red-500 text-white text-xs px-1 ml-1 rounded">
        {{ product.discount }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['product'])
</script>
