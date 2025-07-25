<template>
    <div>
      <router-view />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from './store/authStore'

const authStore = useAuthStore()

onMounted(() => {
  authStore.init() // Khôi phục user từ localStorage
})
</script>

<style scoped></style>
