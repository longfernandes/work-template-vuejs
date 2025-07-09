<template>
  <div class="w-full mb-10">
    <div class="max-w-[1290px] mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-10">
        <!-- LEFT -->
        <div class="w-full lg:w-1/2">
          <h3 class="text-4xl font-semibold mb-6">CONTACT</h3>
          <p class="font-medium leading-relaxed max-w-[450px]">
            Kết nối với Z-Lab để cùng hiểu thêm về Gen Z. Và nhận insight cũng như các báo cáo định kỳ về GenZ
          </p>
        </div>

        <!-- RIGHT -->
        <div class="w-full lg:w-1/2 space-y-6">
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="w-full">
              <label for="name" class="block font-medium text-[1.1rem] mb-1">Tên</label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full h-11 px-4 rounded-lg bg-[#f5f5f5] text-base outline-none"
              />
            </div>
            <div class="w-full">
              <label for="phone" class="block font-medium text-[1.1rem] mb-1">Số điện thoại</label>
              <input
                type="text"
                id="number"
                name="number"
                class="w-full h-11 px-4 rounded-lg bg-[#f5f5f5] text-base outline-none"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block font-medium text-[1.1rem] mb-1">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              class="w-full h-11 px-4 rounded-lg bg-[#f5f5f5] text-base outline-none"
            />
          </div>

          <div>
            <label for="message" class="block font-medium text-[1.1rem] mb-1">Lời nhắn</label>
            <input
              type="text"
              id="message"
              name="message"
              v-model="message"
              class="w-full h-[89px] px-4 py-2 rounded-lg bg-[#f5f5f5] text-base outline-none"
            />
          </div>

          <button
            @click="sendMessage"
            class="bg-[#1b1b1b] text-white font-medium px-6 py-2 rounded hover:bg-[#85e8ff] transition-colors"
          >
            GỬI LỜI NHẮN
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");

function sendMessage() {
  if (message.value.trim() === "") {
    alert("Vui lòng nhập lời nhắn!");
    return;
  }

  alert("Gửi lời nhắn thành công!");
  message.value = "";
}
</script>
