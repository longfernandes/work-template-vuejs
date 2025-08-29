<template>
    <section class="py-20 sm:py-32 lg:py-40">
        <!-- Container -->
        <div
            class="max-w-[1500px] mx-auto flex flex-col items-center text-center px-4"
        >
            <!-- Avatar -->
            <img
                src="https://auvi.edu.vn/wp-content/uploads/2025/02/anh-ronaldo-27.jpg"
                alt="avatar"
                class="w-32 h-32 sm:w-48 sm:h-48 lg:w-70 lg:h-70 rounded-full shadow-lg mb-6 object-cover"
            />

            <!-- Title -->
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Hi, I'm Long 👋
            </h2>
            <p
                class="mt-2 text-lg sm:text-xl lg:text-2xl text-gray-700 font-semibold"
            >
                Frontend Developer Intern | Vue.js & React
            </p>

            <!-- Social icons -->
            <div
                class="flex mt-8 sm:mt-12 gap-5 sm:gap-8 lg:gap-10 flex-wrap justify-center"
            >
                <a
                    href="https://www.facebook.com/tran.van.long.982634/"
                    target="_blank"
                    class="inline-block"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
                        alt="Facebook"
                        class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:opacity-80 shadow-lg rounded-full"
                    />
                </a>

                <a
                    href="https://www.instagram.com/longnaldo_jr/"
                    target="_blank"
                    class="inline-block"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                        alt="Instagram"
                        class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:opacity-80 shadow-lg rounded-full"
                    />
                </a>

                <a
                    href="https://github.com/longfernandes"
                    target="_blank"
                    class="inline-block"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                        class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:opacity-80 shadow-lg rounded-full"
                    />
                </a>

                <a href="/zalo" target="_blank" class="inline-block">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png"
                        alt="Zalo"
                        class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:opacity-80 shadow-lg rounded-full"
                    />
                </a>

                <router-link to="/profile">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6994/6994770.png"
                        alt="Profile"
                        class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 hover:opacity-80 shadow-lg rounded-full"
                    />
                </router-link>
            </div>
        </div>
    </section>
</template>

