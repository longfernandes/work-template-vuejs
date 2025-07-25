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
            <div
                class="w-3/4 mx-auto bg-white p-6 rounded-lg shadow-lg"
            >
                <h2 class="text-2xl font-bold text-center mb-6">
                    Quản Lý Đơn Hàng
                </h2>

                <table
                    class="w-full table-auto border-collapse border border-gray-300"
                >
                    <thead>
                        <tr>
                            <th class="border px-4 py-2">Tên</th>
                            <th class="border px-4 py-2">Số Lượng</th>
                            <th class="border px-4 py-2">Ngày Đặt</th>
                            <th class="border px-4 py-2">Trạng Thái</th>
                            <th class="border px-4 py-2">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in orders" :key="order.id">
                            <td class="border px-4 py-2 text-center">
                                {{ order.receiverInfo.name }}
                            </td>
                            <td class="border px-4 py-2 text-center">
                                {{ order.cartItems.length }} sản phẩm
                            </td>
                            <td class="border px-4 py-2 text-center">
                                {{ order.createdAt }}
                            </td>
                            <td class="border px-4 py-2 text-center">
                                <span
                                    :class="
                                        order.status === 'completed'
                                            ? 'text-green-500'
                                            : 'text-orange-500'
                                    "
                                >
                                    {{
                                        order.status === "completed"
                                            ? "Hoàn Thành"
                                            : "Chưa Hoàn Thành"
                                    }}
                                </span>
                            </td>
                            <td class="border px-4 py-2 text-center">
                                <button
                                    @click="updateStatus(order.id)"
                                    class="bg-orange-600 text-white px-4 py-2 rounded mr-2"
                                >
                                    Cập Nhật Trạng Thái
                                </button>
                                <button
                                    @click="removeOrder(order.id)"
                                    class="bg-red-600 text-white px-4 py-2 rounded"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const userName = ref("Nguyễn Văn A"); // Tên mặc định

const orders = ref([]);

onMounted(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.value = storedOrders;

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        const savedData = JSON.parse(savedUser);
        userName.value = savedData.fullName || "Nguyễn Văn A"; // Đồng bộ tên người dùng
    }
});

const updateStatus = (id) => {
    const order = orders.value.find((order) => order.id === id);
    if (order) {
        order.status = order.status === "completed" ? "pending" : "completed";
        localStorage.setItem("orders", JSON.stringify(orders.value));
    }
};

const removeOrder = (id) => {
    orders.value = orders.value.filter((order) => order.id !== id);
    localStorage.setItem("orders", JSON.stringify(orders.value));
};
</script>
