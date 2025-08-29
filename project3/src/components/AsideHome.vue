<template>
    <section class="max-w-[1800px] mx-auto py-8">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">BỘ SƯU TẬP MỚI</h2>
            <a href="#" class="text-lg px-5 font-semibold hover:underline"
                >Xem tất cả</a
            >
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <div
                v-for="(item, idx) in collections"
                :key="idx"
                class="bg-gray-100 p-4 flex flex-col items-center rounded-md"
            >
                <img :src="item.logo" alt="" class="h-70 mb-2 object-contain" />

                <div class="flex-grow flex justify-center mb-4">
                    <img
                        :src="item.product"
                        alt=""
                        class="max-h-50 object-contain"
                    />
                </div>

                <BaseButton
                    variant="primary"
                >
                    MUA NGAY &gt;
                </BaseButton>
            </div>
        </div>
    </section>
</template>

<script setup>
import BaseButton from '../common/BaseButton.vue';
const collections = [
    {
        logo: "https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2021/11/nike-mercurial-vapor-14-academy-tf-cv0978-403-3-jpg-1637829108-25112021153148.jpg",
        product: "/images/adidas-product.jpg",
    },
    {
        logo: "https://pos.nvncdn.com/3c8244-211061/ps/20250723_nlEBbx283F.jpeg?v=1753233339",
        product: "/images/asics-product.jpg",
    },
    {
        logo: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/FQ8317-400-1_540x.jpg?v=1734686837",
        product: "/images/teva-product.jpg",
    },
    {
        logo: "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/FQ8687-301-1_540x.jpg?v=1745909103",
        product: "/images/speedo-product.jpg",
    },
    {
        logo: "https://supersports.com.vn/cdn/shop/files/FJ2577-300-1.jpg?v=1737453189",
        product: "/images/underarmour-product.jpg",
    },
];
</script>

<style>
/* Đảm bảo ảnh logo và sản phẩm được đặt đúng thư mục public/images */
</style>
