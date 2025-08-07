<template>
  <div class="flex justify-center items-start bg-gray-100 px-4 py-6">
    <!-- Container -->
    <div class="flex flex-col md:flex-row w-full max-w-8xl bg-gray-300 rounded-lg gap-6 md:gap-10 px-4 md:px-10 py-6 md:py-16">
      
      <!-- Sidebar -->
      <div class="w-full md:w-1/4 bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
        <div class="flex flex-col items-center">
          <div class="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full flex items-center justify-center text-4xl md:text-5xl mb-4">
            👤
          </div>
          <p class="font-bold text-lg text-center break-words">{{ userName }}</p>
        </div>
        <ul class="mt-6 space-y-3 text-base text-gray-700">
          <li>
            <router-link to="/profile" class="font-medium flex items-center gap-2 hover:text-green-500">
              📝 Thông tin cá nhân
            </router-link>
          </li>
          <li>
            <router-link to="/address" class="font-medium flex items-center gap-2 hover:text-green-500">
              📍 Cài đặt địa chỉ
            </router-link>
          </li>
          <li>
            <router-link to="/orders" class="font-medium flex items-center gap-2 hover:text-green-500">
              🛒 Quản lý đơn hàng
            </router-link>
          </li>
          <li>
            <router-link to="/saved-codes" class="font-medium flex items-center gap-2 hover:text-green-500">
              🔖 Mã đã lưu
            </router-link>
          </li>
          <li>
            <router-link to="/signin" class="font-medium flex items-center gap-2 hover:text-red-500">
              🚪 Đăng xuất
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="w-full md:w-3/4 bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <div class="max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md">
          <!-- Coupon Banner -->
          <div class="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <!-- Image -->
            <img
              src="https://nemkhuyenmai.com/wp-content/uploads/2022/07/200k.png"
              alt="Coupon Image"
              class="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-md"
            />

            <!-- Coupon Info -->
            <div class="flex flex-col justify-between text-center sm:text-left">
              <h2 class="font-semibold text-base sm:text-lg">
                Coupon 200.000đ
              </h2>
              <p class="text-xs sm:text-sm text-gray-500">
                Áp dụng từ 25/07/2025 - 31/08/2025
              </p>
              <button class="mt-2 text-blue-500 text-sm cursor-pointer hover:underline">
                Sử dụng ngay
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script setup>
import {  ref, onMounted } from "vue";

// Khai báo form với reactive

const userName = ref("Nguyễn Văn A"); // Tên mặc định

onMounted(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        const savedData = JSON.parse(savedUser);
        userName.value = savedData.fullName || "Nguyễn Văn A"; // Đồng bộ tên người dùng
    }
});
</script>

<style scoped></style>
