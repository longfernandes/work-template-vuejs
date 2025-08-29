import { useState, useEffect } from "react";
import { User, Lock, MapPin, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Pagination } from "antd";

export default function PasswordPage() {
    // Profile form
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        country: "",
        state: "",
        avatar: "",
    });

    useEffect(() => {
        const saved = localStorage.getItem("profile");
        if (saved) {
            setForm(JSON.parse(saved));
        }
    }, []);

    // 👉 Products state
    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem("products")) || []
    );

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    // Sản phẩm đang chọn
    const [selected, setSelected] = useState(null);

    // 👉 Tính toán dữ liệu hiển thị
    const currentProducts = products.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
                {/* Sidebar */}
                <aside className="col-span-3 bg-white rounded-xl shadow p-4 space-y-4">
                    <nav className="text-sm text-gray-500 mb-4">
                        <Link to="/" className="hover:underline text-blue-600">
                            Home
                        </Link>{" "}
                        /{" "}
                        <Link
                            to="/profile"
                            className="text-blue-600 hover:underline"
                        >
                            Profile
                        </Link>
                    </nav>
                    <h2 className="font-semibold text-xl mt-3">My Profile</h2>
                    <Link
                        to="/profile"
                        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
                    >
                        <User size={18} /> User Information
                    </Link>
                    <Link
                        to="/change-password"
                        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
                    >
                        <Lock size={18} /> Change Password
                    </Link>
                    <Link
                        to="/address-book"
                        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
                    >
                        <MapPin size={18} /> Address Book
                    </Link>
                    <Link
                        to="/orders"
                        className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
                    >
                        <ShoppingBag size={18} /> My Orders
                    </Link>
                </aside>

                {/* Main content */}
                <main className="col-span-9">
                    {/* Sort bar */}
                    <div className="flex justify-end mb-6">
                        <div className="flex items-center gap-2 border px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50">
                            <span className="text-sm text-gray-600">
                                Sort by:
                            </span>
                            <span className="text-sm font-medium text-black">
                                Newest
                            </span>
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    {/* Product grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProducts.map((p) => (
                            <div
                                key={p.id}
                                className={`transition cursor-pointer ${
                                    selected === p.id
                                        ? "ring-2 ring-blue-500"
                                        : ""
                                }`}
                                onClick={() => setSelected(p.id)}
                            >
                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-56 object-contain mb-3"
                                    />
                                    <h5 className="text-xs uppercase text-gray-400">
                                        Hoodie
                                    </h5>
                                    <h2 className="text-sm font-semibold">
                                        {p.name}
                                    </h2>
                                    <p className="text-gray-600 font-bold">
                                        {p.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="border-gray-300 rounded-lg p-2 mt-6 flex justify-center">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={products.length}
                            onChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}
