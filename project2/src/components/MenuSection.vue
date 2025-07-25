<template>
    <div class="w-full flex justify-center items-center bg-gray-100 px-5 py-9">
        <div class="max-w-[1800px] mx-auto">
            <div
                class="flex flex-col md:flex-row gap-12 justify-center items-center"
            >
                <!-- Left Section -->
                <div
                    :class="{ 'w-full': !isModalOpen, 'md:w-1/2': isModalOpen }"
                    class="text-left"
                >
                    <h2 class="text-5xl font-bold text-gray-900 mb-5">
                        Tiệc tại gia chất nhà hàng
                    </h2>
                    <p class="text-gray-700 leading-relaxed text-2xl mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum quae fugit accusantium commodi esse modi pariatur
                        praesentium, voluptas dolor ea qui? Vel dolore ipsam
                        vitae voluptatem esse repellat nobis sint. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Eum quae
                        fugit accusantium commodi esse modi pariatur
                        praesentium, voluptas dolor ea qui? Vel dolore ipsam
                        vitae voluptatem esse repellat nobis sint.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum quae fugit accusantium commodi esse modi pariatur
                        praesentium, voluptas dolor ea qui? Vel dolore ipsam
                        vitae voluptatem esse repellat nobis sint.
                    </p>
                </div>

                <!-- Right Section (Video thumbnail) -->
                <div class="relative w-full md:w-1/2" @click="openVideo">
                    <div
                        class="relative px-10 py-10 rounded-lg overflow-hidden cursor-pointer"
                    >
                        <img
                            src="https://tenkujapan.vn/wp-content/uploads/2023/11/1-1.png"
                            alt="Video thumbnail"
                            class="w-full h-full object-cover"
                        />
                        <div
                            class="absolute inset-0 bg-opacity-30 flex items-center justify-center"
                        >
                            <PlayCircleOutlined
                                style="font-size: 64px; color: #ef4444"
                                class="drop-shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Video (only when modal is open) -->
        <div v-if="isModalOpen">
            <!-- Overlay (Background Darkened) -->
            <div
                class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
                @click="closeVideo"
            ></div>

            <!-- Modal Video -->
            <div
                class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
                <div
                    class="relative w-full max-w-4xl aspect-video pointer-events-auto ring-2 ring-white ring-opacity-60 rounded-lg shadow-2xl"
                >
                    <iframe
                        class="absolute top-0 left-0 w-full h-full rounded-lg"
                        :src="`https://www.youtube.com/embed/0JXAWxh6PoY?autoplay=1`"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <button
                        class="absolute -top-4 -right-4 text-white text-xl bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-20 transition"
                        @click="closeVideo"
                    >
                        <CloseOutlined />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { PlayCircleOutlined, CloseOutlined } from "@ant-design/icons-vue";

export default {
    name: "MenuSection",
    components: {
        PlayCircleOutlined,
        CloseOutlined,
    },
    data() {
        return {
            isModalOpen: false,
        };
    },
    methods: {
        openVideo() {
            this.isModalOpen = true;
            document.body.classList.add("overflow-hidden");
        },
        closeVideo() {
            this.isModalOpen = false;
            document.body.classList.remove("overflow-hidden");
        },
    },
};
</script>

<style scoped>
/* Optional: Customize the styling if needed */
.max-w-screen-xl {
    max-width: 1800px;
    margin: 0 auto;
}
</style>
