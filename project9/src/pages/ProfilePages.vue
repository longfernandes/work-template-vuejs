<template>
  <div class="max-w-[1500px] mx-auto bg-blue-100 mt-32 lg:mt-30 rounded-lg shadow-lg mb-13 p-10">
    <h2 class="text-2xl text-center font-bold py-5">Thông Tin Cá Nhân</h2>

    <div class="flex flex-col lg:flex-row justify-between items-center gap-10 ">
      <!-- Thông tin -->
      <div class="flex-1">
        <div class="flex text-lg sm:text-xl gap-5 sm:gap-15 items-center mb-4">
          <h3 class="font-bold">Full Name:</h3>
          <p class="text-gray-600">Trần Văn Long</p>
        </div>
        <div class="flex text-lg sm:text-xl gap-5 sm:gap-9 items-center mb-4">
          <h3 class="font-bold">Date of Birth:</h3>
          <p class="text-gray-600">17/6/2003</p>
        </div>
        <div class="flex text-lg sm:text-xl gap-5 sm:gap-13 items-center mb-4">
          <h3 class="font-bold">Hometown:</h3>
          <p class="text-gray-600">Phúc Lộc, Hà Nội</p>
        </div>
        <div class="flex text-lg sm:text-xl gap-5 sm:gap-30 items-center mb-4">
          <h3 class="font-bold">Job:</h3>
          <p class="text-gray-600">Intern Frontend Developer</p>
        </div>
        <div class="flex text-lg sm:text-xl gap-5 sm:gap-20 items-center mb-4">
          <h3 class="font-bold">Hotline:</h3>
          <p class="text-gray-600">0982 993 805</p>
        </div>
        <div class="flex text-lg sm:text-xl gap-5 sm:gap-18 items-center mb-4">
          <h3 class="font-bold">Hobbies:</h3>
          <p class="text-gray-600">Games, Reading, Traveling, Football</p>
        </div>
        <div class="flex text-lg sm:text-xl gap-5 sm:gap-25 items-center mb-4">
          <h3 class="font-bold">Skills:</h3>
          <p class="text-gray-600">Teamwork, Learning new knowledge, ....</p>
        </div>
      </div>

      <!-- Avatar -->
      <div class="flex justify-center lg:justify-end">
        <img
          src="https://auvi.edu.vn/wp-content/uploads/2025/02/anh-ronaldo-27.jpg"
          alt="avatar"
          class="w-45 h-45 sm:w-48 sm:h-48 lg:w-56 lg:h-56 lg:mr-30 rounded-full shadow-lg object-cover"
        />
      </div>
    </div>
  </div>
</template>
