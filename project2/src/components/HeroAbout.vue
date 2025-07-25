<template>
    <div class="w-full py-16 px-5 md:mb-10 max-w-[1800px] mx-auto">
        <div class="flex flex-col md:flex-row items-start gap-8">
            <div class="w-full md:w-1/3 space-y-6">
                <h2 class="text-4xl font-bold leading-snug">
                    SỰ LỰA CHỌN ẨM <br />
                    THỰC SỐ 1
                </h2>
                <button
                    @click="handleViewGallery"
                    class="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-4 rounded"
                >
                    XEM HÌNH ẢNH TIỆC
                </button>
            </div>

            <div class="w-full md:w-2/3 md:space-y-8 lg:space-y-9 h-290">
                <div class="aspect-w-16 aspect-h-14 bg-black md:h-80 lg:h-200">
                    <iframe
                        class="w-full h-full"
                        :src="youtubeUrl"
                        title="Ẩm thực số 1"
                        allowfullscreen
                    ></iframe>
                </div>
                <div
                    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-20 text-justify"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus porta ante dui, nec condimentum diam auctor
                        nec. sInteger auctor turpis odio, eu lacinia lorem
                        ultricies at. Morbi maximus in sem vitae tempor. Donec
                        dictum lectus et bibendum faucibus. Integer mollis arcu
                        sit amet mollis blandit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus porta ante dui, nec condimentum diam auctor
                        nec. sInteger auctor turpis odio, eu lacinia lorem
                        ultricies at. Morbi maximus in sem vitae tempor. Donec
                        dictum lectus et bibendum faucibus. Integer mollis arcu
                        sit amet mollis blandit. Nulla imperdiet molestie nunc.
                        Curabitur consectetur nulla massa, sed vehicula mi
                        dictum in.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus porta ante dui, nec condimentum diam auctor
                        nec. sInteger auctor turpis odio, eu lacinia lorem
                        ultricies at. Morbi maximus in sem vitae tempor. Donec
                        dictum lectus et bibendum faucibus. Integer mollis arcu
                        sit amet mollis blandit. Nulla imperdiet molestie nunc.
                        Curabitur consectetur nulla massa, sed vehicula mi
                        dictum in.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus porta ante dui, nec condimentum diam auctor
                        nec. sInteger auctor turpis odio, eu lacinia lorem
                        ultricies at. Morbi maximus in sem vitae tempor. Donec
                        dictum lectus et bibendum faucibus.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function handleViewGallery() {
    router.push("/gallery");
}

// Thay VIDEO_ID bằng ID thực tế của video YouTube
const videoId = "VIDEO_ID";
const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;
</script>
