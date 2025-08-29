<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
    <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <!-- Title -->
      <h2 class="text-3xl font-bold text-center mb-8">Login</h2>

      <!-- Form -->
      <form @submit.prevent="onSubmit" class="space-y-6">
        <!-- Username -->
        <div>
          <label class="block text-gray-700 mb-1">Username</label>
          <div class="flex items-center border rounded-lg px-3 py-2">
            <span class="text-gray-400 mr-2">👤</span>
            <input
              type="text"
              v-model="username"
              placeholder="Type your username"
              class="flex-1 outline-none bg-transparent"
              required
            />
          </div>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-gray-700 mb-1">Password</label>
          <div class="flex items-center border rounded-lg px-3 py-2">
            <span class="text-gray-400 mr-2">🔒</span>
            <input
              type="password"
              v-model="password"
              placeholder="Type your password"
              class="flex-1 outline-none bg-transparent"
              required
            />
          </div>
          <div class="text-right mt-1">
            <a href="#" class="text-sm text-gray-500 hover:underline">Forgot password?</a>
          </div>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full py-3 rounded-full text-white font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
        >
          LOGIN
        </button>
      </form>

      <!-- Social login -->
      <div class="mt-6 text-center text-gray-500">Or Sign Up Using</div>
      <div class="flex justify-center space-x-6 mt-4">
        <button class="text-blue-600 text-2xl hover:scale-110 transition">🌐</button>
        <button class="text-sky-400 text-2xl hover:scale-110 transition">🐦</button>
        <button class="text-red-500 text-2xl hover:scale-110 transition">🟢</button>
      </div>

      <!-- Sign up link -->
      <div class="mt-8 text-center">
        <div class="text-gray-500">Or Sign Up Using</div>
        <a href="#" class="text-purple-600 font-semibold hover:underline">SIGN UP</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const onSubmit = () => {
  // lưu vào localStorage (demo, có thể thay bằng token từ API thật)
  localStorage.setItem("user", JSON.stringify({
    username: username.value,
    password: password.value
  }));

  alert("Đăng nhập thành công!");
  router.push("/"); // quay về trang chủ
};
</script>
