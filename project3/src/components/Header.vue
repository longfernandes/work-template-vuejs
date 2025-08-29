<template>
    <header class="border-b bg-white shadow-md py-4 sticky top-0 z-50">
        <div
            class="flex justify-between items-center px-5 py-4 max-w-[1800px] mx-auto"
        >
            <!-- Logo -->
            <div class="flex items-center gap-2 cursor-pointer">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGiipyZpkYEv_RKfoOsdIoaoksBMT8PybPg&s"
                    alt="Logo"
                    class="w-20 h-15"
                />
                <div>
                    <RouterLink to="/" class="text-2xl font-bold"
                        >THẾ GIỚI THỂ THAO</RouterLink
                    >
                    <div class="text-lg font-bold text-gray-500">24/7</div>
                </div>
            </div>

            <!-- Search -->
            <div
                class="hidden md:flex items-center border rounded-full px-4 py-1 w-[800px]"
            >
                <input
                    type="text"
                    placeholder="Bạn cần tìm gì?"
                    class="flex-1 outline-none bg-transparent placeholder-gray-400"
                />
            </div>

            <!-- Info -->
            <div
                class="hidden md:flex items-center font-semibold gap-10 text-xl text-black"
            >
                <div class="flex items-center gap-1 cursor-pointer">
                    👤
                    <span v-if="user" class="hover:underline">{{
                        user.username
                    }}</span>
                    <RouterLink v-else to="/login" class="hover:underline"
                        >Đăng nhập</RouterLink
                    >
                </div>

                <div class="flex items-center gap-2">❤️ <span>0</span></div>
                <RouterLink
                    to="/cart"
                    class="relative flex items-center gap-1 cursor-pointer"
                >
                    🛒
                    <span
                        v-if="totalQuantity > 0"
                        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                    >
                        {{ totalQuantity }}
                    </span>
                </RouterLink>
            </div>

            <!-- Mobile menu button -->
            <button @click="toggleMenu" class="md:hidden text-3xl">☰</button>
        </div>

        <!-- Desktop Menu -->
        <nav
            class="hidden md:flex justify-center gap-10 py-3 font-semibold text-xl text-black"
        >
            <RouterLink to="/" class="hover:text-orange-500 hover:underline"
                >Sản phẩm</RouterLink
            >

            <!-- Dropdown Giày bóng đá -->
            <a-dropdown>
                <a class="hover:text-orange-500 cursor-pointer"
                    >Giày thể thao ▼</a
                >
                <template #overlay>
                    <a-menu>
                        <a-menu-item
                            ><RouterLink to="/allsport"
                                >Tất cả sản phẩm</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/natural"
                                >Giày bóng đá sân cỏ</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/artificial"
                                >Giày bóng đá sân nhân tạo
                            </RouterLink></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/cheaper"
                                >Giày bóng đá rẻ</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/expensive"
                                >Giày bóng đá xịn</RouterLink
                            ></a-menu-item
                        >
                    </a-menu>
                </template>
            </a-dropdown>

            <!-- Dropdown Thương hiệu -->
            <a-dropdown>
                <a class="hover:text-orange-500 cursor-pointer"
                    >Thương hiệu ▼</a
                >
                <template #overlay>
                    <a-menu>
                        <a-menu-item
                            ><RouterLink to="allstar"
                                >Tất cả sản phẩm</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/puma"
                                >Puma</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/mizuno"
                                >Mizuno</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/adidas"
                                >Adidas</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/puma"
                                >Nike</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/nike"
                                >Kamito</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/zocker"
                                >Zocker</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/wika"
                                >Wika</RouterLink
                            ></a-menu-item
                        >
                    </a-menu>
                </template>
            </a-dropdown>

            <!-- Dropdown Phụ kiện -->
            <a-dropdown>
                <a class="hover:text-orange-500 cursor-pointer">Phụ kiện ▼</a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item
                            ><RouterLink to="/tat">Tất</RouterLink></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/balo"
                                >Balo</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/goalkeep"
                                >Găng tay thủ môn</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/shirt"
                                >Quần áo đá bóng</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/ball"
                                >Quả bóng đá</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/ongdong"
                                >Bọc ống đồng</RouterLink
                            ></a-menu-item
                        >
                    </a-menu>
                </template>
            </a-dropdown>

            <!-- Dropdown Dịch vụ -->
            <a-dropdown>
                <a class="hover:text-orange-500 cursor-pointer">Dịch vụ ▼</a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item
                            ><RouterLink to="/bao-hanh"
                                >Bảo hành</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/tra-hang"
                                >Đổi trả</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/tra-hang"
                                >Đổi trả</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/tra-hang"
                                >Đổi trả</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/tra-hang"
                                >Đổi trả</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/tra-hang"
                                >Đổi trả</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/tra-hang"
                                >Đổi trả</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/tra-hang"
                                >Đổi trả</RouterLink
                            ></a-menu-item
                        >
                    </a-menu>
                </template>
            </a-dropdown>

            <!-- Dropdown Hướng dẫn -->
            <a-dropdown>
                <a class="hover:text-orange-500 cursor-pointer">Hướng dẫn ▼</a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item
                            ><RouterLink to="/huong-dan-size"
                                >Chọn size</RouterLink
                            ></a-menu-item
                        >
                        <a-menu-item
                            ><RouterLink to="/huong-dan-mua"
                                >Cách mua hàng</RouterLink
                            ></a-menu-item
                        >
                    </a-menu>
                </template>
            </a-dropdown>
        </nav>

        <!-- Mobile menu -->
        <nav
            v-if="showMenu"
            class="md:hidden flex flex-col gap-3 px-6 py-4 font-semibold text-lg bg-white shadow-md border-t"
        >
            <RouterLink @click="closeMenu" to="/">Sản phẩm</RouterLink>
            <RouterLink @click="closeMenu" to="/kamito"
                >Giày bóng đá</RouterLink
            >
            <RouterLink @click="closeMenu" to="/wika">Thương hiệu</RouterLink>
            <RouterLink @click="closeMenu" to="/nike">Phụ kiện</RouterLink>
            <RouterLink @click="closeMenu" to="/adidas">Dịch vụ</RouterLink>
            <RouterLink @click="closeMenu" to="/mizuno">Hướng dẫn</RouterLink>
        </nav>
    </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cartStore";

// ant-design-vue
import {
    Dropdown as ADropdown,
    Menu as AMenu,
    MenuItem as AMenuItem,
} from "ant-design-vue";

const cartStore = useCartStore();
const showMenu = ref(false);

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};

const closeMenu = () => {
    showMenu.value = false;
};

const totalQuantity = computed(() =>
    cartStore.items.reduce((total, item) => total + item.quantity, 0)
);
</script>
