import React from "react";

const products = [
    {
        image: "/images/assets/newponcho1.svg",
        title: "Michigan Wolverines Fanatics Branded College Football Playoff 2023 National Champions Logo Pullover Hoodie - Red",
        price: "$ 50.14",
    },
    {
        image: "/images/assets/newponcho2.svg",
        title: "Kansas City Chiefs Nike Super Bowl LVIII Champions Statement Therma Performance Pullover Hoodie",
        price: "$ 89.14",
    },
    {
        image: "/images/assets/newponcho3.svg",
        title: "Cincinnati Reds Nike City Connect Practice Performance Pullover Hoodie - Black",
        price: "$ 74.99",
    },
    {
        image: "/images/assets/newponcho4.svg",
        title: "Kansas City Chiefs WEAR by Erin Andrews Women's Super Bowl LVIII Champions Fleece Hoodie - Black",
        price: "$ 89.99",
    },
];

const FooterHome = () => {
    return (
        <div className="w-full max-w-[1500px] mx-auto px-4 py-8 relative">
            <div className="hidden md:flex justify-between w-full ">
                <button className="absolute w-14 h-14 top-[250px] left-0 text-xl font-bold border border-gray-300 bg-white rounded-xl">
                    ←
                </button>
                <button className="absolute w-14 h-14 top-[250px] right-0 text-xl font-bold border border-gray-300 bg-white rounded-xl">
                    →
                </button>
            </div>
            <div className="max-w-[1200px] mx-auto text-center md:text-left">
                <h1 className="text-2xl font-bold mb-2">Popular Poncho</h1>
                <p className="text-base text-gray-600 mb-6">
                    Let’s check our most popular poncho
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md text-left"
                        >
                            <img
                                src={product.image}
                                alt={`hoodie ${index + 1}`}
                                className="w-full h-auto object-contain mb-3"
                            />
                            <p className="text-xs uppercase text-gray-500 mb-1">
                                Hoodie
                            </p>
                            <h3 className="text-sm font-medium text-gray-800 mb-2">
                                {product.title}
                            </h3>
                            <p className="text-base font-bold text-black">
                                {product.price}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Navigation Buttons hidden on mobile */}

                {/* Dots for mobile */}
                <div className="md:hidden flex justify-center gap-2 mt-6">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default FooterHome;
