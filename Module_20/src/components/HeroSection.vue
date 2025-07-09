<template>
  <div class="report py-10">
    <div class="container mx-auto px-4 max-w-[1290px]">
      <h3 class="text-2xl font-bold mb-8">LASTEST REPORT</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(card, index) in reports"
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <img :src="card.image" :alt="card.alt" class="w-full h-auto" />
          <div class="p-4">
            <h4 class="font-semibold text-base mb-3 leading-snug">
              {{ card.title }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tag, i) in card.tags"
                :key="i"
                class="bg-gray-100 px-2 py-1 text-sm rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportSection",
  data() {
    return {
      reports: [
        {
          image: "/images/report-1.svg",
          alt: "report-1",
          title: "Z đi Music Fest: Nhìn GenZ chill nhạc brand phiêu được gì?",
          tags: ["[Z-Finance]", "[Z-Talk]"],
        },
        {
          image: "/images/report-2.svg",
          alt: "report-2",
          title:
            "Soi Profile của GenZ trên mạng xã hội: Bỏ túi mẹo tán đổi GenZ",
          tags: ["[Z-Talk]", "[Z-Song]"],
        },
        {
          image: "/images/report-3.svg",
          alt: "report-3",
          title:
            "Trẻ người, non-stop, điều gì ảnh hưởng tới quyết định mua sắm không hồi kết của GenZ?",
          tags: ["[Z-Finance]", "[Z-Finance]"],
        },
        {
          image: "/images/report-4.svg",
          alt: "report-4",
          title:
            "Đốt sức kiếm thu nhập - Không ngại nói về tiền: Quan điểm tài chính của GenZ khác thế hệ trước thế nào?",
          tags: ["[Z-Finance]", "[Z-Finance]"],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Không cần CSS nếu đã dùng Tailwind hoàn toàn */
</style>
