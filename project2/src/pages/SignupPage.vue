<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <form
            @submit.prevent="handleSubmit"
            class="bg-white px-10 py-8 rounded shadow-lg w-full max-w-md"
        >
            <div class="flex gap-1 items-center mb-6">
                <p class="font-semibold cursor-pointer" @click="goToHome">
                    Trang Chủ /
                </p>
                <p class="font-semibold cursor-pointer" @click="goToSignin">
                    Đăng Nhập
                </p>
            </div>
            <h2 class="text-3xl font-bold mb-6 text-center">Đăng Ký</h2>

            <div class="mb-6">
                <label class="block text-xl font-semibold mb-2"
                    >Tài khoản</label
                >
                <input
                    v-model="formData.username"
                    type="text"
                    placeholder="Nhập tài khoản"
                    required
                    class="w-full px-4 py-2 border rounded"
                />
            </div>

            <div class="mb-6 relative">
                <label class="block text-xl font-semibold mb-2">Mật khẩu</label>
                <input
                    v-model="formData.password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Nhập mật khẩu"
                    required
                    class="w-full px-4 py-2 border rounded pr-10"
                />
                <span
                    class="absolute top-3/4 right-3 transform -translate-y-1/2 cursor-pointer"
                    @click="togglePasswordVisibility"
                >
                    {{ showPassword ? "🙈" : "👁️" }}
                </span>
            </div>

            <div class="mb-6">
                <label class="block text-xl font-semibold mb-2"
                    >Xác nhận mật khẩu</label
                >
                <input
                    v-model="formData.confirmPassword"
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                    required
                    class="w-full px-4 py-2 border rounded"
                />
            </div>

            <div v-if="error" class="mb-4 text-red-500 text-sm">
                {{ error }}
            </div>

            <button
                type="submit"
                class="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-3 rounded"
            >
                Đăng Ký
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/authStore'

function goToSignin() {
    router.push("/signin");
}

function goToHome() {
    router.push("/");
}
const router = useRouter()
const auth = useAuthStore()
const formData = ref({ username: '', password: '', confirmPassword: '' })
const error = ref('')
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = () => {
  error.value = ''
  if (formData.value.password !== formData.value.confirmPassword) {
    error.value = 'Mật khẩu không khớp'
    return
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const exists = users.find(u => u.username === formData.value.username)
  if (exists) {
    error.value = 'Tài khoản đã tồn tại'
    return
  }

  const newUser = {
    username: formData.value.username,
    password: formData.value.password,
  }

  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))

  // ✅ Hiển thị thông báo
  alert("Đăng ký thành công! Vui lòng đăng nhập.")

  // ✅ Chuyển sang trang đăng nhập
  router.push('/signin')
}

</script>
