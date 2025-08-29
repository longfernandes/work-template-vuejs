<script setup>
const vueProjects = [
  { title: "Restaurant Website", desc: "Menu, cart, login system.", link: "https://vuejs-work2025-aece.vercel.app/" },
  { title: "Zlab", desc: "Personal website project.", link: "https://vuejs-work2025.vercel.app/" },
  { title: "Sport World", desc: "Personal website project.", link: "https://work-template-vuejs.vercel.app/" },
  { title: "My Project", desc: "Personal website project.", link: "/" },
];

const reactProjects = [
  { title: "Todo App", desc: "Manage tasks with localStorage.", link: "https://longfernandes-github-io-2igd.vercel.app/" },
  { title: "The Fancho", desc: "A fan club website.", link: "https://work-template-vuejs-4m65.vercel.app/" },
];
</script>

<template>
  <section class="py-16">
    <div class="max-w-[1500px] mx-auto px-4">
      <h2 class="text-3xl font-bold mb-6">Projects</h2>

      <!-- Vue.js Projects -->
      <h3 class="text-2xl font-semibold mb-4 text-green-600">Vue.js Projects</h3>
      <div class="grid md:grid-cols-3 gap-6 mb-10">
        <div v-for="(p, i) in vueProjects" :key="'vue-'+i"
             class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold">{{ p.title }}</h3>
          <p class="text-gray-600 mt-2">{{ p.desc }}</p>
          <a :href="p.link" class="text-blue-600 mt-3 inline-block">View</a>
        </div>
      </div>

      <!-- React.js Projects -->
      <h3 class="text-2xl font-semibold mb-4 text-sky-600">React.js Projects</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(p, i) in reactProjects" :key="'react-'+i"
             class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold">{{ p.title }}</h3>
          <p class="text-gray-600 mt-2">{{ p.desc }}</p>
          <a :href="p.link" class="text-blue-600 mt-3 inline-block">View</a>
        </div>
      </div>
    </div>
  </section>
</template>
