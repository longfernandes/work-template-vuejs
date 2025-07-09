<template>
    <div class="w-full mt-14">
        <div class="max-w-[1290px] mx-auto px-4">
            <div class="space-y-12">
                <!-- Header -->
                <div
                    class="flex flex-col lg:flex-row justify-between items-center gap-6"
                >
                    <!-- Left -->
                    <h2 class="text-3xl font-extrabold">ALL REPORTS</h2>

                    <!-- Center -->
                    <div class="flex-1 flex justify-center">
                        <input
                            type="text"
                            placeholder="SEARCH..."
                            class="w-[300px] md:w-[500px] px-5 py-2 border border-black/40 rounded-full text-sm outline-none"
                        />
                    </div>

                    <!-- Right -->
                    <div class="flex items-center gap-4">
                        <a
                            href="#!"
                            class="uppercase text-black/70 font-semibold text-sm"
                        >
                            Lọc
                        </a>
                        <select
                            class="px-4 py-2 border border-black/40 rounded-full text-sm bg-white"
                        >
                            <option>SẮP XẾP</option>
                            <option>OPTION 1</option>
                            <option>OPTION 2</option>
                        </select>
                    </div>
                </div>

                <!-- Body -->
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
                >
                    <div
                        v-for="(item, index) in reports"
                        :key="index"
                        class="w-full space-y-3"
                    >
                        <img
                            :src="item.image"
                            :alt="item.title"
                            class="w-full h-[300px] object-cover rounded-[10px] mt-4"
                        />
                        <h4 class="font-semibold text-[1.1rem] leading-tight">
                            {{ item.title }}
                        </h4>
                        <div class="flex gap-2">
                            <span
                                class="bg-[#f2f2f2] px-2 py-1 text-sm inline-block text-center"
                                >#hashtag1</span
                            >
                            <span
                                class="bg-[#f2f2f2] px-2 py-1 text-sm inline-block text-center"
                                >#hashtag2</span
                            >
                        </div>
                    </div>
                </div>

                <!-- Add more -->
                <div class="flex justify-center mt-10 mb-14">
                    <a
                        href="#!"
                        class="px-6 py-3 bg-[#f1f1f1] text-black font-semibold text-lg uppercase"
                    >
                        Xem Thêm
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const reports = [
    {
        image: "/images/all-1.svg",
        title: "Soi Profile của GenZ trên mạng xã hội: Bỏ túi mẹo tán đổi GenZ",
    },
    {
        image: "/images/all-2.svg",
        title: "“Đốt sức” kiếm thu nhâp - Không ngại nói về tiền: Quan điểm tài chính của GenZ khác thế hệ trước thế nào?",
    },
    {
        image: "/images/all-3.svg",
        title: "“Trẻ người, non-stop, điều gì ảnh hưởng tới quyết định mua sắm “không hồi kếtt của GenZ?",
    },
    {
        image: "/images/all-4.svg",
        title: "Z đi Music Fest: Nhìn GenZ chill nhạc brand phiêu được gì?",
    },
    {
        image: "/images/all-5.svg",
        title: "Z đi Music Fest: Nhìn GenZ chill nhạc brand phiêu được gì?",
    },
    {
        image: "/images/all-6.svg",
        title: "Soi Profile của GenZ trên mạng xã hội: Bỏ túi mẹo tán đổi GenZ",
    },
    {
        image: "/images/all-7.svg",
        title: "“Trẻ người, non-stop, điều gì ảnh hưởng tới quyết định mua sắm “không hồi kếtt của GenZ?",
    },
    {
        image: "/images/all-8.svg",
        title: "“Đốt sức” kiếm thu nhâp - Không ngại nói về tiền: Quan điểm tài chính của GenZ khác thế hệ trước thế nào?",
    },
];
</script>
