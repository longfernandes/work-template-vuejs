import React from "react";

const HeaderHome = () => {
    return (
        <header
            className="relative w-full min-h-[650px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/assets/banner1.svg')" }}
        >
            {/* Layer hình ảnh */}
            <div className="relative w-full h-full">
                <img
                    src="/images/assets/text1.svg"
                    alt="text1"
                    className="absolute w-full hidden md:block"
                />
                <img
                    src="/images/assets/Vector 3.svg"
                    alt="vector3"
                    className="absolute w-[270px] hidden md:block"
                />
                <img
                    src="/images/assets/Shape-1 3.svg"
                    alt="sape1"
                    className="absolute w-[100px] left-10 hidden md:block"
                />
                <img
                    src="/images/assets/Hoodie-Mockup-Templates 1.svg"
                    alt="hoodie"
                    className="absolute w-[500px] right-0 hidden md:block"
                />
                <img
                    src="/images/assets/Shape.svg"
                    alt="sape2"
                    className="absolute right-0 w-[100px] mt-[219px] hidden md:block"
                />
                <img
                    src="/images/assets/men1.svg"
                    alt="men"
                    className="absolute w-[669px] h-[850px] right-[140px] -mt-[200px] z-0 hidden md:block "
                />
            </div>

            {/* Nội dung chính */}
            <div className="absolute text-white w-[500px] left-[320px] mt-[200px] hidden md:block">
                <h3 className="text-[1.9rem] font-medium mb-5 leading-[1.5]">
                    New Season
                </h3>
                <h1 className="text-[3.5rem] font-semibold uppercase mb-5 leading-[1.5]">
                    New OutFit
                </h1>
                <p className="text-[1.2rem] font-normal leading-[1.5]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum
                </p>
            </div>

            {/* Responsive mobile content */}
            <div className="block md:hidden text-center text-white pt-10">
                <h3 className="text-base font-medium mb-2 px-5">New Season</h3>
                <h1 className="text-2xl font-bold uppercase px-5 mb-2">
                    New OutFit
                </h1>
                <p className="text-sm leading-relaxed mb-6">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum
                </p>
                <img
                    src="/images/assets/men1.svg"
                    alt="men"
                    className="w-full object-cover"
                />
            </div>

            {/* Nút điều hướng trái/phải */}
            <div className="absolute top-1/2 left-50 transform -translate-y-1/2 z-10 hidden md:flex">
                <button className="w-[50px] h-[50px] border bg-white border-white rounded-[12px] flex items-center justify-center text-lg">
                    ←
                </button>
            </div>
            <div className="absolute top-1/2 right-30 transform -translate-y-1/2 z-10 hidden md:flex">
                <button className="w-[50px] h-[50px] bg-white border border-[#E1E5EB] rounded-[12px] flex items-center justify-center text-lg">
                    →
                </button>
            </div>

            {/* Responsive buttons for mobile */}
            <div className="absolute top-45 left-5 z-10 md:hidden">
                <button className="w-[40px] h-[40px] bg-white text-black border border-gray-300 rounded-[12px] flex items-center justify-center text-lg shadow-md">
                    ←
                </button>
            </div>

            {/* Nút phải (mobile) */}
            <div className="absolute top-45 right-5 z-10 md:hidden">
                <button className="w-[40px] h-[40px] bg-white text-black border border-gray-300 rounded-[12px] flex items-center justify-center text-lg shadow-md">
                    →
                </button>
            </div>
        </header>
    );
};

export default HeaderHome;
