<template>
    <footer
        class="relative bg-cover bg-center text-white text-sm"
        :style="{
            backgroundImage:
                'url(\'https://phongcachmoc.vn/upload/images/thiet-ke-nha-hang-sang-trong-15.JPG\')',
        }"
    >
        <div class="absolute inset-0 bg-opacity-60 z-0"></div>

        <!-- Container với chiều rộng tối đa 1800px -->
        <div class="max-w-[1800px] mx-auto py-10 px-5 z-10 relative">
            <div
                class="flex flex-col md:flex-row flex-wrap justify-between gap-8"
            >
                <!-- Về chúng tôi -->
                <div class="flex-1 text-ms">
                    <h3 class="font-semibold text-2xl mb-3">Về chúng tôi</h3>
                    <p class="mb-3 text-lg">Số điện thoại: 095.366.4722</p>
                    <p class="mb-3 text-lg">
                        Địa chỉ: số 33 Nhân Chính, Trung Hoà, Cầu Giấy, Hà Nội
                    </p>
                </div>

                <!-- Phương thức thanh toán -->
                <div class="flex-1">
                    <h3 class="font-semibold text-2xl mb-5">
                        Phương thức thanh toán
                    </h3>
                    <div class="flex gap-2 mb-4">
                        <img
                            v-for="(item, idx) in 4"
                            :key="'top-' + idx"
                            :src="'https://vudigital.co/wp-content/uploads/2022/12/logo-mastercard-da-thay-doi-nhu-the-nao-trong-hon-50-nam-2.webp'"
                            alt="MasterCard"
                            class="w-12 sm:w-5 md:w-8 lg:w-10 xl:w-20 h-auto transition-transform duration-200 hover:scale-105"
                        />
                    </div>
                    <!-- Hàng dưới: 3 ảnh -->
                    <div class="flex gap-2">
                        <img
                            v-for="(item, idx) in 3"
                            :key="'bottom-' + idx"
                            :src="'https://vudigital.co/wp-content/uploads/2022/12/logo-mastercard-da-thay-doi-nhu-the-nao-trong-hon-50-nam-2.webp'"
                            alt="MasterCard"
                            class="w-12 sm:w-5 md:w-8 lg:w-10 xl:w-20 transition-transform duration-200 hover:scale-105"
                        />
                    </div>
                </div>

                <!-- Truyền thông xã hội -->
                <div class="flex-1">
                    <h3 class="font-semibold text-2xl mb-3">
                        Truyền thông xã hội
                    </h3>
                    <ul class="flex flex-col items-start gap-2">
                        <li>
                            <a href="" class="flex items-center gap-2 mb-3">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                    alt="Facebook"
                                    class="w-5 h-5 hover:scale-110 transition"
                                />
                                <span class="text-lg">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center gap-2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                                    alt="YouTube"
                                    class="w-5 h-5 hover:scale-110 transition"
                                />
                                <span class="text-lg">Youtube</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Hỗ trợ khách hàng -->
                <div class="flex-1">
                    <h3 class="font-semibold text-2xl mb-2">
                        Hỗ trợ khách hàng
                    </h3>
                    <p class="text-lg mb-3">
                        <strong>Liên hệ:</strong> Hotline: 036.555.1123
                    </p>
                    <p class="text-lg ml-[70px] mb-3">
                        Email: happy.@gmail.com
                    </p>
                    <p class="text-lg">
                        <strong>Địa chỉ:</strong> Số 33 Nhân Chính, Trung Hòa,
                        Cầu Giấy, Hà Nội
                    </p>
                </div>
            </div>
        </div>

        <!-- Đường kẻ kéo dài toàn trang -->
        <div class="border-t border-white/30 w-full"></div>

        <!-- Bottom line -->
        <div
            class="flex flex-col md:flex-row items-start md:items-center justify-between max-w-[1800px] px-5 mx-auto text-xs gap-4"
        >
            <div>
                <p class="text-white text-2xl mb-5">Công ty TNHH Minh Trí</p>
                <p class="text-white text-xl">số CND/DN/ cấp ngày 2/1/2020</p>
            </div>

            <div class="w-1/5 text-left self-start">
                <div class="flex flex-col items-start mb-7">
                    <img
                        src="https://zaria.vn/wp-content/uploads/2021/04/bo-cong-thuong.png"
                        alt="Bộ Công Thương"
                        class="w-[120px] md:w-[140px] lg:w-[160px] self-start h-auto"
                    />
                    <span
                        class="text-lg md:text-base lg:text-lg ml-[15px] -mt-10"
                        >© Thông báo</span
                    >
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
/* Đảm bảo nội dung trong container có chiều rộng tối đa là 1800px */
.max-w-screen-xl {
    max-width: 1800px;
    margin: 0 auto;
}
</style>
