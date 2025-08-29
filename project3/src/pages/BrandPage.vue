<script setup>
import { onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useBrandProductStore } from "../stores/brandProductStore";

// Lấy route param
const route = useRoute();
const brand = computed(() => route.params.brand);

// Store chứa dữ liệu sản phẩm theo brand
const store = useBrandProductStore();

// Lần đầu vào trang
onMounted(() => {
    store.loadProductsByBrand(brand.value);
});

// Mỗi khi brand đổi thì load lại sản phẩm
watch(brand, (newBrand) => {
    store.loadProductsByBrand(newBrand);
});

// Danh sách sản phẩm hiển thị
const products = computed(() => store.getProducts(brand.value));
</script>

<template>
    <div class="max-w-[1800px] mx-auto p-6">
        <!-- Tiêu đề -->
        <h2 class="text-3xl font-bold mb-6 capitalize">
            Giày Đá Bóng {{ brand }}
        </h2>

        <!-- Danh sách sản phẩm -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <RouterLink
                v-for="product in products"
                :key="product.id"
                :to="`/${brand}/${product.id}`"
                class="block border rounded-lg p-4 bg-white shadow hover:shadow-lg transition"
            >
                <img
                    :src="product.image"
                    class="w-full h-90 object-cover mb-2"
                />
                <h3 class="font-bold text-xl">{{ product.name }}</h3>
                <p class="text-red-500 font-bold text-lg">
                    {{ product.price }}$
                </p>
            </RouterLink>
        </div>
    </div>
</template>
