<template>
    <div
        class="flex justify-center items-start bg-gray-100 px-4 py-6"
    >
        <!-- Container -->
        <div
            class="flex flex-col md:flex-row w-full max-w-8xl bg-gray-300 rounded-lg gap-6 md:gap-10 px-4 md:px-10 py-6 md:py-16"
        >
            <!-- Sidebar -->
            <div
                class="w-full md:w-1/4 bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
            >
                <div class="flex flex-col items-center">
                    <div
                        class="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full flex items-center justify-center text-4xl md:text-5xl mb-4"
                    >
                        👤
                    </div>
                    <p class="font-bold text-lg text-center break-words">{{ userName }}</p>
                </div>
                <ul class="mt-6 space-y-3 text-base text-gray-700">
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

            <!-- Main Content -->
            <div
                class="w-full md:w-3/4 bg-white p-4 md:p-6 rounded-lg shadow-lg"
            >
                <h2 class="text-xl md:text-2xl font-bold text-center mb-6">
                    Quản Lý Đơn Hàng
                </h2>

                <!-- Responsive Table -->
                <div class="overflow-x-auto">
                    <table
                        class="w-full table-auto border-collapse border border-gray-300 min-w-[600px]"
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
                                <td
                                    class="border px-4 py-2 text-center space-y-2 md:space-y-0 md:space-x-2"
                                >
                                    <button
                                        @click="updateStatus(order.id)"
                                        class="bg-orange-600 text-white px-3 py-2 text-sm rounded cursor-pointer"
                                    >
                                        Cập Nhật
                                    </button>
                                    <button
                                        @click="removeOrder(order.id)"
                                        class="bg-red-600 text-white px-3 py-2 text-sm rounded cursor-pointer"
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
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const userName = ref("Nguyễn Văn A"); 

const orders = ref([]);

onMounted(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.value = storedOrders;

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        const savedData = JSON.parse(savedUser);
        userName.value = savedData.fullName || "Nguyễn Văn A";
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
