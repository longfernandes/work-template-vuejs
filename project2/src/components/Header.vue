<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authStore";
import { useCartStore } from "../store/cartStore";
import { onMounted, computed, ref } from "vue";
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

// Toggle mobile menu
const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function goTo(path) {
    isMobileMenuOpen.value = false; // Close mobile menu on nav
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

            <!-- Nav desktop -->
            <nav class="hidden lg:flex gap-12 text-lg">
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

            <!-- Giỏ hàng + Account (desktop) -->
            <div class="hidden lg:flex items-center gap-4">
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

                <template v-if="isLoggedIn">
                    <span class="text-base font-bold">👤 {{ username }}</span>
                    <Dropdown>
                        <template #overlay>
                            <Menu>
                                <Menu.Item key="1" @click="goTo('/profile')">
                                    <p class="font-semibold">
                                        Thông tin cá nhân
                                    </p>
                                </Menu.Item>
                                <Menu.Item key="2" @click="goTo('/address')">
                                    <p class="font-semibold">Cài đặt địa chỉ</p>
                                </Menu.Item>
                                <Menu.Item key="3" @click="goTo('/orders')">
                                    <p class="font-semibold">
                                        Quản lý đơn hàng
                                    </p>
                                </Menu.Item>
                                <Menu.Item
                                    key="4"
                                    @click="goTo('/saved-codes')"
                                >
                                    <p class="font-semibold">Mã đã lưu</p>
                                </Menu.Item>
                                <Menu.Item key="5" @click="logout">
                                    <p class="font-semibold">Đăng xuất</p>
                                </Menu.Item>
                            </Menu>
                        </template>
                        <a class="text-xl font-bold text-blue-600" href="#"
                            >▼</a
                        >
                    </Dropdown>
                </template>

                <template v-else>
                    <button
                        class="text-lg font-bold text-blue-600"
                        @click="goTo('/signin')"
                    >
                        Đăng nhập
                    </button>
                </template>
            </div>

            <!-- Hamburger Menu (mobile only) -->
            <div class="lg:hidden">
                <Dropdown placement="bottomRight" trigger="click">
                    <template #overlay>
                        <Menu>
                            <Menu.Item key="home" @click="goTo('/')"
                                >🏠 Trang chủ</Menu.Item
                            >
                            <Menu.Item key="menu" @click="goTo('/menu')"
                                >📋 Thực đơn</Menu.Item
                            >
                            <Menu.Item key="about" @click="goTo('/about')"
                                >ℹ️ Giới thiệu</Menu.Item
                            >
                            <Menu.Item key="news" @click="goTo('/news')"
                                >📰 Tin tức</Menu.Item
                            >
                            <Menu.Item key="oder" @click="goTo('/oder')"
                                >🎉 Đặt tiệc</Menu.Item
                            >
                            <Menu.Item key="cart" @click="goTo('/cart')">
                                🛒 Giỏ hàng ({{ cartCount }})
                            </Menu.Item>

                            <template v-if="isLoggedIn">
                                <Menu.Divider />
                                <Menu.Item
                                    key="profile"
                                    @click="goTo('/profile')"
                                >
                                    👤 Thông tin cá nhân
                                </Menu.Item>
                                <Menu.Item
                                    key="address"
                                    @click="goTo('/address')"
                                >
                                    🏠 Cài đặt địa chỉ
                                </Menu.Item>
                                <Menu.Item
                                    key="orders"
                                    @click="goTo('/orders')"
                                >
                                    📦 Đơn hàng
                                </Menu.Item>
                                <Menu.Item
                                    key="codes"
                                    @click="goTo('/saved-codes')"
                                >
                                    💾 Mã đã lưu
                                </Menu.Item>
                                <Menu.Item key="logout" @click="logout">
                                    🚪 Đăng xuất
                                </Menu.Item>
                            </template>
                            <template v-else>
                                <Menu.Item
                                    key="signin"
                                    @click="goTo('/signin')"
                                >
                                    🔑 Đăng nhập
                                </Menu.Item>
                            </template>
                        </Menu>
                    </template>

                    <!-- 3 Gạch Icon -->
                    <a class="text-2xl cursor-pointer">☰</a>
                </Dropdown>
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
