<template>
    <div class="max-w-[1800px] px-5 mx-auto py-10">
        <router-link
            to="/list-menu"
            class="fixed bottom-6 right-6 z-50 font-bold bg-red-500 text-white max-w-[1800px] mx-auto px-7 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
            List Menu
        </router-link>

        <h2 class="text-4xl font-bold text-gray-900 mb-6">Menu</h2>

        <div class="flex gap-4 mb-8">
            <button
                v-for="cat in ['All', 'Burger', 'Pizza', 'Dessert']"
                :key="cat"
                @click="selectedCategory = cat"
                :class="[
                    'px-5 py-2 rounded-full border transition',
                    selectedCategory === cat
                        ? 'bg-red-500 text-white border-red-500'
                        : 'border-gray-300 hover:bg-red-500 hover:text-white',
                ]"
            >
                {{ cat }}
            </button>
        </div>

        <a-spin
            v-if="loading"
            tip="Đang tải..."
            size="large"
            class="block mx-auto mt-20"
        />

        <div
            v-else
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <div
                v-for="item in filteredMenu"
                :key="item.id"
                class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
                <router-link :to="`/menu/${item.id}`" class="w-full">
                    <div class="flex justify-start gap-2 w-full mb-3">
                        <span
                            class="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold cursor-pointer hover:bg-red-500 hover:text-white transition"
                        >
                            Vegan
                        </span>
                        <span
                            class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold cursor-pointer hover:bg-red-500 hover:text-white transition"
                        >
                            New
                        </span>
                    </div>
                    <img
                        :src="item.image"
                        :alt="item.name"
                        class="h-80 object-contain mb-4 rounded-full w-full"
                    />
                    <h3 class="text-2xl font-bold mb-2">{{ item.name }}</h3>
                    <p class="text-gray-600 mb-4 line-clamp-3">
                        {{ item.instructions.slice(0, 80) }}...
                    </p>
                </router-link>

                <div class="w-full flex justify-between items-center mt-2">
                    <span class="text-lg font-bold text-gray-900"
                        >${{ item.price }}</span
                    >
                    <button
                        @click="addItem(item)"
                        class="border-2 border-red-500 text-red-500 px-4 py-1 rounded-full font-semibold hover:bg-red-500 hover:text-white transition"
                    >
                        Chọn
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useCartStore } from "../store/cartStore";
import { Spin as ASpin } from "ant-design-vue";

const loading = ref(false);
const menuItems = ref([]);

const cartStore = useCartStore();
const addItem = cartStore.addItem;
const selectedCategory = ref("All");

onMounted(async () => {
    loading.value = true;
    try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        menuItems.value = data.recipes.map((item, index) => ({
            ...item,
            price: item.price || (Math.random() * 20 + 5).toFixed(2),
            category: ["Burger", "Pizza", "Dessert"][index % 3],
        }));
    } catch (err) {
        console.error("Error loading menu:", err);
    } finally {
        loading.value = false;
    }
});

const filteredMenu = computed(() => {
    if (selectedCategory.value === "All") return menuItems.value;
    return menuItems.value.filter(
        (item) => item.category === selectedCategory.value
    );
});
</script>

<style scoped>
.line-clamp-3 {
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
}
</style>
