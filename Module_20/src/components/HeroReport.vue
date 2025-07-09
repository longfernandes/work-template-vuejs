<template>
  <div>
    <div class="w-full mt-10">
      <div class="max-w-[1290px] mx-auto px-4">
        <div class="flex flex-col xl:flex-row justify-between gap-10">
          <!-- Left Report -->
          <div class="w-full xl:w-[48%]">
            <h2 class="font-extrabold text-[1.8rem] mb-9">LASTEST REPORT</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(item, index) in latestReports"
                :key="'latest-' + index"
                class="space-y-4"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="mb-3 w-full rounded"
                />
                <h4 class="font-semibold text-[1.2rem] w-[90%]">
                  {{ item.title }}
                </h4>
                <div class="flex gap-2">
                  <span class="bg-[#f2f2f2] px-2 py-1 text-sm">#hashtag1</span>
                  <span class="bg-[#f2f2f2] px-2 py-1 text-sm">#hashtag2</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="hidden xl:block w-px bg-black/40 mx-6 h-[660px] -mt-10"></div>

          <!-- Right Report -->
          <div class="w-full xl:w-[48%]">
            <h2 class="font-extrabold text-[1.8rem] mb-9">EDITOR PICK</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(item, index) in editorPicks"
                :key="'editor-' + index"
                class="space-y-4"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="mb-3 w-full rounded"
                />
                <h4 class="font-semibold text-[1.2rem] w-[90%]">
                  {{ item.title }}
                </h4>
                <div class="flex gap-2">
                  <span class="bg-[#f2f2f2] px-2 py-1 text-sm">#hashtag1</span>
                  <span class="bg-[#f2f2f2] px-2 py-1 text-sm">#hashtag2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Divider -->
    <hr class="border-t border-black/40 lg:mt-0 md:mt-10" />
  </div>
</template>

<script setup>
const latestReports = [
  {
    image: "/images/report-1.svg",
    title:
      "Z đi Music Fest: Nhìn GenZ chill nhạc brand phiêu được gì?",
  },
  {
    image: "/images/report-2.svg",
    title:
      "Soi Profile của GenZ trên mạng xã hội: Bỏ túi mẹo tán đổi GenZ",
  },
];

const editorPicks = [
  {
    image: "/images/report-3.svg",
    title:
      "“Trẻ người, non-stop” điều gì ảnh hưởng tới quyết định mua sắm không hồi kết của GenZ?",
  },
  {
    image: "/images/report-4.svg",
    title:
      "“Đốt sức” kiếm thu nhập - Quan điểm tài chính của GenZ khác thế hệ trước thế nào?",
  },
];
</script>
