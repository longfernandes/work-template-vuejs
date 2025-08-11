import React from "react";

const SectionHome = () => {
    return (
        <div className="w-full bg-[#484848] flex flex-col items-center pt-[40px] pb-[60px]  md:relative md:h-[1100px] text-black">
            {/* Mobile & Desktop Heading */}

            <img
                src="/images/assets/fancho1.svg"
                alt="fancho"
                className="block md:block h-[200px] mt-[-60px] mb-2 md:mt-[100px] md:h-[320px] md:absolute md:right-0 md:z-[1] mx-auto md:mx-0"
            />
            <h2 className="text-[2rem] md:hidden font-bold uppercase text-center mb-2">
                HEAT CONTROL HOODIE
            </h2>
            <h1 className="text-[2rem] md:hidden font-bold uppercase text-center mb-4">
                FANCHO DIGITAL
            </h1>

            {/* Subtext Mobile */}
            <div className="text-center px-6 mb-6 md:hidden">
                <h3 className="text-[1rem] font-semibold uppercase mb-2">
                    Find the best offers
                </h3>
                <p className="text-sm leading-6">
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                </p>
            </div>

            {/* Main Hoodie Image */}
            <img
                src="/images/assets/blackshirt.svg"
                alt="blackshirt"
                className="w-[100%] mx-auto mb-6 md:w-auto md:h-[870px] md:absolute md:right-0 md:mb-0 md:bottom-0 md:z-[3]"
            />

            {/* Desktop Images */}

            <img
                src="/images/assets/bffhoddies.svg"
                alt="bffhoddies"
                className="hidden md:block absolute right-0 z-[2] w-[380px] mt-[100px]"
            />
            <img
                src="/images/assets/bannerwwhite.svg"
                alt="bannerwwhite"
                className="hidden md:block absolute left-0 bottom-0 w-[1490px]"
            />

            {/* Desktop Title */}
            <h1 className="hidden md:block absolute z-[4] text-[5rem] uppercase w-[1000px] leading-[1.2] mt-[330px] left-[350px] font-bold">
                Heat Control Hoodie <br /> Fancho Digital
            </h1>

            {/* Desktop Subtext */}
            <div className="hidden md:flex flex-col absolute w-[622px] mt-[550px] left-[350px] text-left">
                <h3 className="text-[2rem] mb-[10px] uppercase">
                    Find the best offers
                </h3>
                <p className="text-[1.2rem] font-medium w-[560px] leading-[1.5]">
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                </p>
            </div>

            {/* Info Cards */}
            <section className="w-[100%] flex justify-center -mt-8 px-4 md:absolute md:p-[40px] md:w-[700px] md:left-[160px] md:z-[7]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[15px] max-w-[660px] mt-[30px] md:mt-[700px]">
                    {[
                        {
                            title: "Output",
                            desc: "15 Volt Battery – Output: 4.3 amps – Total Output: 64.6 watts",
                        },
                        {
                            title: "Storage Capacity",
                            desc: "Storage capacity of the battery will be 25,600 mAh (milliampere-hour)",
                        },
                        {
                            title: "Battery Life",
                            desc: "Up to 4 Hours of battery life when on Low to Medium with the Fancho",
                        },
                        {
                            title: "Measurement",
                            desc: "Quick Refresher on Electricity Measurements.",
                        },
                    ].map((item, idx) => (
                        <div
                            className="bg-white text-[#333] rounded-lg p-5 shadow-md w-full max-w-[400px] text-center"
                            key={idx}
                        >
                            <img
                                src="/images/assets/battery.svg"
                                alt="icon"
                                className="w-[32px] h-[32px] mx-auto mb-3"
                            />
                            <h3 className="font-semibold text-[1.1rem] mb-1">
                                {item.title}
                            </h3>
                            <p className="text-[0.95rem] leading-6">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Desktop Buttons */}
            <div className="flex justify-between w-full px-10 mt-8 md:absolute md:top-[640px] md:px-20">
                <button className="w-[50px] h-[50px] -mt-240 md:mt-0 rounded-[12px] border border-[#e1e5eb] p-[16px] text-[1.5rem] font-bold flex items-center justify-center z-[6]">
                    ←
                </button>
                <button className="w-[50px] h-[50px] -mt-240 md:mt-0 rounded-[12px] border border-[#e1e5eb] p-[16px] text-[1.5rem] font-bold flex items-center justify-center z-[7]">
                    →
                </button>
            </div>
        </div>
    );
};

export default SectionHome;
