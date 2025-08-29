import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // đường dẫn tuỳ project

const teams = [
    { id: 1, name: "Arizona Cardinals", logo: "/images/NFL/NFL1.svg" },
    { id: 5, name: "Chicago Bears", logo: "/images/NFL/NFL5.svg" },
    { id: 9, name: "San Francisco 49ers", logo: "/images/NFL/NFL9.svg" },
    { id: 2, name: "Atlanta Falcons", logo: "/images/NFL/NFL2.svg" },
    { id: 6, name: "Cincinnati Bengals", logo: "/images/NFL/NFL6.svg" },
    { id: 10, name: "Los Angeles Chargers", logo: "/images/NFL/NFL10.svg" },
    { id: 3, name: "Baltimore Ravens", logo: "/images/NFL/NFL3.svg" },
    { id: 7, name: "Las Vegas Raiders", logo: "/images/NFL/NFL7.svg" },
    { id: 11, name: "Los Angeles Rams", logo: "/images/NFL/NFL11.svg" },
    { id: 4, name: "Buffalo Bills", logo: "/images/NFL/NFL4.svg" },
    { id: 8, name: "Carolina Panthers", logo: "/images/NFL/NFL8.svg" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [nfldropdownOpen, setNfldropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { users, isLoggedIn, logout } = useContext(AuthContext);
    const [selected, setSelected] = useState(null);

    const handleLogout = () => {
        logout();
        navigate("/signin");
    };

    return (
        <>
            <div className="bg-black text-white sticky top-0 z-50">
                {/* Top Bar */}
                <div className="max-w-[1500px] mx-auto px-4 py-7 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/images/assets/Logo.svg"
                            alt="THE FANCHO"
                            className="w-35 object-contain"
                        />
                    </Link>

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
                    <div className="hidden md:flex items-center gap-6 text-lg relative">
                        <img
                            src="/images/assets/Shopping Bag - 2.svg"
                            alt="cart"
                            className="w-5 cursor-pointer"
                        />

                        {!users ? (
                            <>
                                <Link to="/email" className="hover:underline">
                                    Sign-up
                                </Link>
                                <span>|</span>
                                <Link to="/signin" className="hover:underline">
                                    Login
                                </Link>
                            </>
                        ) : (
                            <div className="relative">
                                <img
                                    src="/images/assets/User.svg"
                                    alt="User"
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={() =>
                                        setDropdownOpen(!dropdownOpen)
                                    }
                                />

                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg py-2">
                                        <Link
                                            to="/profile"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            My profile
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
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
                            <Link
                                to="/list"
                                href="#"
                                className="font-bold flex justify-center items-center shrink-0"
                            >
                                ALL PRODUCTS
                            </Link>
                            <span>|</span>
                            <a href="#" className=" font-bold shrink-0">
                                <img
                                    src="/images/assets/Rectangle 2034.svg"
                                    className="w-10 inline-block mr-1"
                                    onClick={() =>
                                        setNfldropdownOpen(!nfldropdownOpen)
                                    }
                                />
                                NFL
                                {nfldropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-full bg-white text-black shadow-lg rounded-lg cursor-pointer">
                                        <div className="max-w-[1500px] mx-auto">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 cursor-pointer">
                                                {teams.map((team) => (
                                                    <Link
                                                        key={team.id}
                                                        to={`/teams/${team.id}`} // <-- đường dẫn riêng của team
                                                        onClick={() =>
                                                            setSelected(team.id)
                                                        }
                                                        className={`flex items-center py-3 rounded-lg border transition hover:bg-orange-300 cursor-pointer
                                                            ${
                                                                selected ===
                                                                team.id
                                                                    ? "border-orange-400 bg-orange-50"
                                                                    : "border-transparent hover:border-gray-300"
                                                            }`}
                                                    >
                                                        <img
                                                            src={team.logo}
                                                            alt={team.name}
                                                            className="w-8 h-8 gap-5 object-contain"
                                                        />
                                                        <span className="text-gray-800 text-sm font-medium">
                                                            {team.name}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
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
                                <span className="text-xl font-bold cursor-pointer">
                                    ×
                                </span>
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

                        <div className="mb-5">
                            <p className="font-bold mb-2">Pages</p>
                            <ul className="space-y-2 text-lg text-gray-700">
                                <li className="cursor-pointer">
                                    <img
                                        src="/images/assets/Union.svg"
                                        className="inline w-7 mr-2"
                                    />{" "}
                                    <Link href="#!">My cart</Link>
                                </li>
                                <li className="cursor-pointer">
                                    <img
                                        src="/images/assets/Heart.svg"
                                        className="inline w-7 mr-2"
                                    />{" "}
                                    <a href="#!">Favourite list</a>
                                </li>

                                {!users ? (
                                    <>
                                        <li className="cursor-pointer">
                                            <img
                                                src="/images/assets/User.svg"
                                                className="inline w-7 mr-2"
                                            />{" "}
                                            <Link
                                                to="/signin"
                                                className="hover:underline"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <img
                                                src="/images/assets/User - Plus.svg"
                                                className="inline w-7 mr-2"
                                            />{" "}
                                            <Link
                                                to="/email"
                                                className="hover:underline"
                                            >
                                                Sign-up
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="cursor-pointer">
                                            <img
                                                src="/images/assets/User.svg"
                                                className="inline w-7 mr-2"
                                            />{" "}
                                            <Link
                                                to="/profile"
                                                className="hover:underline"
                                            >
                                                My profile
                                            </Link>
                                        </li>
                                        <li
                                            className="cursor-pointer "
                                            onClick={handleLogout}
                                        >
                                            <img
                                                src="/images/assets/logout.png"
                                                className="inline w-7 mr-2"
                                            />{" "}
                                            Logout
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>

                        {/* Product Category */}
                        <div className="border-t">
                            <p className="font-bold mb-2">Product Category</p>
                            <div className="mb-2">
                                <p className="font-bold text-sm flex justify-between cursor-pointer items-center">
                                    SPORT <span>-</span>
                                </p>
                                <ul className="pl-2 mt-2 text-semibold space-y-1 text-lg">
                                    <li className="cursor-pointer">
                                        <a href="#!">NFL</a>
                                    </li>
                                    <li className="cursor-pointer">
                                        <a href="#!">NBA</a>
                                    </li>
                                    <li className="cursor-pointer">
                                        <a href="#!">Collage/ University</a>
                                    </li>
                                    <li className="cursor-pointer">
                                        <a href="#!">NHL</a>
                                    </li>
                                    <li className="cursor-pointer">
                                        <a href="#!">FIFA</a>
                                    </li>
                                    <li className="cursor-pointer">
                                        <a href="#!">MLB</a>
                                    </li>
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
