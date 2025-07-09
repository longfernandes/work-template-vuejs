<template>
    <div>
        <!-- HR đầu -->
        <hr class="border-t border-gray-00 my-6" />

        <!-- Wrapper -->
        <div
            class="max-w-[1290px] mt-[-25px] mx-auto px-4 flex flex-col lg:flex-row gap-10"
        >
            <!-- LEFT: TRENDING TOPIC -->
            <div class="flex-1">
                <div class="flex justify-between mt-15 items-center mb-6">
                    <h2 class="font-bold text-xl lg:text-2xl">
                        TRENDING TOPIC
                    </h2>
                    <button class="bg-gray-100 text-sm px-4 py-2 rounded-full font-semibold" @click="goToTrending">
                        XEM TOÀN BỘ
                    </button>
                </div>

                <!-- List -->
                <div
                    v-for="(item, index) in trendingItems"
                    :key="index"
                    class="mb-6"
                >
                    <h3 class="font-bold text-lg mb-2">
                        #{{ String(index + 1).padStart(2, "0") }}
                        <span
                            :class="[
                                'text-sm px-2 py-1 rounded ml-2',
                                tagColors[item.tag],
                            ]"
                            >{{ item.tag }}</span
                        >
                    </h3>
                    <div class="flex items-start gap-4 relative">
                        <img
                            :src="item.image"
                            alt=""
                            class="w-20 h-20 object-cover rounded-md"
                        />
                        <p class="text-sm font-medium pr-8 flex-1">
                            {{ item.text }}
                        </p>
                        <img
                            src="/images/muiten1.svg"
                            alt="arrow"
                            class="w-4 h-4 absolute top-0 right-0"
                        />
                    </div>
                    <hr
                        v-if="index !== trendingItems.length - 1"
                        class="border-t border-gray-200 mt-4"
                    />
                </div>
            </div>

            <!-- HR giữa -->
            <div class="hidden lg:block w-px bg-gray-500"></div>

            <!-- RIGHT: WEEKLY REPORT -->
            <div class="flex-1">
                <div class="flex justify-between items-center mt-15 mb-6">
                    <h2 class="font-bold text-xl lg:text-2xl">WEEKLY REPORT</h2>
                    <button class="bg-gray-100 text-sm px-4 py-2 rounded-full font-semibold" @click="goToReport">
                        XEM TOÀN BỘ
                    </button>
                </div>

                <!-- Carousel Manual -->
                <!-- Carousel Grid (2 cột) -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div
                        v-for="(item, index) in weeklyReports"
                        :key="index"
                        class="bg-white rounded-lg overflow-hidden shadow"
                    >
                        <img
                            :src="item.image"
                            alt=""
                            class="w-full h-64 object-cover"
                        />
                        <div class="p-4">
                            <p class="text-sm font-medium mb-4">
                                {{ item.text }}
                            </p>
                            <div class="flex gap-2 flex-wrap text-sm">
                                <span
                                    v-for="(tag, i) in item.tags"
                                    :key="i"
                                    class="bg-gray-200 px-2 py-1 rounded"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Dots -->
                <div class="flex justify-center gap-2 mt-20">
                    <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                    <span class="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span class="w-2 h-2 rounded-full bg-gray-300"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goToTrending() {
    router.push("/trending");
}
function goToReport() {
    router.push('/report')
}
const trendingItems = [
    {
        tag: "[Z-Finance]",
        image: "/images/report-1.svg",
        text: "Z đi Music Fest: Nhìn GenZ chill nhạc brand phiêu được gì?",
    },
    {
        tag: "[Z-Talk]",
        image: "/images/report-2.svg",
        text: "Soi Profile của GenZ trên mạng xã hội: Bỏ túi mẹo tán đổi GenZ",
    },
    {
        tag: "[Z-Song]",
        image: "/images/report-3.svg",
        text: "“Trẻ người, non-stop, điều gì ảnh hưởng tới quyết định mua sắm “không hồi kếtt của GenZ?",
    },
    {
        tag: "[Z-Finance]",
        image: "/images/report-4.svg",
        text: "“Đốt sức” kiếm thu nhâp - Không ngại nói về tiền: Quan điểm tài chính của GenZ khác thế hệ trước thế nào?",
    },
];

const weeklyReports = [
    {
        image: "/images/report-5.svg",
        text: "“Trẻ người, non-stop”, điều gì ảnh hưởng tới quyết định mua sắm “không hồi kết” của Gen Z?",
        tags: ["[Z-Finance]", "[Z-Talk]"],
    },
    {
        image: "/images/report-6.svg",
        text: "“Đốt sức” kiếm thu nhâp - Không ngại nói về tiền: Quan điểm tài chính của GenZ khác thế hệ trước thế nào?",
        tags: ["[Z-Finance]", "[Z-Finance]"],
    },
];

const tagColors = {
    "[Z-Finance]": "bg-green-200 text-black",
    "[Z-Talk]": "bg-pink-300 text-black",
    "[Z-Song]": "bg-blue-200 text-black",
};
</script>
