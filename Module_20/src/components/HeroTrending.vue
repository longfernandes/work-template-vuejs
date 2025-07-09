<template>
    <div class="w-full mt-[93px]">
        <div class="max-w-[1290px] mx-auto px-4">
            <!-- Header -->
            <div class="flex justify-between items-center">
                <h2
                    class="text-[2.2rem] font-semibold leading-[0.89] text-[#1b1b1b]"
                >
                    TRENDING TOPIC
                </h2>
                <div class="flex gap-2 items-center">
                    <img src="/images/trending-1.svg" alt="trending-1" />
                    <img src="/images/trending-2.svg" alt="trending-2" />
                </div>
            </div>

            <!-- Body with 2 images -->
            <div class="flex justify-between mt-10 flex-wrap gap-6">
                <!-- Left Image Box -->
                <div class="flex flex-col gap-4 w-full lg:w-[49%]">
                    <hr class="border-gray-300 mb-2" />
                    <div class="flex justify-between gap-5">
                        <img
                            src="/images/trending-3.svg"
                            alt="trending-3"
                            class="w-full h-[280px] object-cover rounded-lg"
                        />
                        <div>
                            <h3 class="text-lg font-semibold">
                                Thấy giá vàng tăng, ham nhảy vào sóng lớn: Đây
                                không phải cuộc chơi dành cho người mới!
                            </h3>
                            <div class="flex gap-2 md:mt-42 lg:mt-28">
                                <span class="bg-[#F2F2F2] px-3 py-1 text-sm"
                                    >#hashtag1</span
                                >
                                <span class="bg-[#F2F2F2] px-3 py-1 text-sm"
                                    >#hashtag2</span
                                >
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Image Box -->
                <div class="flex flex-col gap-4 w-full lg:w-[49%]">
                    <hr class="border-gray-300 mb-2" />
                    <div class="flex justify-between gap-5">
                        <img
                            src="/images/trending-4.svg"
                            alt="trending-4"
                            class="w-full h-[280px] object-cover rounded-lg"
                        />
                        <div>
                            <h3 class="text-lg font-semibold">
                                Quách Đắc Thắng - founder La Lune: Giây phút
                                thấy Lisa diện đồ brand, mình biết giấc mơ đã
                                thành hiện thực
                            </h3>
                            <div class="flex gap-2 md:mt-42 lg:mt-28">
                                <span class="bg-[#F2F2F2] px-3 py-1 text-sm"
                                    >#hashtag1</span
                                >
                                <span class="bg-[#F2F2F2] px-3 py-1 text-sm"
                                    >#hashtag2</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
