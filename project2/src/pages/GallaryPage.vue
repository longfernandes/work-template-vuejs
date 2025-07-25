<template>
  <div class="max-w-[1800px] mx-auto px-5 p-4 mb-10">
    <h2 class="font-bold text-3xl flex justify-center mb-10 mt-5">Hình Ảnh Sự Kiện (230)</h2>
    <!-- Grid chứa ảnh, 3 cột và 6 hàng -->
    <div class="grid grid-cols-3 gap-8">
      <!-- Lặp qua mảng ảnh để hiển thị ảnh -->
      <div v-for="(image, index) in images" :key="index" class="flex justify-center items-center">
        <img :src="image" alt="Image" class="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGrid',
  data() {
    return {
      // Mảng chứa các URL của ảnh
      images: [
        'https://thietbibuffet.vn/wp-content/uploads/2020/02/thuc-don-buffet-sang-6.jpg', // Ảnh 1
        'https://thitbonhat.vn/wp-content/uploads/2023/11/cac-dau-bep-tai-t-u-n-g-dining.jpg', // Ảnh 2
        'https://studios.vn/wp-content/uploads/2018/12/ch%E1%BB%A5p-%E1%BA%A3nh-s%E1%BB%B1-ki%E1%BB%87n-nh%C3%A0-h%C3%A0ng-1.jpg', // Ảnh 3
        'https://img.vietcetera.com/wp-content/uploads/2018/07/Top-5-Nha-Hang-Chau-Au-Featured-Image-2.jpg', // Ảnh 4
        'https://cdnphoto.dantri.com.vn/SSxZOCrUDZyPS4Cquzo5D6x-oRQ=/thumb_w/1020/2025/03/20/cha-ca-1742448511014.jpg', // Ảnh 5
        'https://honthom.sunworld.vn/wp-content/uploads/2024/02/nha-hang-dia-trung-hai-phu-quoc-green-tree-buffet-3.jpg', // Ảnh 6
        'https://phongcachmoc.vn/upload/baiviet/image15-9124.jpg', // Ảnh 7
        'https://grandworld.vinhomes.vn/wp-content/uploads/2024/01/khoi-restaurant-2.jpg', // Ảnh 8
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uEdQk5Ljo6rvhO2DcasMmQnd9rthSOVVRw&s', // Ảnh 9
        'https://skylightnhatrang.com/wp-content/uploads/2024/07/nha-hang-o-nha-trang-7.jpg', // Ảnh 10
        'https://api.sovaba.travel/uploads/sm_Nha_hang_la_co_beach_quang_binh_2c21c21515.jpg', // Ảnh 11
        'https://cdn.xanhsm.com/2025/03/243a7f79-nha-hang-ngan-dinh-2.jpg', // Ảnh 12
        'https://grandworld.vinhomes.vn/wp-content/uploads/2023/12/net-hue.jpg', // Ảnh 13
        'https://quanlykhachsan.edu.vn/wp-content/uploads/2021/11/buffet-5-sao-tphcm.jpg', // Ảnh 14
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHslnB8344SeNbml5018lA7FX1QfOfEeFjDw&s', // Ảnh 15
        'https://grandworld.vinhomes.vn/wp-content/uploads/2023/12/grill-63.jpg', // Ảnh 16
        'https://statics.vincom.com.vn/xu-huong/cac-mon-an-nha-hang-5-sao/nha-hang-5-sao-la-gi.jpg', // Ảnh 17
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1IPPw5PLPKkr7yodsv8UmflwMyZZg4bD9g&s'  // Ảnh 18
      ]
    };
  }
};
</script>

<style scoped>
/* Không cần CSS bổ sung vì Tailwind CSS đã đủ để tạo lưới */
</style>
