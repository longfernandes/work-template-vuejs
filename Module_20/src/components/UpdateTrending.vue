<template>
    <div>
        <!-- Update Section -->
        <section class="w-full mt-16">
            <div class="max-w-[1290px] mx-auto px-4">
                <h2 class="text-[2.2rem] font-semibold uppercase mb-5">
                    Mới cập nhật
                </h2>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                    <div
                        v-for="(item, index) in updates"
                        :key="index"
                        class="space-y-4"
                    >
                        <hr class="border-gray-300" />
                        <div class="flex gap-6 relative">
                            <img
                                :src="item.image"
                                alt="update image"
                                class="w-[176px] h-[228px] object-cover rounded-[10px]"
                            />
                            <div class="relative flex-1">
                                <h3
                                    class="font-semibold text-[1.1rem] leading-[1.35] text-black"
                                >
                                    {{ item.title }}
                                </h3>
                                <div class="absolute bottom-0 flex gap-2 mt-3">
                                    <span class="bg-[#f2f2f2] text-sm px-2 py-1"
                                        >#hashtag1</span
                                    >
                                    <span class="bg-[#f2f2f2] text-sm px-2 py-1"
                                        >#hashtag2</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Add More -->
                <div class="text-center mt-24 mb-24">
                    <a
                        href="#"
                        class="text-[1.5rem] font-semibold text-black px-4 py-2 bg-[#f2f2f2] inline-block"
                    >
                        Xem Thêm
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const updates = [
    {
        image: "/images/update-1.svg",
        title: "Quách Đắc Thắng - founder La Lune: “Giây phút thấy Lisa diện đồ của brand, mình biết giấc mơ lớn đã thành hiện thực”",
    },
    {
        image: "/images/update-2.svg",
        title: '"Thế hệ bông tuyết" - Chuyện những người trẻ bị gán mác "yếu đuối" và lời khuyên của chuyên gia về vấn đề thời đại',
    },
    {
        image: "/images/update-3.svg",
        title: "Thấy giá vàng tăng, ham nhảy vào sóng lớn: Chuyên gia nhận định đây không phải cuộc chơi dành cho người mới!",
    },
    {
        image: "/images/update-4.svg",
        title: "Cuộc đua của thương hiệu nội địa với làn sóng toàn cầu hóa.",
    },
    {
        image: "/images/update-1.svg",
        title: "“Thế hệ bông tuyết” - Gắn mác yếu đuối và góc nhìn đúng đắn từ chuyên gia",
    },
    {
        image: "/images/update-2.svg",
        title: "Founder trẻ và giấc mơ startup: Câu chuyện truyền cảm hứng giữa thời đại số",
    },
    {
        image: "/images/update-4.svg",
        title: "Cuộc đua của thương hiệu nội địa với làn sóng toàn cầu hóa.",
    },
    {
        image: "/images/update-1.svg",
        title: "“Thế hệ bông tuyết” - Gắn mác yếu đuối và góc nhìn đúng đắn từ chuyên gia",
    },
    {
        image: "/images/update-2.svg",
        title: "Founder trẻ và giấc mơ startup: Câu chuyện truyền cảm hứng giữa thời đại số",
    },
];
</script>
