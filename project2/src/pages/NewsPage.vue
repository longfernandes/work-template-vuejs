<template>
    <div class="max-w-[1800px] mx-auto px-5 py-10 mb-5">
        <!-- Main content area -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <!-- Left section: List of articles -->
            <div class="space-y-4">
                <div
                    v-for="(article, index) in paginatedArticles"
                    :key="index"
                    class="bg-white p-4 rounded-lg shadow-md"
                >
                    <img
                        :src="article.image"
                        alt="article image"
                        class="w-full h-65 object-cover rounded-md mb-4"
                    />
                    <h2 class="text-xl font-bold text-gray-800">
                        {{ article.title }}
                    </h2>
                    <p class="text-gray-600 text-sm mb-2">{{ article.date }}</p>
                    <p class="text-gray-700 mb-4">{{ article.description }}</p>
                    <a href="#" class="text-blue-500 hover:underline"
                        >Đọc tiếp</a
                    >
                </div>
            </div>

            <!-- Right section: Latest articles and tags -->
            <div class="space-y-4">
                <!-- Latest articles -->
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">
                        Bài viết mới
                    </h3>
                    <div
                        v-for="(article, index) in latestArticles"
                        :key="index"
                        class="flex items-center mb-4"
                    >
                        <img
                            :src="article.image"
                            alt="latest article"
                            class="w-16 h-16 object-cover rounded-md mr-4"
                        />
                        <div>
                            <h4 class="text-sm font-semibold text-gray-800 hover:text-blue-300 cursor-pointer">
                                {{ article.title }}
                            </h4>
                            <p class="text-gray-600 text-xs">
                                {{ article.date }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Tags section -->
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">
                        Tags
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        <span
                            class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:text-blue-500 cursor-pointer"
                            >Công dụng đặt cỗ</span
                        >
                        <span
                            class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:text-blue-500 cursor-pointer"
                            >Gia đình</span
                        >
                        <span
                            class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:text-blue-500 cursor-pointer"
                            >Cá nhân</span
                        >
                        <span
                            class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:text-blue-500 cursor-pointer"
                            >Sức khỏe</span
                        >
                        <span
                            class="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full hover:text-blue-500 cursor-pointer"
                            >món ngon</span
                        >
                    </div>
                </div>
            </div>
        </div>

        <a-pagination
            v-model:current="currentPage"
            :total="articles.length"
            :pageSize="itemsPerPage"
            class="flex justify-center text-2xl font-bold"
        />
    </div>
</template>

<script>
// Import Pagination from Ant Design Vue
import { Pagination } from "ant-design-vue";

export default {
    components: {
        "a-pagination": Pagination, // Register Pagination component
    },
    data() {
        return {
            articles: [
                {
                    title: "Hà Nội: Mách bạn những địa chỉ đặt cỗ Tết chất lượng giá",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://acihome.vn/uploads/15/thiet-ke-mau-nha-hang-an-buffet-trong-khach-san-cao-cap-5-sao-view-dep-6.JPG",
                },
                {
                    title: "Dịch vụ đặt cỗ tết bội thu mùa Covid",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://static.vinwonders.com/production/3hLwdt8G-nha-hang-o-hoi-an-1.jpg",
                },
                {
                    title: "Điểm tên 5 món ăn nóng chuẩn vị tiệc nhà hàng",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://nof.com.vn/wp-content/uploads/2021/01/nhung-mon-an-ngon-tai-phap-ma-ban-nhat-dinh-phai-thuong-thuc-amthucphap.jpg",
                },
                {
                    title: "Gợi ý menu tiệc mini gia cho 12-15 người siêu ngon",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://congthanh.vn/uploads/images/menu%20nh%C3%A0%20h%C3%A0ng%20sang%20tr%E1%BB%8Dng/menu-nha-hang-sang-trong-min.jpg",
                },
                {
                    title: "ĐẶT CỖ TẾT, 3 địa chỉ đặt cỗ Tết online siêu tiện lợi để lười vẫn có đồ ăn ngon",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://media.eproshop.vn/file/uRGFtOHyz",
                },
                {
                    title: "Cỗ Tết thời công nghệ, chị em hiện đại nhàn tênh",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2018/2/7/590588/CO-5.jpg",
                },
                {
                    title: "Nấu cỗ tại nhà Hà Nội. Mẹo Chọn Thực Đơn Cỗ Cưới Chuẩn Miền Bắc",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://images2.thanhnien.vn/zoom/686_429/Uploaded/ttt/images/Content/tan-huong/mon-ngon-nha-hang/2017_07_w3/6.jpg",
                },
                {
                    title: "Có người khoe cỗ cưới quê 11 món sang chảnh, bóc hải sản mỏi tay chỉ 1,8 triệu",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/5/27/1345169/Cua-Bac-1.jpg",
                },
                {
                    title: "Phát hiện ra chỗ nấu cỗ tại Hà Nội được nhiều người ưa chuộng",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://media.eproshop.vn/file/uRGFtOHyz",
                },
                {
                    title: "2 triệu đồng cho một mâm, chủ quán nấu cỗ chay không kịp thở",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://toplist.vn/images/800px/quan-an-dam-chat-truyen-thong-viet-nam-tai-ha-noi-850029.jpg",
                },
                {
                    title: "Nấu cỗ tại nhà Hà Nội. Mẹo Chọn Thực Đơn Cỗ Cưới Chuẩn Miền Bắ",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://comnieunhungoc.com/storage/app/uploads/public/650/171/a47/thumb_73_1344_756_0_0_crop.jpg",
                },
                {
                    title: "Nhộn nhịp đặt mâm cỗ Rằm tháng riêng online",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://cuonnroll.com/wp-content/uploads/2018/07/mam-co-tet-4-4.jpg",
                },
                {
                    title: "Nhộn nhịp đặt mâm cỗ Rằm tháng riêng online",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://cuonnroll.com/wp-content/uploads/2018/07/mam-co-tet-4-4.jpg",
                },
                {
                    title: "Nhộn nhịp đặt mâm cỗ Rằm tháng riêng online",
                    date: "Thứ Năm, 24/07/2025",
                    description:
                        "Mở tiệc ăn mừng cùng chương trình Flash Sale siêu hấp dẫn: Chỉ từ 99.000 VNĐ trên ứng dụng Nhà Hàng",
                    image: "https://cuonnroll.com/wp-content/uploads/2018/07/mam-co-tet-4-4.jpg",
                },
            ],
            latestArticles: [
                {
                    title: "Hà Nội: Mách bạn những địa chỉ đặt cỗ Tết chất lượng giá",
                    date: "Thứ Năm, 24/07/2025",
                    image: "https://acihome.vn/uploads/15/thiet-ke-mau-nha-hang-an-buffet-trong-khach-san-cao-cap-5-sao-view-dep-6.JPG",
                },
                {
                    title: "Nhộn nhịp đặt mâm cỗ Rằm tháng riêng online",
                    date: "Thứ Năm, 24/07/2025",
                    image: "https://static.vinwonders.com/production/3hLwdt8G-nha-hang-o-hoi-an-1.jpg",
                },
                {
                    title: "Nấu cỗ tại nhà Hà Nội. Mẹo Chọn Thực Đơn Cỗ Cưới Chuẩn Miền Bắc",
                    date: "Thứ Năm, 24/07/2025",
                    image: "https://nof.com.vn/wp-content/uploads/2021/01/nhung-mon-an-ngon-tai-phap-ma-ban-nhat-dinh-phai-thuong-thuc-amthucphap.jpg",
                },
                {
                    title: "Phát hiện ra chỗ nấu cỗ tại Hà Nội được nhiều người ưa chuộng",
                    date: "Thứ Năm, 24/07/2025",
                    image: "https://congthanh.vn/uploads/images/menu%20nh%C3%A0%20h%C3%A0ng%20sang%20tr%E1%BB%8Dng/menu-nha-hang-sang-trong-min.jpg",
                },
                {
                    title: "Có người khoe cỗ cưới quê 11 món sang chảnh, bóc hải sản mỏi tay chỉ 1,8 triệu",
                    date: "Thứ Năm, 24/07/2025",
                    image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/5/27/1345169/Cua-Bac-1.jpg",
                },
                {
                    title: "Nấu cỗ tại nhà Hà Nội. Mẹo Chọn Thực Đơn Cỗ Cưới Chuẩn Miền Bắc",
                    date: "Thứ Năm, 24/07/2025",
                    image: "https://images2.thanhnien.vn/zoom/686_429/Uploaded/ttt/images/Content/tan-huong/mon-ngon-nha-hang/2017_07_w3/6.jpg",
                },
                {
                    title: "ĐẶT CỖ TẾT, 3 địa chỉ đặt cỗ Tết online siêu tiện lợi để lười vẫn có đồ ăn ngon",
                    date: "Thứ Năm, 24/07/2025",
                    image: "https://photo.znews.vn/w660/Uploaded/tmuitg/2016_10_13/1.jpg",
                },
            ],
            currentPage: 1,
            itemsPerPage: 4,
        };
    },
    computed: {
        // Calculate total pages for main articles
        totalPages() {
            return Math.ceil(this.articles.length / this.itemsPerPage);
        },
        // Paginated articles to display
        paginatedArticles() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.articles.slice(start, end);
        },
    },
};
</script>

<style scoped></style>
