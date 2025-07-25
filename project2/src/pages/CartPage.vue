<template>
    <div class="max-w-6xl mx-auto px-4 py-10">
        <h1 class="text-3xl font-bold mb-6">Giỏ Hàng</h1>

        <div v-if="cartItems.length === 0" class="text-gray-600">
            Giỏ hàng đang trống.
        </div>

        <div v-else class="space-y-6">
            <div
                v-for="item in cartItems"
                :key="item.id"
                class="flex items-center justify-between border p-4 rounded-lg shadow"
            >
                <div class="flex items-center gap-4">
                    <img
                        :src="item.image"
                        :alt="item.name"
                        class="w-20 h-20 object-cover rounded"
                    />
                    <div>
                        <div class="flex items-center gap-2">
                            <h2 class="text-lg font-semibold">
                                {{ item.name }}
                            </h2>
                            <span
                                v-if="item.type === 'menu'"
                                class="text-sm text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full"
                            >
                                Menu
                            </span>
                        </div>
                        <p class="text-gray-500">${{ item.price }}</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <button
                        @click="updateQuantity(item.id, -1)"
                        class="bg-red-500 text-white w-8 h-8 rounded-full hover:bg-red-600"
                    >
                        −
                    </button>
                    <span>{{ item.quantity }}</span>
                    <button
                        @click="updateQuantity(item.id, 1)"
                        class="bg-green-500 text-white w-8 h-8 rounded-full hover:bg-green-600"
                    >
                        +
                    </button>
                </div>
            </div>

            <div class="text-right mt-6 text-xl font-bold">
                Tổng cộng: <span class="text-red-600">${{ total }}</span>
            </div>
        </div>

        <div class="mt-10 border p-4 rounded-lg">
            <h2 class="text-xl font-bold mb-4">Thông tin người nhận</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Họ và tên"
                    v-model="receiverInfo.name"
                    class="p-2 border rounded"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại"
                    v-model="receiverInfo.phone"
                    class="p-2 border rounded"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Địa chỉ giao hàng"
                    v-model="receiverInfo.address"
                    class="p-2 border rounded col-span-2"
                />
                <input
                    type="time"
                    name="deliveryTime"
                    v-model="receiverInfo.deliveryTime"
                    class="p-2 border rounded"
                />
            </div>
            <div class="text-right mt-4">
                <button
                    class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    @click="handleSubmit"
                >
                    <i class="mr-2 fas fa-shopping-cart"></i>
                    Đặt hàng
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../store/cartStore";
import { message } from "ant-design-vue";

const cartStore = useCartStore();

const receiverInfo = ref({
    name: "",
    phone: "",
    address: "",
    deliveryTime: "",
});

const cartItems = computed(() => cartStore.items);

const total = computed(() => {
    return cartItems.value
        .reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0)
        .toFixed(2);
});

const updateQuantity = (id, delta) => {
    const index = cartStore.items.findIndex((item) => item.id === id);
    if (index !== -1) {
        const newQty = cartStore.items[index].quantity + delta;
        if (newQty <= 0) {
            cartStore.removeFromCart(cartStore.items[index].id);
        } else {
            cartStore.items[index].quantity = newQty;
        }
    }
};

const handleSubmit = () => {
    if (cartItems.value.length === 0) {
        message.warning("Giỏ hàng đang trống.");
        return;
    }

    const { name, phone, address, deliveryTime } = receiverInfo.value;
    if (!name || !phone || !address || !deliveryTime) {
        message.warning("Vui lòng điền đầy đủ thông tin người nhận.");
        return;
    }

    const newOrder = {
        id: Date.now(),
        cartItems: cartItems.value,
        receiverInfo: receiverInfo.value,
        createdAt: new Date().toISOString(),
        status: "Cửa hàng đã nhận đơn",
    };

    // Lưu đơn hàng vào localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem(
        "orders",
        JSON.stringify([...existingOrders, newOrder])
    );

    // ✅ Hiển thị thông báo thành công
    message.success("Đặt hàng thành công!");

    // ✅ Reset form người nhận
    receiverInfo.value = {
        name: "",
        phone: "",
        address: "",
        deliveryTime: "",
    };

    // ✅ Xóa giỏ hàng
    cartStore.clearCart();
};
</script>

<style scoped>
input:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
}
</style>
