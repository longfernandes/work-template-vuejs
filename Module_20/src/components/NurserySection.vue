<template>
  <div class="w-full py-20">
    <div class="max-w-[1290px] w-full mx-auto px-4">
      <h3 class="text-2xl font-semibold text-center text-[#1b1b1b] mb-12">VƯỜN ƯƠM</h3>

      <div class="flex flex-wrap justify-between gap-5">
        <div
          v-for="(item, index) in cards"
          :key="index"
          :class="['flex flex-col items-center text-center justify-between rounded-lg px-6 py-8 min-h-[450px] w-full sm:w-[48%] lg:w-[23%]', item.bg]"
        >
          <div class="flex justify-center items-center w-full h-[200px] my-8">
            <img :src="item.image" :alt="'nursery-' + (index + 1)" class="h-full object-contain" />
          </div>
          <h4 class="text-[1.4rem] font-semibold mt-2">{{ item.title }}</h4>
          <p class="text-[1.1rem] font-medium leading-tight mt-2">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
    <hr class="mt-15 border-t border-gray-300" />
  </div>
</template>

<script setup>
const cards = [
  {
    image: "/images/nursery-1.svg",
    title: "Z-SONG",
    desc: "Phòng nghiên cứu trực thuộc tổ hợp top 1 về công nghệ, media, báo chí, truyền thông Marketing",
    bg: "bg-[#F1C0D2]",
  },
  {
    image: "/images/nursery-2.svg",
    title: "Z-DICTIONARY",
    desc: "Phòng nghiên cứu trực thuộc tổ hợp top 1 về công nghệ, media, báo chí, truyền thông Marketing",
    bg: "bg-[#C7EA99]",
  },
  {
    image: "/images/nursery-3.svg",
    title: "Z-CARDS",
    desc: "Phòng nghiên cứu trực thuộc tổ hợp top 1 về công nghệ, media, báo chí, truyền thông Marketing",
    bg: "bg-[#C0E3E3]",
  },
  {
    image: "/images/nursery-4.svg",
    title: "Z-QUIZ",
    desc: "Phòng nghiên cứu trực thuộc tổ hợp top 1 về công nghệ, media, báo chí, truyền thông Marketing",
    bg: "bg-[#F16A1E]",
  },
];
</script>
