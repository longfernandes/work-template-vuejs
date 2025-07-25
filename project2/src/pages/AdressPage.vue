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

            <!-- Main Content -->
            <div
                class="w-3/4 mx-auto bg-white p-6 rounded-lg shadow-lg"
            >
                <h3 class="font-bold text-lg mb-4">Danh sách địa chỉ</h3>

                <!-- Add New Address Button -->
                <button
                    class="bg-blue-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-700 mb-6"
                    @click="openModal"
                >
                    Thêm địa chỉ mới
                </button>

                <!-- Address List -->
                <table class="w-full border-collapse">
                    <thead>
                        <tr>
                            <th class="border px-4 py-2">Loại địa chỉ</th>
                            <th class="border px-4 py-2">Địa chỉ</th>
                            <th class="border px-4 py-2">Số điện thoại</th>
                            <th class="border px-4 py-2">Chỉnh sửa</th>
                            <th class="border px-4 py-2">Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(address, index) in addresses" :key="index">
                            <td class="border px-4 py-2">{{ address.type }}</td>
                            <td class="border px-4 py-2">
                                {{ address.address }}
                            </td>
                            <td class="border px-4 py-2">
                                {{ address.phone }}
                            </td>
                            <td class="border px-4 py-2">
                                <button
                                    class="text-blue-500"
                                    @click="handleEdit(index)"
                                >
                                    Sửa
                                </button>
                            </td>
                            <td class="border px-4 py-2">
                                <button
                                    class="text-red-500"
                                    @click="handleDelete(index)"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Modal for Adding/Editing Address -->
        <div
            v-if="isModalOpen"
            class="fixed inset-0 bg-white-500 bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto"
        >
            <div
                class="bg-white rounded-lg p-8 w-200 max-h-screen overflow-y-auto"
            >
                <h2 class="font-bold text-lg mb-4">Thêm/Sửa địa chỉ</h2>
                <form @submit.prevent="handleSubmit">
                    <div class="grid grid-cols-2 gap-6">
                        <!-- Left Column -->
                        <div>
                            <label class="block font-bold">Loại địa chỉ:</label>
                            <select
                                v-model="newAddress.type"
                                class="w-full border rounded px-4 py-3"
                            >
                                <option value="Địa chỉ nhà">Địa chỉ nhà</option>
                                <option value="Địa chỉ công ty">
                                    Địa chỉ công ty
                                </option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-bold">Họ tên:</label>
                            <input
                                type="text"
                                v-model="newAddress.name"
                                class="w-full border rounded px-4 py-3"
                                placeholder="Nhập họ tên"
                            />
                        </div>
                        <div>
                            <label class="block font-bold"
                                >Số điện thoại:</label
                            >
                            <input
                                type="text"
                                v-model="newAddress.phone"
                                class="w-full border rounded px-4 py-3"
                                placeholder="Nhập số điện thoại"
                            />
                        </div>
                        <div>
                            <label class="block font-bold">Địa chỉ:</label>
                            <input
                                type="text"
                                v-model="newAddress.address"
                                class="w-full border rounded px-4 py-3"
                                placeholder="Nhập địa chỉ"
                            />
                        </div>

                        <!-- Right Column -->
                        <div>
                            <label class="block font-bold"
                                >Tỉnh/ Thành phố:</label
                            >
                            <input
                                type="text"
                                v-model="newAddress.city"
                                class="w-full border rounded px-4 py-3"
                                placeholder="Nhập tỉnh/ thành phố"
                            />
                        </div>
                        <div>
                            <label class="block font-bold">Quận/ Huyện:</label>
                            <input
                                type="text"
                                v-model="newAddress.district"
                                class="w-full border rounded px-4 py-3"
                                placeholder="Nhập quận/ huyện"
                            />
                        </div>
                        <div>
                            <label class="block font-bold">Phường/ Xã:</label>
                            <input
                                type="text"
                                v-model="newAddress.subDistrict"
                                class="w-full border rounded px-4 py-3"
                                placeholder="Nhập phường/xã"
                            />
                        </div>
                        <div class="flex items-center mt-4">
                            <input
                                type="checkbox"
                                v-model="newAddress.isDefault"
                            />
                            <label class="ml-2">Đặt làm mặc định</label>
                        </div>
                    </div>
                    <div class="flex justify-between mt-6">
                        <button
                            type="button"
                            @click="closeModal"
                            class="bg-gray-500 text-white font-bold px-6 py-3 rounded"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            class="bg-orange-600 text-white font-bold px-6 py-3 rounded hover:bg-orange-700"
                        >
                            Lưu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

const addresses = ref([]);
const newAddress = reactive({
    type: "Địa chỉ nhà",
    name: "",
    phone: "",
    city: "",
    district: "",
    subDistrict: "",
    address: "",
    isDefault: false,
});
const isModalOpen = ref(false);
const editingIndex = ref(null);
const userName = ref("Nguyễn Văn A"); // Tên mặc định

// Lấy dữ liệu địa chỉ từ localStorage khi trang được tải
onMounted(() => {
    const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    addresses.value = savedAddresses;

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        const savedData = JSON.parse(savedUser);
        userName.value = savedData.fullName || "Nguyễn Văn A"; // Đồng bộ tên người dùng
    }
});

// Handle form changes
const handleChange = (e) => {
    newAddress[e.target.name] = e.target.value;
};

// Handle adding or editing address
const handleSubmit = () => {
    let updatedAddresses = [...addresses.value];
    if (editingIndex.value !== null) {
        updatedAddresses[editingIndex.value] = newAddress;
    } else {
        updatedAddresses.push(newAddress);
    }

    addresses.value = updatedAddresses;
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));

    isModalOpen.value = false;
    resetForm();
    alert("Địa chỉ đã được lưu thành công!");
};

// Handle opening the modal
const openModal = () => {
    isModalOpen.value = true;
    resetForm();
    editingIndex.value = null;
};

// Handle editing an address
const handleEdit = (index) => {
    newAddress.type = addresses.value[index].type;
    newAddress.name = addresses.value[index].name;
    newAddress.phone = addresses.value[index].phone;
    newAddress.city = addresses.value[index].city;
    newAddress.district = addresses.value[index].district;
    newAddress.subDistrict = addresses.value[index].subDistrict;
    newAddress.address = addresses.value[index].address;
    newAddress.isDefault = addresses.value[index].isDefault;

    isModalOpen.value = true;
    editingIndex.value = index;
};

// Handle deleting an address
const handleDelete = (index) => {
    const updatedAddresses = addresses.value.filter((_, i) => i !== index);
    addresses.value = updatedAddresses;
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    alert("Địa chỉ đã được xóa!");
};

// Handle closing the modal
const closeModal = () => {
    isModalOpen.value = false;
};

// Reset form to default values
const resetForm = () => {
    newAddress.type = "Địa chỉ nhà";
    newAddress.name = "";
    newAddress.phone = "";
    newAddress.city = "";
    newAddress.district = "";
    newAddress.subDistrict = "";
    newAddress.address = "";
    newAddress.isDefault = false;
};
</script>

<style scoped>
/* Optional: Custom styles if needed */
</style>
