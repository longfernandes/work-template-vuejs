<template>
  <div class="w-full mx-auto">
    <div class="relative overflow-hidden shadow-lg bg-[#364d79]">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${current * 100}%)` }"
      >
        <div
          v-for="(item, idx) in slides"
          :key="idx"
          class="w-full flex-shrink-0 flex  items-center justify-center h-200"
        >
          <img :src="item.img" :alt="'slide-'+idx"
               class="object-cover w-full h-full " />
        </div>
      </div>
      <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <button
          v-for="(item, idx) in slides"
          :key="idx"
          @click="current = idx"
          class="w-3 h-3 rounded-full border border-white"
          :class="current === idx ? 'bg-white' : 'bg-gray-400 opacity-60'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slides = [
  {
    img: 'https://file.hstatic.net/1000061481/file/1.1_3bcdd8f20f99429cb5a43c39f1541a6f.jpg',
    
  },
  {
    img: 'https://png.pngtree.com/thumb_back/fh260/background/20240410/pngtree-football-scene-at-night-match-with-close-up-of-a-soccer-image_15654204.jpg',
    
  },
  {
    img: 'https://myshoes.vn/image/catalog/blog/23.11/chon-giay-the-thao-theo-vi-tri-choi-bong.jpg',
  },
  {
    img: 'https://thethaodonga.com/wp-content/uploads/2023/05/anh-giay-da-bong-dep-2.jpg',
  },
]
const current = ref(0)

function next() {
  current.value = (current.value + 1) % slides.length
}
function prev() {
  current.value = (current.value - 1 + slides.length) % slides.length
}
</script>
