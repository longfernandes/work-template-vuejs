import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function SignupPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        country: "",
        state: "",
        gender: "",
        dob: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });

    const [passwordRules, setPasswordRules] = useState({
        length: false,
        upperLower: false,
        number: false,
        specialChar: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });

        if (name === "password") validatePassword(value);
    };

    const validatePassword = (password) => {
        setPasswordRules({
            length: password.length >= 8 && password.length <= 20,
            upperLower: /[a-z]/.test(password) && /[A-Z]/.test(password),
            number: /\d/.test(password),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!Object.values(passwordRules).every(Boolean)) {
            alert("Password does not meet requirements!");
            return;
        }
        if (!form.agree) {
            alert("You must agree to Terms and Policy!");
            return;
        }

        const email = localStorage.getItem("signupEmail");
        if (!email) {
            alert("No email found. Please start again!");
            return;
        }

        const newUser = { ...form, email };
        localStorage.setItem("users", JSON.stringify(newUser));

        alert("Signup successful ✅");
        navigate("/signin");
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-50 gap-10 px-4 sm:px-6 lg:px-7">
            <div className="flex-1 max-w-[473px] mb-8 lg:mb-0 text-center lg:text-left">
                <h2 className="text-2xl sm:text-5xl font-bold mb-5">
                    Next-Level Performance
                </h2>
                <p className="text-gray-800 font-semibold mb-6 text-3xl w-105 sm:text-base">
                    Game time! Fill in your details and unlock your Fancho's
                    full potential.
                </p>
                <img
                    src="/images/Placeholder.svg"
                    alt="signup"
                    className="w-3/4 sm:w-2/3 lg:w-full mx-auto lg:mx-0"
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className="flex-1 bg-white shadow-md rounded-xl p-4 sm:p-6 lg:p-8 w-full max-w-lg"
            >
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full sm:w-1/2 border p-3 rounded-lg text-sm"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full sm:w-1/2 border p-3 rounded-lg text-sm"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg text-sm"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full sm:w-1/2 border p-3 rounded-lg text-sm"
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={form.state}
                        onChange={handleChange}
                        className="w-full sm:w-1/2 border p-3 rounded-lg text-sm"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <select
                        name="gender"
                        value={form.gender}
                        onChange={handleChange}
                        className="w-full sm:w-1/2 border p-3 rounded-lg text-sm"
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input
                        type="date"
                        name="dob"
                        value={form.dob}
                        onChange={handleChange}
                        className="w-full sm:w-1/2 border p-3 rounded-lg text-sm"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg text-sm"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg text-sm"
                    />
                </div>

                <ul className="text-xs sm:text-sm mb-4 space-y-1">
                    <li
                        className={
                            passwordRules.length
                                ? "text-green-600"
                                : "text-gray-500"
                        }
                    >
                        • 8–20 characters
                    </li>
                    <li
                        className={
                            passwordRules.upperLower
                                ? "text-green-600"
                                : "text-gray-500"
                        }
                    >
                        • Uppercase & lowercase letters
                    </li>
                    <li
                        className={
                            passwordRules.number
                                ? "text-green-600"
                                : "text-gray-500"
                        }
                    >
                        • At least 1 number
                    </li>
                    <li
                        className={
                            passwordRules.specialChar
                                ? "text-green-600"
                                : "text-gray-500"
                        }
                    >
                        • At least 1 special character
                    </li>
                </ul>

                <div className="flex items-start gap-2 mb-6 text-sm">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                        className="mt-1"
                    />
                    <span>
                        I agree with Fancho’s{" "}
                        <a href="#" className="text-blue-500">
                            Term of Use
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-orange-500">
                            Privacy Policy
                        </a>
                        .
                    </span>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
