<template>
    <div
        class="fixed inset-0 bg-white/30 backdrop-blur-sm z-50 flex items-center justify-center"
    >
        <div class="relative bg-white w-4/5 max-w-6xl p-6 rounded-lg shadow-lg">
            <!-- Đóng -->
            <button
                @click="onClose"
                class="absolute top-0 right-0 text-gray-500 hover:text-black text-3xl font-bold z-10"
            >
                ×
            </button>

            <!-- Tên menu + loại -->
            <div class="mb-4 flex gap-4 items-center">
                <input
                    v-model="menuName"
                    type="text"
                    placeholder="Tên menu"
                    class="border-3 border-orange-500 px-4 py-2 w-full rounded"
                />
                <select
                    v-model="menuType"
                    class="border-3 font-bold text-lg border-orange-500 px-6 py-2 rounded"
                >
                    <option value="cá nhân">Cá nhân</option>
                    <option value="gia đình">Gia đình</option>
                </select>
            </div>

            <!-- Danh sách món ăn & đã chọn -->
            <div class="grid grid-cols-2 gap-6">
                <!-- Tất cả món ăn -->
                <div
                    class="border-3 border-orange-500 p-4 rounded overflow-y-auto h-96"
                >
                    <h3 class="text-lg font-bold mb-2">Tất cả món ăn</h3>
                    <div class="grid grid-cols-4 gap-2">
                        <div
                            v-for="item in allItems"
                            :key="item.id"
                            class="border-3 border-orange-500 font-semibold p-2 rounded relative group hover:bg-gray-100 cursor-pointer"
                        >
                            <button
                                @click="selectItem(item)"
                                class="absolute top-1 right-1 bg-green-500 text-white rounded-full w-6 h-6 text-sm hidden group-hover:flex items-center justify-center"
                            >
                                +
                            </button>
                            <img
                                :src="item.image"
                                :alt="item.name"
                                class="h-16 object-cover w-full rounded"
                            />
                            <p class="text-sm mt-1 text-center">
                                {{ item.name }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Đã chọn -->
                <div
                    class="border-3 border-orange-500 p-4 rounded overflow-y-auto h-96"
                >
                    <h3 class="text-lg font-bold mb-2">Món đã chọn</h3>
                    <div class="grid grid-cols-4 gap-2">
                        <div
                            v-for="item in selectedItems"
                            :key="item.id"
                            class="border-3 border-orange-500 p-2 rounded relative group"
                        >
                            <button
                                @click="removeItem(item)"
                                class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-sm hidden group-hover:flex items-center justify-center"
                            >
                                −
                            </button>
                            <img
                                :src="item.image"
                                :alt="item.name"
                                class="h-16 object-cover w-full rounded"
                            />
                            <p class="text-sm mt-1 text-center">
                                {{ item.name }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ghi chú -->
            <div class="mt-6">
                <label class="block mb-1 text-lg font-bold text-gray-700"
                    >Ghi chú</label
                >
                <textarea
                    v-model="note"
                    placeholder="Nhập ghi chú cho menu..."
                    class="w-full border-3 border-orange-500 px-4 py-2 rounded bg-white text-sm text-gray-700 h-24 resize-none"
                />
            </div>

            <!-- Lưu -->
            <button
                @click="handleSave"
                class="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 float-right"
            >
                Lưu menu
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
    onClose: Function,
    onSave: Function,
});

const menuName = ref("");
const menuType = ref("cá nhân");
const allItems = ref([]);
const selectedItems = ref([]);
const note = ref("");

onMounted(async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    allItems.value = data.recipes;
});

function selectItem(item) {
    if (!selectedItems.value.find((i) => i.id === item.id)) {
        selectedItems.value.push(item);
    }
}

function removeItem(item) {
    selectedItems.value = selectedItems.value.filter((i) => i.id !== item.id);
}

function handleSave() {
    const newMenu = {
        name: menuName.value,
        type: menuType.value,
        items: selectedItems.value.map((item) => ({
            ...item,
            price: item.price || (Math.random() * 20 + 5).toFixed(2),
        })),
        note: note.value,
    };

    const savedMenus = JSON.parse(localStorage.getItem("menus") || "[]");
    localStorage.setItem("menus", JSON.stringify([...savedMenus, newMenu]));

    props.onSave();

    if (props.onClose) props.onClose();
}
</script>
