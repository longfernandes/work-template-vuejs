import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Pagination } from "antd";
import products from "../data/products";

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
const colors = ["black", "blue", "red", "green", "orange", "gray"];

export default function ProductListPage() {
    const [selected, setSelected] = useState(null);
    const [price, setPrice] = useState([50, 360]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [openSections, setOpenSections] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 9;

    const toggleSection = (section) => {
        setOpenSections((prev) =>
            prev.includes(section)
                ? prev.filter((s) => s !== section)
                : [...prev, section]
        );
    };

    const toggleSize = (size) => {
        setSelectedSizes((prev) =>
            prev.includes(size)
                ? prev.filter((s) => s !== size)
                : [...prev, size]
        );
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentProducts = products.slice(startIndex, endIndex);

    return (
        <div className="max-w-[1500px] mx-auto p-4">
            <nav className="text-sm text-gray-500 mb-2">
                <a href="/" className="hover:underline text-blue-600">
                    Home
                </a>{" "}
                / <span className="text-black">Category name</span>
            </nav>

            <h1 className="text-2xl font-bold mb-6">Category name</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <aside className="col-span-1 h-fit">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Filter</h2>
                        <div className="flex justify-center gap-2">
                            <button className="text-sm text-gray-500 font-semibold">
                                Clear filter
                            </button>
                            <X className="w-5 h-5 cursor-pointer text-gray-500" />
                        </div>
                    </div>

                    <div className="border-t py-3">
                        <button
                            onClick={() => toggleSection("productLine")}
                            className="flex justify-between w-full font-medium"
                        >
                            Product Line{" "}
                            <ChevronDown className="w-4 h-4 cursor-pointer" />
                        </button>
                        {openSections.includes("productLine") && (
                            <div className="mt-2 space-y-2">
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" /> Fancho
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" /> Hoodie
                                </label>
                            </div>
                        )}
                    </div>

                    <div className="border-t py-3">
                        <button
                            onClick={() => toggleSection("gender")}
                            className="flex justify-between w-full font-medium"
                        >
                            Gender and Age{" "}
                            <ChevronDown className="w-4 h-4 cursor-pointer" />
                        </button>
                        {openSections.includes("gender") && (
                            <div className="mt-2 space-y-2">
                                <p className="font-semibold">Adults</p>
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" /> Women
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" /> Men
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" /> Kids
                                </label>
                            </div>
                        )}
                    </div>

                    <div className="border-t py-3">
                        <button
                            onClick={() => toggleSection("price")}
                            className="flex justify-between w-full font-medium"
                        >
                            Price{" "}
                            <ChevronDown className="w-4 h-4 cursor-pointer" />
                        </button>
                        {openSections.includes("price") && (
                            <div className="mt-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="500"
                                    value={price[1]}
                                    onChange={(e) =>
                                        setPrice([price[0], e.target.value])
                                    }
                                    className="w-full"
                                />
                                <p className="text-sm mt-2">
                                    ${price[0]} - ${price[1]}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="border-t py-3">
                        <button
                            onClick={() => toggleSection("size")}
                            className="flex justify-between w-full font-medium"
                        >
                            Size{" "}
                            <ChevronDown className="w-4 h-4 cursor-pointer" />
                        </button>
                        {openSections.includes("size") && (
                            <div className="mt-3 grid grid-cols-3 gap-2">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => toggleSize(size)}
                                        className={`border px-2 py-1 rounded text-sm ${
                                            selectedSizes.includes(size)
                                                ? "bg-orange-400 text-white border-orange-500"
                                                : "hover:bg-gray-100"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="border-t py-3">
                        <button
                            onClick={() => toggleSection("color")}
                            className="flex justify-between w-full font-medium"
                        >
                            Color{" "}
                            <ChevronDown className="w-4 h-4 cursor-pointer" />
                        </button>
                        {openSections.includes("color") && (
                            <div className="mt-2 space-y-2">
                                {colors.map((c) => (
                                    <label
                                        key={c}
                                        className="flex items-center gap-2 text-sm"
                                    >
                                        <input type="checkbox" /> {c}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </aside>

                <main className="col-span-3">
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-xl font-semibold mb-4">
                            Product list
                        </h2>
                        <div className="flex justify-between items-center gap-3 border p-2 rounded-xl">
                            <div>
                                <h3 className="font-semibold text-sm">
                                    Sort by
                                </h3>
                                <h3 className="text-sm">Select an option</h3>
                            </div>
                            <ChevronDown className="w-4 h-4 text-xl cursor-pointer" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProducts.map((p) => (
                            <div
                                key={p.id}
                                className=" transition cursor-pointer"
                                onClick={() => setSelected(p.id)}
                            >
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-full h-90 px-8 border border-gray-300/70  object-contain mb-3"
                                />
                                <h5 className="text-xs uppercase">Hoodie</h5>
                                <h2 className="text-sm font-semibold">
                                    {p.name}
                                </h2>
                                <p className="text-gray-600 font-bold">
                                    {p.price}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="items-center flex justify-center mt-10">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={products.length}
                            onChange={(page) => setCurrentPage(page)}
                            className="border-gray-300 rounded-lg p-2"
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}
