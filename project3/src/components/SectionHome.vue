<template>
    <section class="max-w-[1800px] mx-auto py-8">
        <h2 class="text-center text-2xl font-semibold mb-6">
            DANH MỤC SẢN PHẨM
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div
                v-for="(item, index) in categories"
                :key="index"
                class="bg-gray-100 flex justify-center gap-5 items-center p-4 cursor-pointer hover:shadow-md transition-shadow"
            >
                <img
                    :src="item.img"
                    :alt="item.name"
                    class="w-30 h-30 object-contain mb-2"
                />
                <span class="text-center text-lg font-medium text-gray-700">{{
                    item.name
                }}</span>
            </div>
        </div>
    </section>
</template>

<script setup>
const categories = [
    { name: "Giày Bóng Đá", img: "https://agiay.vn/wp-content/uploads/2022/08/bia-20.jpg" },
    { name: "Quần Áo Bóng Đá", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4Jl8GcBrP4xwINFUO7FPrsW63BINrawRCw&s" },
    { name: "Áo Đấu Đội Tuyển / CLB", img: "https://hidosport.vn/wp-content/uploads/2023/06/quan-ao-bong-da-mu-2024-mau-do-san-nha.jpg" },
    { name: "Găng Tay Thủ Môn", img: "https://soccerstore.vn/wp-content/uploads/2024/10/z5711166703318_6fb5ef67b4d96c2cef2711b1f34890da.jpg" },
    { name: "Vớ / Tất Bóng Đá", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lWIHpwv2zT6KcXYTt7JBqGHU_x_Kbmeawg&s" },
    { name: "Quả Bóng Đá Chuẩn", img: "https://molten.vn/wp-content/uploads/2024/07/F5N4900-1-1.png" },
    { name: "Phụ Kiện Tập Luyện (băng đầu gối, băng cổ tay, dây nhảy,...)", img: "https://chogym.vn/wp-content/uploads/2023/07/dai-quan-goi-co-day-chang-co-dinh-2-860x860.jpg" },
    { name: "Balo / Túi Đựng Đồ Thể Thao", img: "https://chogym.vn/wp-content/uploads/2023/03/tui-rut-the-thao-da-bong_004.jpg" },
    { name: "Đồ Bảo Hộ (bảo vệ ống đồng, bảo vệ chân,...)", img: "https://img.lazcdn.com/g/p/9d7ab59e8371f70a201848c6a4ab65d5.jpg_360x360q75.jpg_.webp" },
    { name: "Quần Áo Dài Thể Thao", img: "https://aobongda.net/pic/Images/Module/News/images/quan-ao-the-thao-mua-dong-khuyen-mai(1).jpg" },
];
</script>

<style></style>
