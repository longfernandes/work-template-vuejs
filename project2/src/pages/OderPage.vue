<template>
    <div
        class="flex items-center justify-center bg-cover bg-center bg-no-repeat px-3 sm:px-5 py-10 md:py-30"
        style="
            background-image: url('https://noithatlogic.vn/upload/00aff611-24ef-43de-bd67-55d11a731bfc/hinh-anh-ban-ghe-nha-hang-4.jpg');
        "
    >
        <div class="absolute inset-0 bg-black/20 z-0"></div>
        <form
            @submit.prevent="handleSubmit"
            class="bg-white/80 backdrop-blur-sm p-5 sm:p-10 shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 rounded-md"
        >
            <h2 class="text-2xl md:col-span-2 text-center font-bold">
                Liên Hệ Đặt Tiệc
            </h2>
            <p class="md:col-span-2 text-center text-sm text-gray-600">
                Fast booking – High-quality cuisine – Dedicated service.
            </p>

            <!-- Họ và tên -->
            <div class="col-span-1">
                <label class="block font-semibold">Họ và tên</label>
                <input
                    v-model="form.name"
                    type="text"
                    class="w-full border-b focus:outline-none"
                    placeholder="Nhập họ và tên"
                />
                <span v-if="errors.name" class="text-red-500 text-sm">
                    {{ errors.name }}
                </span>
            </div>

            <!-- Số lượng khách -->
            <div class="col-span-1">
                <label class="block font-semibold">Số lượng khách</label>
                <input
                    v-model="form.guests"
                    type="number"
                    class="w-full border-b focus:outline-none"
                    placeholder="0"
                />
                <span v-if="errors.guests" class="text-red-600 text-sm">
                    {{ errors.guests }}
                </span>
            </div>

            <!-- Số điện thoại -->
            <div class="col-span-1">
                <label class="block font-semibold">Số điện thoại</label>
                <input
                    v-model="form.phone"
                    type="text"
                    class="w-full border-b focus:outline-none"
                    placeholder="Số điện thoại"
                />
                <span v-if="errors.phone" class="text-red-600 text-sm">
                    {{ errors.phone }}
                </span>
            </div>

            <!-- Ngày -->
            <div class="col-span-1">
                <label class="block font-semibold">Ngày tổ chức sự kiện</label>
                <input
                    v-model="form.date"
                    type="date"
                    class="w-full border-b focus:outline-none"
                />
                <span v-if="errors.date" class="text-red-600 text-sm">
                    {{ errors.date }}
                </span>
            </div>

            <!-- Địa chỉ -->
            <div class="col-span-1">
                <label class="block font-semibold">Địa chỉ</label>
                <input
                    v-model="form.address"
                    type="text"
                    class="w-full border-b focus:outline-none"
                    placeholder="Nhập địa chỉ"
                />
                <span v-if="errors.address" class="text-red-500 text-sm">
                    {{ errors.address }}
                </span>
            </div>

            <!-- Loại sự kiện -->
            <div class="col-span-1">
                <label class="block font-semibold">Loại sự kiện</label>
                <input
                    v-model="form.eventType"
                    type="text"
                    class="w-full border-b focus:outline-none"
                    placeholder="Nhập loại sự kiện"
                />
                <span v-if="errors.eventType" class="text-red-600 text-sm">
                    {{ errors.eventType }}
                </span>
            </div>

            <!-- Tư vấn trọn gói -->
            <div class="col-span-1 md:col-span-2 flex items-center">
                <input
                    v-model="form.fullService"
                    type="checkbox"
                    class="mr-2 accent-orange-600"
                />
                <label class="text-sm">
                    Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khấu,...)
                </label>
            </div>

            <!-- Nút gửi -->
            <div class="col-span-1 md:col-span-2 flex justify-center">
                <button
                    type="submit"
                    class="bg-orange-600 text-white px-6 py-2 hover:bg-orange-700 shadow-md rounded"
                >
                    GỬI THÔNG TIN
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                phone: "",
                address: "",
                guests: "",
                date: "",
                eventType: "",
                fullService: false,
            },
            errors: {},
        };
    },
    methods: {
        handleSubmit() {
            // Reset errors
            this.errors = {};

            // Validate form
            if (!this.form.name) {
                this.errors.name = "Họ tên không hợp lệ";
            }
            if (!this.form.phone || !/^\d{10,11}$/.test(this.form.phone)) {
                this.errors.phone = "Số điện thoại không hợp lệ";
            }
            if (!this.form.address) {
                this.errors.address = "Địa chỉ không hợp lệ";
            }
            if (!this.form.guests || this.form.guests <= 0) {
                this.errors.guests = "Số lượng không hợp lệ";
            }
            if (!this.form.date) {
                this.errors.date = "Vui lòng chọn ngày";
            }
            if (!this.form.eventType) {
                this.errors.eventType = "Loại sự kiện không hợp lệ";
            }

            if (Object.keys(this.errors).length === 0) {
                // Submit form data
                alert("Thông tin đã được gửi thành công");
                // Here you can handle form submission like sending data to a server
                localStorage.setItem("bookingForm", JSON.stringify(this.form));

                this.form = {
                    name: "",
                    phone: "",
                    address: "",
                    guests: "",
                    date: "",
                    eventType: "",
                    fullService: false,
                };
            }
        },
    },
};
</script>

<style scoped>
/* Optional: Customize the styling if needed */
.w-full {
    width: 100%;
}
</style>
