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
                <form class="space-y-6" @submit.prevent="handleSubmit">
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <label class="block font-bold mb-4">Họ tên:</label>
                            <input
                                type="text"
                                v-model="form.fullName"
                                placeholder="Nhập họ tên"
                                class="w-full border rounded px-4 py-3"
                            />
                        </div>
                        <div>
                            <label class="block font-bold mb-4"
                                >Giới tính:</label
                            >
                            <select
                                v-model="form.gender"
                                class="w-full border rounded px-4 py-3"
                            >
                                <option value="">Lựa chọn</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                                <option value="Khác">Khác</option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-bold mb-4"
                                >Số điện thoại:</label
                            >
                            <input
                                type="text"
                                v-model="form.phone"
                                placeholder="Nhập số điện thoại"
                                class="w-full border rounded px-4 py-3"
                            />
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            <div>
                                <label class="block font-bold mb-4"
                                    >Ngày sinh:</label
                                >
                                <select
                                    v-model="form.day"
                                    class="w-full border rounded px-4 py-3"
                                >
                                    <option>Ngày</option>
                                    <option v-for="n in 31" :key="n" :value="n">
                                        {{ n }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label class="block font-bold mb-4 invisible"
                                    >Tháng</label
                                >
                                <select
                                    v-model="form.month"
                                    class="w-full border rounded px-4 py-3"
                                >
                                    <option>Tháng</option>
                                    <option v-for="n in 12" :key="n" :value="n">
                                        {{ n }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label class="block font-bold mb-4 invisible"
                                    >Năm</label
                                >
                                <select
                                    v-model="form.year"
                                    class="w-full border rounded px-4 py-3"
                                >
                                    <option>Năm</option>
                                    <option
                                        v-for="n in 100"
                                        :key="n"
                                        :value="2025 - n"
                                    >
                                        {{ 2025 - n }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-span-2">
                            <label class="block font-bold mb-4">Email:</label>
                            <input
                                type="email"
                                v-model="form.email"
                                placeholder="Nhập email nhận ưu đãi"
                                class="w-full border rounded px-4 py-3"
                            />
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <button
                            type="submit"
                            class="bg-orange-600 text-white font-bold px-6 py-3 rounded hover:bg-orange-700 mt-5"
                        >
                            Lưu thông tin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

// Khai báo form với reactive
const form = reactive({
    fullName: "",
    gender: "",
    phone: "",
    email: "",
    day: "",
    month: "",
    year: "",
});

const userName = ref("Nguyễn Văn A"); // Tên mặc định

// Hàm được gọi khi component được tạo ra để tải dữ liệu từ localStorage
onMounted(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        const savedData = JSON.parse(savedUser);
        form.fullName = savedData.fullName || "";
        form.gender = savedData.gender || "";
        form.phone = savedData.phone || "";
        form.email = savedData.email || "";
        form.day = savedData.day || "";
        form.month = savedData.month || "";
        form.year = savedData.year || "";
        userName.value = form.fullName || "Nguyễn Văn A"; // Cập nhật tên người dùng
    }
});

// Hàm xử lý gửi form
const handleSubmit = () => {
    // Kiểm tra tất cả các trường đã được điền chưa
    if (
        !form.fullName ||
        !form.gender ||
        !form.phone ||
        !form.email ||
        !form.day ||
        !form.month ||
        !form.year
    ) {
        alert("Vui lòng điền đầy đủ thông tin!");
    } else {
        // Lưu thông tin vào localStorage
        localStorage.setItem("user", JSON.stringify(form));

        // Cập nhật tên người dùng
        userName.value = form.fullName;

        // Hiển thị thông báo thành công
        alert("Lưu thông tin thành công!");

        // Reset form sau khi lưu thành công
        resetForm();
    }
};

// Hàm reset form
const resetForm = () => {
    form.fullName = "";
    form.gender = "";
    form.phone = "";
    form.email = "";
    form.day = "";
    form.month = "";
    form.year = "";
};
</script>

<style scoped>
/* Optional: Custom styles if needed */
</style>
