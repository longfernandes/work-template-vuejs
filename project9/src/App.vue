<template>
    <div
        class="min-h-screen bg-[url('https://anhdepfree.com/wp-content/uploads/2020/03/anh-nen-thanh-pho.png')] bg-cover bg-center"
    >
        <Navbar />
        <main class="max-w-5xl mx-auto px-4">
            <router-view />
        </main>
    </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>
