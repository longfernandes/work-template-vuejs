<template>
    <div class="py-16 px-5 bg-white text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-12">
            5 BƯỚC ĐỂ ĐẶT TIỆC
        </h2>
        <div
            class="flex flex-wrap lg:flex-nowrap justify-center gap-y-10 max-w-[1800px] gap-x-4 mx-auto"
        >
            <div
                v-for="(step, index) in steps"
                :key="index"
                class="w-full sm:w-[45%] lg:w-full flex flex-col items-center space-y-5"
            >
                <div class="relative">
                    <div
                        class="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-gray-100 flex items-center justify-center"
                    >
                        <component
                            :is="step.icon"
                            class="text-3xl sm:text-4xl text-black"
                        />
                    </div>
                    <div
                        class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold shadow-md"
                    >
                        {{ step.number }}
                    </div>
                </div>

                <div class="text-center px-2">
                    <h3
                        class="font-bold text-base sm:text-lg uppercase text-gray-900"
                    >
                        {{ step.title }}
                    </h3>
                    <p class="text-sm sm:text-base text-gray-700 mt-1">
                        {{ step.desc }}
                    </p>
                </div>
                <DotSeparator v-if="index < steps.length - 1" />
            </div>
        </div>
    </div>
</template>

<script>
import {
    BookOutlined,
    FileTextOutlined,
    UserOutlined,
    WalletOutlined,
} from "@ant-design/icons-vue";

const steps = [
    {
        icon: BookOutlined,
        number: 1,
        title: "TÌM HIỂU THÔNG TIN",
        desc: "Khách hàng tìm hiểu thông tin và đăng kí tư vấn",
    },
    {
        icon: FileTextOutlined,
        number: 2,
        title: "LIÊN HỆ TƯ VẤN",
        desc: "Nhân viên liên hệ trong 2 tiếng để nhận thông tin",
    },
    {
        icon: UserOutlined,
        number: 3,
        title: "KÝ KẾT HỢP ĐỒNG",
        desc: "Khách hàng ký hợp đồng đặt tiệc",
    },
    {
        icon: WalletOutlined,
        number: 4,
        title: "PHỤC VỤ TIỆC",
        desc: "Nhân viên phục vụ tại địa điểm yêu cầu",
    },
    {
        icon: BookOutlined,
        number: 5,
        title: "THANH TOÁN",
        desc: "Khách hàng thanh toán sau khi kết thúc tiệc",
    },
];

const DotSeparator = {
    template: `
    <div class="flex flex-col justify-center items-center mx-2 ">
      <div class="flex space-x-1 space-y-16">
        <span v-for="i in 5" :key="i" class="w-1 h-1 bg-gray-500 rounded-full inline-block"></span>
      </div>
    </div>
  `,
};

export default {
    name: "ServiceSection",
    components: {
        DotSeparator,
    },
    data() {
        return {
            steps: steps,
        };
    },
};
</script>

<style scoped>
/* Optional: Customize the styling if needed */
.w-full {
    width: 100%;
}
</style>
