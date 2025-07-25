<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authStore";
import { useCartStore } from "../store/cartStore";
import { onMounted, computed } from "vue";
import { Dropdown, Menu } from "ant-design-vue";

const router = useRouter();
const authStore = useAuthStore();
const cartStore = useCartStore();

onMounted(() => {
    authStore.init(); // Khởi tạo token + user từ localStorage
});

const username = computed(() =>
    authStore.user?.username ? authStore.user.username : "Ẩn danh"
);
const isLoggedIn = computed(() => !!authStore.token);

const cartCount = computed(() =>
    cartStore.items.reduce((sum, item) => sum + (item.quantity || 1), 0)
);

function goTo(path) {
    router.push(path);
}

function logout() {
    authStore.logout();
    router.push("/signin");
}
</script>

<template>
    <header class="bg-white shadow-md py-4 sticky top-0 z-50">
        <div
            class="w-full max-w-[1800px] mx-auto px-5 flex justify-between items-center"
        >
            <!-- Logo -->
            <div class="text-xl font-bold cursor-pointer" @click="goTo('/')">
                🍔 Restaurant One...
            </div>

            <!-- Navigation -->
            <nav class="flex gap-6 text-lg">
                <button class="font-bold" @click="goTo('/')">Trang chủ</button>
                <button class="font-bold" @click="goTo('/menu')">
                    Thực đơn
                </button>
                <button class="font-bold" @click="goTo('/about')">
                    Giới thiệu
                </button>
                <button class="font-bold" @click="goTo('/news')">
                    Tin tức
                </button>
                <button class="font-bold" @click="goTo('/oder')">
                    Đặt tiệc
                </button>
            </nav>

            <!-- Account & Cart -->
            <div class="flex items-center gap-4">
                <!-- Giỏ hàng -->
                <div
                    class="relative text-black text-xl cursor-pointer"
                    @click="goTo('/cart')"
                >
                    🛒
                    <span
                        v-if="cartCount > 0"
                        class="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full"
                    >
                        {{ cartCount }}
                    </span>
                </div>

                <!-- Dropdown Account when Logged In -->
                <template v-if="isLoggedIn">
                    <span class="text-base font-bold">👤 {{ username }}</span>
                    <Dropdown>
                        <template #overlay>
                            <Menu>
                                <Menu.Item key="1" @click="goTo('/profile')"
                                    ><p class="font-semibold">
                                        Thông tin cá nhân
                                    </p></Menu.Item
                                >
                                <Menu.Item key="2" @click="goTo('/address')"
                                    ><p class="font-semibold">
                                        Cài đặt địa chỉ
                                    </p></Menu.Item
                                >
                                <Menu.Item key="3" @click="goTo('/orders')"
                                    ><p class="font-semibold">
                                        Quản lý đơn hàng
                                    </p></Menu.Item
                                >
                                <Menu.Item key="4" @click="goTo('/saved-codes')"
                                    ><p class="font-semibold">
                                        Mã đã lưu
                                    </p></Menu.Item
                                >
                                <Menu.Item key="5" @click="logout"
                                    ><p class="font-semibold">
                                        Đăng xuất
                                    </p></Menu.Item
                                >
                            </Menu>
                        </template>
                        <a class="text-xl font-bold text-blue-600" href="#"
                            >▼</a
                        >
                    </Dropdown>
                </template>

                <!-- Login if not logged in -->
                <template v-else>
                    <button
                        class="text-lg font-bold text-blue-600"
                        @click="goTo('/signin')"
                    >
                        Đăng nhập
                    </button>
                </template>
            </div>
        </div>
    </header>
</template>

<style scoped>
button {
    background: none;
    border: none;
    cursor: pointer;
}
</style>
