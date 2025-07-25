<template>
    <div class="max-w-[1800px] px-5 mx-auto py-10 max-w-screen-md">
        <ASpin :spinning="loading">
            <div v-if="item" class="bg-white shadow-xl rounded-2xl p-6">
                <img
                    :src="item.image || 'https://via.placeholder.com/300x200'"
                    alt="Dish"
                    class="w-full h-64 object-cover rounded-xl mb-4"
                />

                <h1 class="text-2xl font-bold mb-2">{{ item.name }}</h1>
                <p class="text-gray-700 mb-2">{{ item.description }}</p>
                <p class="text-lg font-semibold text-green-600 mb-4">
                    Giá: {{ item.price }}$
                </p>

                <!-- Thêm hoặc cập nhật số lượng -->
                <div v-if="cartItem">
                    <p class="mb-2 text-blue-600">Đã có trong giỏ hàng</p>
                    <div class="flex items-center gap-3">
                        <button
                            @click="updateQuantity(item.id, -1)"
                            class="px-3 py-1 bg-red-500 text-white rounded"
                        >
                            -
                        </button>
                        <span class="font-medium">{{ cartItem.quantity }}</span>
                        <button
                            @click="updateQuantity(item.id, 1)"
                            class="px-3 py-1 bg-green-500 text-white rounded"
                        >
                            +
                        </button>
                    </div>
                </div>
                <button
                    v-else
                    @click="addToCart(item)"
                    class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Thêm vào giỏ hàng
                </button>
            </div>

            <!-- Không tìm thấy dữ liệu -->
            <div v-else class="text-center py-10 text-red-600 font-semibold">
                Không tìm thấy món ăn.
            </div>
        </ASpin>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../store/cartStore";
import { Spin as ASpin } from "ant-design-vue";

const route = useRoute();
const cartStore = useCartStore();
const item = ref(null);
const loading = ref(true);

const id = route.params.id;

onMounted(async () => {
    try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();

        item.value = {
            ...data,
            price: Math.floor(Math.random() * 100) + 50,
        };
    } catch (err) {
        console.error("Lỗi fetch món ăn:", err);
    } finally {
        loading.value = false;
    }
});

const cartItem = computed(() =>
    cartStore.items.find((p) => p.id === item.value?.id)
);

function addToCart(itemToAdd) {
    cartStore.addItem({ ...itemToAdd, quantity: 0 });
}

function updateQuantity(id, delta) {
    const index = cartStore.items.findIndex((item) => item.id === id);
    if (index !== -1) {
        const newQty = cartStore.items[index].quantity + delta;
        if (newQty <= 0) {
            cartStore.removeFromCart(cartStore.items[index].id);
        } else {
            cartStore.items[index].quantity = newQty;
        }
    }
}
</script>

<style scoped>
.container {
    font-family: "Segoe UI", sans-serif;
}
</style>
