import { useState, useEffect } from "react";
import { User, Lock, MapPin, ShoppingBag, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm((prev) => ({ ...prev, avatar: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        localStorage.setItem("profile", JSON.stringify(form));
        alert("Profile saved!");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
                <aside className="col-span-3 bg-white rounded-xl shadow p-4 space-y-4">
                    <nav className="text-sm text-gray-500 mb-4">
                        <Link to="/" className="hover:underline text-blue-600">
                            Home 
                        </Link>
                        /
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
                <section className="col-span-9 bg-white rounded-xl shadow p-8">
                    <h2 className="text-xl font-semibold mb-1">
                        User Information
                    </h2>
                    <p className="text-sm mb-6">
                        Your information will be stored here
                    </p>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            {form.avatar ? (
                                <img
                                    src={form.avatar}
                                    alt="avatar"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <User size={28} className="text-gray-500" />
                            )}
                        </div>
                        <div>
                            <label className="px-4 py-2 border rounded-lg hover:bg-gray-100 cursor-pointer">
                                Upload photo
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleUpload}
                                    className="hidden"
                                />
                            </label>
                            <p className="text-sm text-gray-500 mt-3">
                                Supported formats: PNG, JPG. Max size: 5MB
                            </p>
                        </div>
                    </div>

                    <form className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm mb-1">
                                First name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                disabled
                                value={form.email}
                                className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">
                                Phone number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Gender</label>
                            <select
                                name="gender"
                                value={form.gender}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2"
                            >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm mb-1">
                                Date of birth
                            </label>
                            <input
                                type="date"
                                name="dob"
                                value={form.dob}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">
                                Country
                            </label>
                            <input
                                type="text"
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">State</label>
                            <input
                                type="text"
                                name="state"
                                value={form.state}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>
                    </form>

                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={handleSave}
                            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                        >
                            <Check size={18} /> Save changes
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
