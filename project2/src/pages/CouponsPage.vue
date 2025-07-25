<template>
    <div class="flex justify-center items-center bg-gray-100">
        <!-- Container chứa Sidebar và Form content -->
        <div class="flex w-full max-w-8xl bg-gray-300 py-16 px-20 gap-10">
            <!-- Sidebar Container -->
            <div
                class="w-1/4 bg-white shadow-md rounded-lg p-8 flex flex-col justify-between"
            >
                <div class="flex flex-col items-center">
                    <div
                        class="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-5xl mb-4"
                    >
                        👤
                    </div>
                    <p class="font-bold text-lg">{{ userName }}</p>
                    <!-- Hiển thị tên người dùng -->
                </div>
                <ul class="mt-6 space-y-4 text-lg text-gray-700">
                    <li>
                        <router-link
                            to="/profile"
                            class="font-medium flex items-center gap-2 hover:text-green-500"
                        >
                            📝 Thông tin cá nhân
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/address"
                            class="font-medium flex items-center gap-2 hover:text-green-500"
                        >
                            📍 Cài đặt địa chỉ
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/orders"
                            class="font-medium flex items-center gap-2 hover:text-green-500"
                        >
                            🛒 Quản lý đơn hàng
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/saved-codes"
                            class="font-medium flex items-center gap-2 hover:text-green-500"
                        >
                            🔖 Mã đã lưu
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/signin"
                            class="font-medium flex items-center gap-2 hover:text-red-500"
                        >
                            🚪 Đăng xuất
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- Form Content Container -->
            <div class="w-3/4 mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div
                    class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md"
                >
                    <!-- Coupon Banner -->
                    <div class="flex items-center space-x-4">
                        <!-- Image -->
                        <img
                            src="https://nemkhuyenmai.com/wp-content/uploads/2022/07/200k.png"
                            alt="Coupon Image"
                            class="w-20 h-20 object-cover rounded-md"
                        />

                        <!-- Coupon Information -->
                        <div class="flex flex-col justify-between">
                            <h2 class="font-semibold text-lg">
                                Coupon 200.000đ
                            </h2>
                            <p class="text-sm text-gray-500">
                                Áp dụng từ 25/07/2025 - 31/08/2025
                            </p>
                            <button
                                class="mt-2 text-blue-500 text-sm cursor-pointer hover:underline"
                            >
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
