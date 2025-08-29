import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function EmailPage() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef([]);
    const navigate = useNavigate();

    const handleChange = (value, index) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 3) {
                inputs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (otp.join("") === "1234") {
            toast.success("Successfully verified!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(() => navigate("/signup"), 1500);
        } else {
            toast.error("Invalid code, please try again!", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="bg-[url('/images/assets/homebanner.svg')] bg-cover bg-center bg-no-repeat flex items-center justify-center md:justify-end md:pr-85">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-[380px] mt-30 mb-30">
                <button onClick={() => navigate("/email")} className="text-4xl mb-4 cursor-pointer">
                    ←
                </button>{" "}
                <h2 className="text-2xl font-semibold mb-2">Verify email</h2>
                <p className="text-gray-600 text-sm mb-6">
                    We have sent a 4 digit code to your email. Please check your
                    email and enter the code in the field below.
                </p>
                <div className="flex justify-between mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputs.current[index] = el)}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) =>
                                handleChange(e.target.value, index)
                            }
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-14 h-14 text-center text-xl border-2 rounded-lg focus:outline-none focus:border-orange-400"
                        />
                    ))}
                </div>
                <div className="flex justify-between text-sm mb-6">
                    <span className="text-gray-500">
                        Haven't received the code?
                    </span>
                    <button className="text-black font-medium">Resend</button>
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800"
                >
                    Submit
                </button>
            </div>

            <ToastContainer />
        </div>
    );
}
