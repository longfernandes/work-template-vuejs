<template>
    <nav class="bg-green-200 shadow-md sticky top-0 z-50">
        <div
            class="max-w-[1500px] mx-auto flex justify-between items-center py-4 px-6"
        >
            <!-- Logo -->
            <router-link to="/" class="text-3xl font-bold text-blue-600">
                MyProfile
            </router-link>

            <!-- Desktop menu -->
            <ul class="hidden md:flex gap-6">
                <li>
                    <router-link to="/" class="hover:text-blue-500 font-bold">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link
                        to="/projects"
                        class="hover:text-blue-500 font-bold"
                    >
                        Projects
                    </router-link>
                </li>
                <li>
                    <router-link
                        to="/contact"
                        class="hover:text-blue-500 font-bold"
                    >
                        Contact
                    </router-link>
                </li>
            </ul>

            <!-- Mobile menu button -->
            <button
                class="md:hidden text-blue-600 cursor-pointer focus:outline-none"
                @click="toggleMenu"
            >
                <!-- Icon 3 gạch -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-8 h-8"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>

        <!-- Mobile menu dropdown -->
        <div v-if="isOpen" class="md:hidden cursor-pointer bg-green-100 px-6 pb-4">
            <ul class="flex flex-col gap-4">
                <li>
                    <router-link
                        @click="closeMenu"
                        to="/"
                        class="hover:text-blue-500 font-bold"
                    >
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link
                        @click="closeMenu"
                        to="/projects"
                        class="hover:text-blue-500 font-bold"
                    >
                        Projects
                    </router-link>
                </li>
                <li>
                    <router-link
                        @click="closeMenu"
                        to="/contact"
                        class="hover:text-blue-500 font-bold"
                    >
                        Contact
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

const closeMenu = () => {
    isOpen.value = false;
};
</script>
