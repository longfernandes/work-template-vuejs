<template>
    <div class="w-full relative  overflow-hidden">
        <!-- Overlay Text Content -->
        <div
            class="absolute inset-0 z-10 px-4 sm:px-5 flex items-center max-w-[1800px] mx-auto justify-center pointer-events-none"
        >
            <div class="text-white text-center drop-shadow-md">
                <h1 class=" text-2xl sm:text-3xl md:text-4xl font-bold">ƯU ĐÃI LÊN TỚI 30%</h1>
                <h2 class=" text-2xl ms:text-3xl md:text-4xl font-bold mt-2">
                    KHI ĐẶT SET MENU SUM VẦY
                </h2>
                <p class="mt-2 text-sm sm:text-base">
                    Áp dụng cho tiệc tại Hà Nội, từ 15/5 - 20/11/2025
                </p>
                <button
                    class="mt-6 sm:mt-8 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-5 sm:py-4 sm:px-6 rounded"
                >
                    XEM CHI TIẾT ƯU ĐÃI
                </button>
            </div>
        </div>

        <!-- Swiper Carousel -->
        <swiper
            :autoplay="true"
            :loop="true"
            :space-between="50"
            @slideChange="onChange"
            class="mySwiper"
        >
            <swiper-slide v-for="(image, index) in images" :key="index">
                <div class="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px]">
                    <div class="absolute inset-0 bg-black opacity-50 z-0"></div>
                    <img
                        :src="image.src"
                        alt="Banner"
                        class="w-full h-full object-cover z-0"
                    />
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
    name: "HeroSection",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            images: [
                {
                    src: "https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg",
                },
                {
                    src: "https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg",
                },
                {
                    src: "https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg",
                },
            ],
        };
    },
    methods: {
        onChange() {
            console.log("Slide changed");
        },
    },
};
</script>

<style scoped>
/* Optional: You can add custom styling if needed */
</style>
