import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function BannerHome() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Mobile: carousel */}
      <div className="sm:hidden">
        <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
          <SwiperSlide>
            <img
              src="/images/assets/banner31.svg"
              alt="Black Shirt"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/assets/banner32.svg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Desktop: 2 banner cạnh nhau */}
      <div className="hidden sm:grid grid-cols-6 grid-rows-4 gap-5 mb-5">
        <div className="col-span-3 row-span-4 bg-gray-100 flex items-center justify-center">
          <img
            src="/images/assets/banner31.svg"
            alt="Black Shirt"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 row-span-4 col-start-4 bg-gray-100 flex items-center justify-center">
          <img
            src="/images/assets/banner32.svg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
