<template>
    <div
        class="bg-cover bg-center bg-no-repeat w-full h-[500px]"
        style="background-image: url('/images/Home.svg')"
    >
        <!-- Navbar -->
        <nav class="flex items-center justify-between px-6 py-6">
            <!-- Logo -->
            <img
                src="/images/Vector (1).svg"
                alt="zlab"
                class="w-32 cursor-pointer"
                @click="goToHome"
            />

            <!-- Desktop Menu -->
            <div class="flex items-center space-x-6">
                <ul
                    class="hidden md:flex space-x-6 justify-between items-center text-white font-bold text-lg"
                >
                    <li><a href="#!">ABOUT US</a></li>
                    <li><a href="#!">Z-REPORT</a></li>
                    <li><a href="#!">Z-PODCAST</a></li>
                    <li><a href="#nursery">VƯỜN ƯƠM</a></li>
                    <li><a href="#!">Z-CONNECT</a></li>
                </ul>

                <!-- Hamburger Menu (Mobile) -->
                <div
                    class="flex flex-col justify-between w-7 h-5 cursor-pointer"
                    @click="toggleMenu"
                >
                    <span class="block h-1 bg-white rounded"></span>
                    <span class="block h-1 bg-white rounded"></span>
                    <span class="block h-1 bg-white rounded"></span>
                </div>
            </div>
        </nav>

        <!-- Overlay Mobile Menu -->
        <div
            class="fixed top-0 right-0 w-80 h-full bg-black text-white p-6 z-[999] transition-all duration-300 ease-in-out"
            :class="{
                'translate-x-0': isMenuOpen,
                'translate-x-full': !isMenuOpen,
            }"
        >
            <button
                class="absolute flex gap-2 top-4 items-center right-4 text-2xl"
                @click="closeMenu"
            >
                <p class="font-semibold">Đóng</p>
                ✕
            </button>

            <ul class="mt-16 space-y-5 text-lg font-medium">
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">Z-REPORT</a></li>
                <li><a href="#">Z-PODCAST</a></li>
                <li><a href="#nursery">VƯỜN ƯƠM</a></li>
                <li><a href="#">Z-CONNECT</a></li>
            </ul>

            <div class="mt-115">
                <img src="/images/footer-1.svg" alt="ZLAB" class="w-40 mb-2" />
                <p class="text-sm leading-relaxed">
                    Kết nối với Z-Lab để cùng hiểu thêm về Gen Z. Và nhận
                    insight cũng như các báo cáo định kỳ về GenZ
                </p>
            </div>
        </div>

        <!-- Hero Section -->
        <div
            class="flex flex-col md:flex-row justify-between items-start mt-50 px-6"
        >
            <!-- Left -->
            <div class="md:w-1/2 text-white">
                <h1 class="text-4xl font-bold leading-tight">WE KNOW Z BEST</h1>
                <p class="mt-4 text-xl leading-relaxed font-semibold max-w-lg">
                    Phòng nghiên cứu trực thuộc tổ hợp top 1 về công nghệ,
                    media, báo chí, truyền thông Marketing
                </p>
                <a
                    href="#!"
                    class="inline-block mt-6 bg-white text-black px-6 py-3 font-semibold text-lg hover:bg-blue transition"
                >
                    ABOUT ZLAB
                </a>
            </div>

            <!-- Right -->
            <div
                class="mt-10 md:mt-0 bg-[#C5F59C] p-6 rounded-lg max-w-md w-full text-center"
            >
                <h3 class="text-lg font-bold mb-4">QUICK SURVEY</h3>
                <p class="text-sm text-black mb-4 font-semibold leading-relaxed">
                    Phòng nghiên cứu trực thuộc tổ hợp top 1 về công nghệ,
                    media, báo chí, truyền thông Marketing
                </p>
                <a
                    href="#!"
                    class="inline-block bg-black text-white px-6 py-2 rounded-md font-bold"
                >
                    Do survey
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const isMenuOpen = ref(false);
const router = useRouter();

function goToHome() {
    router.push("/");
}

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
    isMenuOpen.value = false;
}
</script>
