<template>
    <div class="max-w-6xl mx-auto px-4 py-8">
        <div
            class="flex flex-col sm:flex-row sm:justify-between items-center mb-6"
        >
            <h1 class="text-4xl font-bold text-center w-full sm:w-auto">
                List menu
            </h1>
            <button
                v-if="isLoggedIn"
                @click="showModal = true"
                class="mt-4 sm:mt-0 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-800"
            >
                Tạo menu cá nhân
            </button>
        </div>

        <p v-if="menus.length === 0">Chưa có menu nào.</p>
        <div
            v-for="(menu, idx) in menus"
            :key="idx"
            class="border-orange-500 rounded-xl mb-6 p-4 bg-white shadow"
        >
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h3 class="text-xl font-semibold">
                        {{ menu.name }} ({{ menu.type }})
                    </h3>
                    <span class="font-bold text-red-600">
                        Tổng tiền: ${{ calculateTotal(menu.items) }}
                    </span>
                </div>
                <div class="flex gap-2">
                    <button
                        v-if="isLoggedIn"
                        @click="handleDeleteMenu(idx)"
                        class="bg-gray-200 text-red-600 px-3 py-1 rounded hover:bg-gray-300"
                    >
                        Xóa
                    </button>
                    <button
                        @click="handleSelectMenu(menu, idx)"
                        class="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-800"
                    >
                        Chọn menu
                    </button>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <img
                    v-if="menu.items.length > 0"
                    :src="menu.items[0].image"
                    alt="menu thumbnail"
                    class="w-28 h-28 object-cover rounded"
                />
                <ul class="flex-1 font-bold space-y-1">
                    <li
                        v-for="item in menu.items"
                        :key="item.id"
                        class="text-sm text-gray-700 flex justify-between"
                    >
                        <span>• {{ item.name }}</span>
                        <span class="text-gray-500">${{ item.price }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <CreateMenuModal
            v-if="showModal"
            @close="showModal = false"
            @save="refreshMenus"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CreateMenuModal from "../components/CreateMenuModel.vue";
import { useCartStore } from "../store/cartStore"; // Pinia cart store

const menus = ref([]);
const showModal = ref(false);
const isLoggedIn = ref(false);

const cartStore = useCartStore();

onMounted(() => {
    refreshMenus();
    const user = localStorage.getItem("user");
    isLoggedIn.value = !!user;
});

const refreshMenus = () => {
    const saved = JSON.parse(localStorage.getItem("menus") || "[]");
    menus.value = saved;
};

const calculateTotal = (items) => {
    return items
        .reduce((sum, item) => sum + parseFloat(item.price), 0)
        .toFixed(2);
};

const handleDeleteMenu = (indexToDelete) => {
    menus.value.splice(indexToDelete, 1);
    localStorage.setItem("menus", JSON.stringify(menus.value));
};

const handleSelectMenu = (menu, idx) => {
    const menuItem = {
        id: menu.id || `menu-${idx}`,
        name: menu.name,
        price: parseFloat(calculateTotal(menu.items)),
        quantity: 1,
        type: "menu",
        image: "https://amia.vn/wp-content/uploads/2021/10/hinh-anh-cac-mon-an-ngon-nhan-lam-theo-yeu-cau-rieng.jpg",
    };
    cartStore.addItem(menuItem);
};
</script>
