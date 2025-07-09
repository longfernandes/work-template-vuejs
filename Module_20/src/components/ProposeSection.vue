<template>
  <div class="bg-[#0F0F0F] py-12">
    <div class="max-w-[1290px] w-full mx-auto px-4">
      <!-- Header -->
      <div class="flex flex-wrap justify-between items-center">
        <h3 class="text-white font-semibold text-[1.8rem]">ĐƯỢC ĐỀ XUẤT</h3>
        <div class="flex gap-3 mt-4 lg:mt-0">
          <img src="/images/img-recommemded-1.svg" alt="PROPOSE" class="w-6 h-auto" />
          <img src="/images/img-recommemded-2.svg" alt="PROPOSE" class="w-6 h-auto" />
        </div>
      </div>

      <!-- Body -->
      <div class="flex flex-wrap gap-8 mt-10 justify-between">
        <div
          v-for="(item, index) in 4"
          :key="index"
          class="w-full sm:w-[48%] lg:w-[22%] flex flex-col relative"
        >
          <!-- Main image -->
          <img src="/images/propose-1.svg" alt="propose" class="w-full h-auto" />

          <!-- Overlay icon -->
          <img
            src="/images/propose-2.svg"
            alt="overlay"
            class="absolute z-10 top-[27%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] md:w-[40px] sm:w-[36px]"
          />

          <!-- Text -->
          <h4 class="text-white mt-6 text-base font-medium leading-[1.35]">
            Founder StressMama: 5 năm tới, chúng tôi sẽ vững chắc tại thị trường thời trang quốc tế (#WeTalk EP03)
          </h4>
          <a
            href="#!"
            class="inline-block bg-[#C7EA99] mt-5 font-medium text-[0.95rem] px-3 py-2 w-fit"
          >
            #We Talk
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
