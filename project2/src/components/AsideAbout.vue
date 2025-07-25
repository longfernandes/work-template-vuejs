<template>
    <div class="max-w-7xl max-w-[1800px] px-5 mx-auto mx-auto mb-5 py-16">
        <a-typography-title
            level="2"
            class="text-center uppercase text-3xl font-bold mb-15"
        >
            Dịch vụ cung cấp
        </a-typography-title>
        <a-row :gutter="[32, 32]">
            <a-col
                v-for="(service, index) in services"
                :key="index"
                :xs="24"
                :md="12"
            >
                <div class="flex items-start mt-10 gap-4">
                    <div class="text-orange-500 text-xl">
                        <component :is="service.icon" />
                    </div>
                    <div>
                        <h3
                            class="text-base text-xl font-semibold uppercase mb-1"
                        >
                            {{ service.title }}
                        </h3>
                        <a-typography-paragraph class="text-gray-600 mb-0">
                            {{ service.description }}
                        </a-typography-paragraph>
                    </div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script setup>
import {
    HomeOutlined,
    GiftOutlined,
    CoffeeOutlined,
    HeartOutlined,
    CalendarOutlined,
} from "@ant-design/icons-vue";

const services = [
    {
        icon: HomeOutlined,
        title: "Tiệc tại gia",
        description:
            "Tiết kiệm thời gian cho bữa tiệc ấm cúng, dành trọn khoảnh khắc sum vầy bên người thân yêu – Bạn chỉ cần lựa chọn thực đơn yêu thích, Tiệc tại gia sẽ mang trải nghiệm trọn vẹn đến với gia đình.",
    },
    {
        icon: GiftOutlined,
        title: "Tiệc buffet",
        description:
            "Tiệc buffet với nhiều lựa chọn thực đơn đa dạng dành cho các sự kiện lớn nhỏ, từ các hoạt động mở và có nhiều thời gian như gala dinner đến liên hoan nội bộ hay tiệc gia đình.",
    },
    {
        icon: CoffeeOutlined,
        title: "Tiệc tea break",
        description:
            "Tea break được tổ chức dưới hình thức tiệc đứng với trà, bánh ngọt, và hoa quả, diễn ra vào giữa giờ giải lao của các buổi hội nghị, khai trương,... giúp khách mời có khoảng thời gian thư giãn trước khi tiếp tục tham dự sự kiện.",
    },
    {
        icon: HeartOutlined,
        title: "Tiệc cưới hỏi",
        description:
            "Sự kiện đặc biệt, không thể thiếu đội ngũ tận tâm. Với thực đơn phong phú từ truyền thống tới hiện đại, cùng đội ngũ phục vụ chuyên nghiệp, Tiệc tại gia sẽ đồng hành cùng bạn và gia đình trong ngày vui một cách trọn vẹn nhất.",
    },
    {
        icon: CalendarOutlined,
        title: "Tiệc sự kiện",
        description:
            "Tiệc tại gia sẽ giúp bạn lo chu toàn các sự kiện lớn cho công ty, hội thảo cần sự chỉn chu từ khâu chuẩn bị tới quy trình phục vụ chuyên nghiệp, đảm bảo hài lòng mọi khách hàng tham dự.",
    },
];
</script>
