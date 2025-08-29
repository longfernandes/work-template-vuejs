<template>
    <div class="bg-gray-50 py-8 px-4 max-w-[1800px] mx-auto">
        <h2 class="text-2xl font-bold mb-4">Sản Phẩm Nổi Bật</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Danh sách sản phẩm -->
            <div class="md:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-4">
                <ProductCard
                    v-for="(item, index) in products"
                    :key="index"
                    :product="item"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductCard from "../cart/ProductCard.vue";

const products = [
    {
        title: "MONARCIDA NEO III SELECT AS",
        price: "1,299,000₫",
        image: "https://product.hstatic.net/1000313927/product/monarcida_neo-07_43034035e470486890a282f3c761885e_master.jpg",
    },
    {
        title: "MORELIA NEO IV PRO AG",
        price: "1,599,000₫",
        image: "https://product.hstatic.net/1000313927/product/a-01_c50b36cd2b0b45d090980a97a7269067_master.jpg",
    },
    {
        title: "MORELIA SALA CLUB TF",
        price: "999,000₫",
        image: "https://product.hstatic.net/1000313927/product/q1gb240390_mizuno_2_5301602206f64d21b7573b55dca9daab.jpg",
    },
   
    {
        title: "MORELIA SALA CLUB TF",
        price: "999,000₫",
        image: "https://product.hstatic.net/1000313927/product/q1gb240390_mizuno_2_5301602206f64d21b7573b55dca9daab.jpg",
    },
   
    {
        title: "MONARCIDA NEO III SELECT",
        price: "1,390,000₫",
        image: "https://product.hstatic.net/1000313927/product/t7-23_mizuno_football01378_7082bcb18fe343c785cf579e815cfbfd_master.jpg",
    },
    {
        title: "MONARCIDA NEO III SELECT AS",
        price: "1,299,000₫",
        image: "https://product.hstatic.net/1000313927/product/monarcida_neo-02_215f544b24164a0a83ce3727c2dcf35b_master.jpg",
    },
    {
        title: "MONARCIDA NEO III SELECT",
        price: "1,390,000₫",
        image: "https://product.hstatic.net/1000313927/product/t7-23_mizuno_football01378_7082bcb18fe343c785cf579e815cfbfd_master.jpg",
    },
    {
        title: "MONARCIDA NEO III SELECT AS",
        price: "1,299,000₫",
        image: "https://product.hstatic.net/1000313927/product/monarcida_neo-02_215f544b24164a0a83ce3727c2dcf35b_master.jpg",
    },
    {
        title: "MONARCIDA NEO III SELECT",
        price: "1,390,000₫",
        image: "https://product.hstatic.net/1000313927/product/t7-23_mizuno_football01378_7082bcb18fe343c785cf579e815cfbfd_master.jpg",
    },
    {
        title: "MONARCIDA NEO III SELECT AS",
        price: "1,299,000₫",
        image: "https://product.hstatic.net/1000313927/product/monarcida_neo-02_215f544b24164a0a83ce3727c2dcf35b_master.jpg",
    },
];
</script>
