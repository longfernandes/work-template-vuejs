<template>
    <section class="bg-white-900 max-w-[1800px] mx-auto py-10 ">
        <div class="px-4">
            <!-- Tiêu đề -->
            <h2 class="text-center text-3xl font-bold text-black mb-10">
                Thương Hiệu
            </h2>

            <!-- Grid logo -->
            <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 place-items-center"
            >
                <div
                    v-for="(brand, index) in brands"
                    :key="index"
                    class="bg-gray-800 rounded-md p-4 hover:scale-105 transition-transform cursor-pointer flex items-center justify-center"
                >
                    <img
                        :src="brand.logo"
                        :alt="brand.name"
                        class="h-50 w-full object-contain"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const brands = [
    {
        name: "Adidas",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLP_RczT8Fzvt5y5zbSUvOAq8kCi4Nxr7pQ&s",
    },
    {
        name: "Mizuno",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqBGU7C9y3Fl_Urxah2BiumgihiHMY_Ot6Q&s",
    },
    {
        name: "Nike",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2fPBSHRBfFl8PnGsZD271GNmLG06JBAjgBI4HLqYLQS4MtVeLn_YDmPv14qsEvFNQYc&usqp=CAU",
    },
    {
        name: "Jogarbola",
        logo: "https://pos.nvncdn.com/3c8244-211061/pc/20230518_5YYjSOrQ.jpeg?v=1684383566",
    },
    {
        name: "Kamito",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpKjiiEVUjBRy0TfN_ZPzR8rx-UNEBouNWg&s",
    },
    {
        name: "Puma",
        logo: "https://thietkelogo.vn/wp-content/uploads/2017/10/logo-12.jpg",
    },
    {
        name: "Manchester",
        logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_lczM5NrYw_dhYZ_ilwmRTSi18pGGeRofRD3ipztjvQVpwqJUeCnIas-CMrHS6__AMJPmIqmWzLzA0EBUUY7hnj5w0ZZMh_xjr3UOyZ9x4FaqIsL_Ovyzb8uU9wjTJsl-3kDPe9IVI8KGku8BOZ6GHhQDHR1_-MZWQqzuk01WJrzE3tvZ4kYtQRnRmQ/s1000/man%20utd%2022%2024%20kit%20%284%29.jpg",
    },
];
</script>
