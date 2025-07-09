<template>
    <div
        class="w-full h-[790px] bg-cover bg-center relative"
        style="background-image: url('/images/homepage.svg')"
    >
        <!-- Logo ZLAB to ra sát 2 mép -->
        <div class="absolute top-12 left-0 right-0 flex justify-center">
            <img
                src="/images/zlab-1.svg"
                alt="zlab-1"
                class="w-[95%] h-auto object-contain"
            />
        </div>

        <!-- Menu điều hướng -->
        <div class="absolute md:top-55 lg:top-110 w-full px-12">
            <div
                class="flex justify-between text-white font-bold text-xl uppercase tracking-wide"
            >
                <a href="#!" class="hover:underline">OUR VISION</a>
                <a href="#!" class="hover:underline">WHAT WE DO</a>
                <a href="#!" class="hover:underline">WHAT WE GOOD AT</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderAbout",
};
</script>
