<template>
    <div
        class="relative bg-cover bg-center text-white"
        :style="{ backgroundImage: `url('${bannerUrl}')` }"
    >
        <div class="relative py-16 sm:py-20 px4 sm:px-5 w-full h-full">
            <div class="absolute inset-0 bg-black opacity-60 z-0"></div>
            <form
                @submit.prevent="onSubmit"
                class="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 max-w-[1800px] mx-auto"
            >
                <!-- Intro -->
                <div class="md:w-1/3 w-full text-center md:text-left">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white">
                        ĐẶT TIỆC Ở ĐÂY
                    </h2>
                    <p class="text-base sm:text-lg md:text-xl px-2 sm:px-0 lg:px-0  leading-relaxed text-white">
                        Đặt tiệc ngay hôm nay để những sự kiện quan trọng của
                        bạn trở nên đơn giản và dễ dàng hơn bao giờ hết
                    </p>
                </div>

                <!-- Inputs -->
                <div
                    class="md:w-1/3 w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                >
                    <!-- Ngày -->
                    <div
                        class="flex flex-col items-center justify-center text-center"
                    >
                        <p class="uppercase text-white font-bold text-xl mb-1">
                            CHỌN NGÀY ĐẶT
                        </p>
                        <a-date-picker
                            v-model:value="date"
                            format="DD/MM"
                            :placeholder="'dd/mm'"
                            allow-clear="false"
                            bordered="false"
                            class="!bg-transparent !text-white !border-0 border-b-2 border-white !text-center font-bold text-3xl w-[90px] px-0 h-[50px] flex items-center justify-center"
                            popup-class-name="!bg-white"
                        />
                        <div v-if="dateError" class="text-red-400 text-xl mt-1">
                            {{ dateError }}
                        </div>
                    </div>

                    <!-- Số bàn -->
                    <div
                        class="flex flex-col items-center justify-center text-center relative"
                    >
                        <p class="uppercase text-white font-bold text-xl mb-1">
                            Số bàn tiệc
                        </p>
                        <div
                            class="relative inline-flex items-center justify-center h-[42px]"
                        >
                            <input
                                v-model="tables"
                                type="number"
                                min="1"
                                max="100"
                                class="text-white text-xl font-bold text-center w-[90px] pr-6 bg-transparent border-0"
                            />
                            <div
                                class="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center h-full text-white"
                            >
                                <button
                                    type="button"
                                    @click="incrementTables"
                                    class="hover:text-gray-300 p-0 leading-none"
                                >
                                    ▲
                                </button>
                                <button
                                    type="button"
                                    @click="decrementTables"
                                    class="hover:text-gray-300 p-0 leading-none"
                                >
                                    ▼
                                </button>
                            </div>
                        </div>
                        <div
                            v-if="tablesError"
                            class="text-red-400 text-xs mt-1"
                        >
                            {{ tablesError }}
                        </div>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="md:w-1/3 flex flex-col items-center md:items-end gap-3 mt-4 md:mt-0">
                    <a-button
                        type="primary"
                        html-type="submit"
                        class="bg-orange-600 hover:bg-orange-700 text-white flex items-center px-6 py-4 font-semibold rounded"
                    >
                        <p class="text-xl font-bold" @click="goToOder">ĐẶT TIỆC NGAY</p>
                    </a-button>
                    <a-button
                        type="default"
                        class="bg-white text-orange-500 border-orange-500 flex items-center px-6 py-4 hover:bg-orange-600 hover:text-white"
                    >
                        <p class="text-xl font-bold" @click="goToMenu">XEM THỰC ĐƠN</p>
                    </a-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useUtils } from "../utils/formatData.js";
import { useRouter } from "vue-router";

function goToOder() {
    router.push("/oder");
}

function goToMenu() {
    router.push("/menu");
}

const router = useRouter();// Khai báo các biến trạng thái
const date = ref(null); // Biến ngày
const tables = ref(1); // Biến số bàn
const dateError = ref(null); // Biến lỗi cho ngày
const tablesError = ref(null); // Biến lỗi cho số bàn
const bannerUrl =
    "https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg";

// Sử dụng useUtils để format ngày
const formattedDate = useUtils(date.value);

// Xác thực ngày đặt và số bàn
const validateForm = () => {
    if (!date.value) {
        dateError.value = "Vui lòng chọn ngày đặt";
    } else {
        dateError.value = null;
    }

    if (tables.value < 1 || tables.value > 100) {
        tablesError.value = "Số bàn phải trong khoảng từ 1 đến 100";
    } else {
        tablesError.value = null;
    }
};

// Submit form
const onSubmit = () => {
    validateForm();
    if (!dateError.value && !tablesError.value) {
        console.log("Đặt tiệc với:", {
            date: formattedDate, // Sử dụng ngày đã format
            tables: tables.value,
        });
    }
};

// Hàm tăng và giảm số bàn
const incrementTables = () => {
    if (tables.value < 100) tables.value++;
};

const decrementTables = () => {
    if (tables.value > 1) tables.value--;
};
</script>

<style scoped>
:deep(.ant-picker-input input) {
  color: white !important;
}
</style>
