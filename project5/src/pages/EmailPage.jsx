import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EmailPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleContinue = () => {
        if (!email) {
            toast.error("Please enter your email!");
            return;
        }
        if (!isValidEmail(email)) {
            toast.error("Invalid email format!");
            return;
        }

        localStorage.setItem("signupEmail", email);
        navigate("/verify");
    };

    return (
        <div className="bg-[url('/images/assets/homebanner.svg')] bg-cover bg-center bg-no-repeat  flex items-center justify-center md:justify-end md:pr-85 ">
            <div className="bg-white text-black rounded-xl p-6 sm:p-8 w-[90%] sm:w-[400px] flex flex-col gap-3 items-center mt-20 md:mt-30 mb-20">
                <h2 className="text-center mb-2 text-xl font-semibold">
                    Create new account
                </h2>

                <div className="flex flex-col mb-4">
                    <label className="text-[13px] mb-1 font-bold">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[290px] h-12 px-4 border border-gray-300 rounded-lg text-sm"
                    />
                </div>

                <button
                    onClick={handleContinue}
                    className="w-[290px] h-[50px] border border-gray-300 rounded-lg text-sm font-semibold cursor-pointer bg-black hover:bg-blue-500 text-white"
                >
                    Continue
                </button>

                <p className="flex justify-center items-center text-base font-medium text-center w-full">
                    <span className="flex-1 border-b border-gray-300 mr-2"></span>
                    or sign-up with
                    <span className="flex-1 border-b border-gray-300 ml-2"></span>
                </p>

                <div className="flex justify-center gap-2 w-[290px]">
                    <button className="w-[65px] h-[30px] flex justify-center items-center border cursor-pointer rounded">
                        <img
                            src="/images/assets/fake.svg"
                            alt="facebook"
                            className="w-4 "
                        />
                    </button>
                    <button className="w-[65px] h-[30px] flex justify-center items-center border cursor-pointer rounded">
                        <img
                            src="/images/assets/btnapple.svg"
                            alt="apple"
                            className="w-4"
                        />
                    </button>
                    <button className="w-[65px] h-[30px] flex justify-center items-center cursor-pointer border rounded">
                        <img
                            src="/images/assets/simple-icons_x.svg"
                            alt="twitter"
                            className="w-4"
                        />
                    </button>
                    <button className="w-[65px] h-[30px] flex justify-center items-center cursor-pointer border rounded">
                        <img
                            src="/images/assets/gg.svg"
                            alt="google"
                            className="w-4"
                        />
                    </button>
                </div>
                <p className="flex justify-center text-sm">
                    Already have an account ?
                </p>
                <button
                    onClick={() => navigate("/signin")}
                    className="w-[290px] h-[50px] border border-gray-300 rounded-lg text-sm font-medium cursor-pointer"
                >
                    Login now
                </button>
            </div>
        </div>
    );
}
