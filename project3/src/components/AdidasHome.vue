<template>
  <div class="bg-white-900 py-6 px-4">
    <div class="max-w-[1800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <div
        v-for="(item, idx) in features"
        :key="idx"
        class="flex items-center gap-3 bg-gray-800 text-white p-4 rounded-lg shadow-md h-30"
      >
        <div class="text-yellow-400" v-html="item.icon"></div>
        <p class="text-lg leading-snug" v-html="item.text"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2m0 0l1.5 13.5a1 1 0 01-1 1.5H6.5a1 1 0 01-1-1.5L7 7m10 0v10m-6-6h.01"/></svg>`,
    text: `Hệ thống <span class="text-yellow-400 font-bold">5 cửa hàng</span> hàng có sẵn`,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 6h18M5 6V4a2 2 0 012-2h10a2 2 0 012 2v2m-4 4h4l1 9H6l1-9h4"/></svg>`,
    text: `Giao hàng <span class="text-yellow-400 font-bold">Miễn phí</span>, Real time tracking`,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582a2 2 0 011.664.89L8.5 13.5a2 2 0 001.664.89H20v-5h-.582a2 2 0 01-1.664-.89L15.5 6.5a2 2 0 00-1.664-.89H4z"/></svg>`,
    text: `<span class="text-yellow-400 font-bold">Đổi trả thoải mái</span>, không giới hạn`,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    text: `<span class="text-yellow-400 font-bold">Gửi 2 chọn 1</span>, hỗ trợ thử size`,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636a9 9 0 11-12.728 0 9 9 0 0112.728 0zM12 7v5l3 3"/></svg>`,
    text: `<span class="text-yellow-400 font-bold">Hỗ trợ 24/7</span> qua tất cả các kênh`,
  },
];
</script>
