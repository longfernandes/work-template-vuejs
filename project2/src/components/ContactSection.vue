<template>
    <div
        class="grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-5 gap-6 md:gap-[30px] py-10 px-4 md:px-5 text-white max-w-[1800px] mx-auto"
    >
        <!-- div1 -->
        <div class="md:col-start-1 md:row-span-3 md:row-start-1">
            <div
                class="h-full bg-gray-800 text-white px-1 py-5 flex flex-col justify-center items-center rounded-lg"
            >
                <div>
                    <h2 class="text-4xl text-center font-semibold mb-8">
                        DỊCH VỤ
                    </h2>
                    <div
                        class="grid grid-cols-2 gap-10 font-bold text-center text-xl"
                    >
                        <span>TIỆC TẠI GIA</span>
                        <span>TIỆC CƯỚI HỎI</span>
                        <span>TIỆC BUFFET</span>
                        <span>TIỆC SỰ KIỆN</span>
                        <span class="col-span-2">TIỆC TEA BREAK</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- div3 -->
        <div class="md:col-start-2 md:row-span-5 md:row-start-1">
            <div class="h-64 md:h-full p-0 overflow-hidden relative group rounded-lg">
                <img
                    src="https://danangbest.com/uploads/news/nha-hang-ngon-o-hoi-an-1.webp"
                    alt="Set Menu"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                    class="absolute top-0 left-0 w-full h-full bg-opacity-40 text-white flex flex-col items-center justify-start p-4"
                >
                    <h2 class="text-4xl font-semibold mb-2">SET MENU</h2>
                    <a href="#" class="underline hover:text-yellow-500"
                        >Xem chi tiết</a
                    >
                </div>
            </div>
        </div>

        <!-- div4 -->
        <div class="md:col-start-3 md:row-span-5 md:row-start-1">
            <div class="h-64 md:h-full p-0 overflow-hidden relative group rounded-lg">
                <img
                    src="https://1phutsaigon.vn/wp-content/uploads/2024/10/yen-sushi-7.jpg"
                    alt="Menu Tự Chọn"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                    class="absolute top-0 left-0 w-full h-full bg-opacity-40 text-white flex flex-col items-center justify-start p-4"
                >
                    <h2 class="text-4xl text-center font-semibold mb-2">
                        MENU TỰ CHỌN
                    </h2>
                    <a href="#" class="underline hover:text-yellow-300"
                        >Xem chi tiết</a
                    >
                </div>
            </div>
        </div>

        <!-- div5 -->
        <div
            class="md:col-start-1 md:row-span-2 md:row-start-4 flex items-center justify-center"
        >
            <div></div>
            <div
                class="bg-[#D1AC89] w-full flex flex-col items-center justify-center h-full text-white p-6 text-center shadow-md rounded-lg"
            >
                <h2 class="text-2xl md:text-3xl font-semibold mb-4">LIÊN HỆ</h2>
                <p class=" text-base md:text-lg mb-2">
                    <span class="font-bold">Address:</span>
                    longdinho709@gmail.com
                </p>
                <p class="text-base md:text-lg">
                    <span class="font-bold">Hotline:</span> 0919319071
                </p>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactSection",
};
</script>

<style scoped></style>
