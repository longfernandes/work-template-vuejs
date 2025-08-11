import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-black text-white sticky top-0 z-50">
                {/* Top Bar */}
                <div className="max-w-[1500px] mx-auto px-4 py-7 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/images/assets/Logo.svg"
                            alt="THE FANCHO"
                            className="w-35 object-contain"
                        />
                    </div>

                    {/* Search box - Ẩn trên mobile */}
                    <div className="relative w-full max-w-2xl hidden md:block">
                        <img
                            src="/images/assets/Search.svg"
                            alt="Search Icon"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-400"
                        />
                        <input
                            type="text"
                            placeholder="Search for product"
                            className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white placeholder:text-gray-400 rounded-lg focus:outline-none"
                        />
                    </div>

                    {/* Right buttons - Ẩn trên mobile */}
                    <div className="hidden md:flex items-center gap-4 text-lg">
                        <img
                            src="/images/assets/Shopping Bag - 2.svg"
                            alt="cart"
                            className="w-5"
                        />
                        <a href="#" className="hover:underline">
                            Sign-up
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:underline">
                            Login
                        </a>
                    </div>

                    {/* Nút 3 gạch - Chỉ hiện trên mobile */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <img
                            src="/images/assets/Menu.svg"
                            alt="Menu"
                            className="w-6 h-6 cursor-pointer"
                        />
                    </button>
                </div>

                {/* Bottom Menu */}
                <div className="bg-white border-t hidden md:block">
                    <div className="max-w-[1500px] mx-auto px-4 py-3 text-black">
                        <div className="flex overflow-x-auto justify-between gap-6 md:gap-10 text-sm md:text-base lg:text-lg whitespace-nowrap">
                            <a
                                href="#"
                                className="font-bold flex justify-center items-center shrink-0"
                            >
                                ALL PRODUCTS
                            </a>
                            <span>|</span>
                            <a href="#" className=" font-bold shrink-0">
                                <img
                                    src="/images/assets/Rectangle 2034.svg"
                                    className="w-10 inline-block mr-1"
                                />
                                NFL
                            </a>
                            <span>|</span>
                            <a href="#" className="font-bold shrink-0">
                                <img
                                    src="/images/assets/Rectangle 2034 (1).svg"
                                    className="w-10 inline-block mr-1"
                                />
                                COLLEGE
                            </a>
                            <span>|</span>
                            <a href="#" className=" font-bold shrink-0">
                                <img
                                    src="/images/assets/Rectangle 2034 (2).svg"
                                    className="w-10 inline-block mr-1"
                                />
                                MLB
                            </a>
                            <span>|</span>
                            <a href="#" className="font-bold shrink-0">
                                <img
                                    src="/images/assets/Rectangle 2034 (3).svg"
                                    className="w-10 inline-block mr-1"
                                />
                                NBA
                            </a>
                            <span>|</span>
                            <a href="#" className="font-bold shrink-0">
                                <img
                                    src="/images/assets/Rectangle 2034 (4).svg"
                                    className="w-10 inline-block mr-1"
                                />
                                NHL
                            </a>
                            <span>|</span>
                            <a href="#" className="font-bold shrink-0">
                                <img
                                    src="/images/assets/Rectangle 2034 (5).svg"
                                    className="w-10 inline-block mr-1"
                                />
                                MLS
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Menu - Pop-up */}
            {isMenuOpen && (
                <div className="fixed inset-0  bg-opacity-30 z-50">
                    <div className="fixed top-0 left-0 w-72 h-full bg-white p-5 z-50 shadow-lg overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Menu</h2>
                            <button onClick={() => setIsMenuOpen(false)}>
                                <span className="text-xl font-bold cursor-pointer">×</span>
                            </button>
                        </div>

                        {/* Search mobile */}
                        <div className="relative mb-5">
                            <img
                                src="/images/assets/Search.svg"
                                alt="Search Icon"
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-400 cursor-pointer"
                            />
                            <input
                                type="text"
                                placeholder="Search for product"
                                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none"
                            />
                        </div>

                        {/* Pages */}
                        <div className="mb-5">
                            <p className="font-bold mb-2">Pages</p>
                            <ul className="space-y-2 text-lg text-gray-700">
                                <li className="cursor-pointer">
                                    <img
                                        src="/images/assets/Union.svg"
                                        className="inline w-7 mr-2"
                                    />{" "}
                                   <a href="#!">My cart</a>
                                </li>
                                <li className="cursor-pointer">
                                    <img
                                        src="/images/assets/Heart.svg"
                                        className="inline w-7 mr-2"
                                    />{" "}
                                    <a href="#!">Favourite list</a>
                                </li>
                                <li className="cursor-pointer">
                                    <img
                                        src="/images/assets/User.svg"
                                        className="inline w-7 mr-2"
                                    />{" "}
                                    <a href="#!">Login</a>
                                </li>
                                <li className="cursor-pointer">
                                    <img
                                        src="/images/assets/User - Plus.svg"
                                        className="inline w-7 mr-2"
                                    />{" "}
                                    <a href="#!">Sign-up</a>
                                </li>
                            </ul>
                        </div>

                        {/* Product Category */}
                        <div className="border-t">
                            <p className="font-bold mb-2">
                                Product Category
                            </p>
                            <div className="mb-2">
                                <p className="font-bold text-sm flex justify-between items-center">
                                    SPORT <span>-</span>
                                </p>
                                <ul className="pl-2 mt-2 text-semibold space-y-1 text-lg">
                                    <li className="cursor-pointer"><a href="#!">NFL</a></li>
                                    <li className="cursor-pointer"><a href="#!">NBA</a></li>
                                    <li className="cursor-pointer"><a href="#!">Collage/ University</a></li>
                                    <li className="cursor-pointer"><a href="#!">NHL</a></li>
                                    <li className="cursor-pointer"><a href="#!">FIFA</a></li>
                                    <li className="cursor-pointer"><a href="#!">MLB</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-sm flex justify-between items-center border-t pt-2 mt-2 cursor-pointer">
                                    FAMILY & CHILDREN <span>+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
