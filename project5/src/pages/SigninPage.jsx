import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function SigninPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem("users"));
        if (!storedUser) {
            alert("No user found. Please sign up first!");
            return;
        }

        if (storedUser.email === email && storedUser.password === password) {
              login(storedUser); // 👉
            alert("Login successful ✅");
            navigate("/");
        } else {
            alert("Invalid email or password ❌");
        }
    };

    return (
        <div className="bg-[url('/images/assets/homebanner.svg')] bg-cover bg-center bg-no-repeat  flex items-center justify-center md:justify-end md:pr-85 ">
            <div className="bg-white text-black rounded-xl p-6 sm:p-8 w-[90%] sm:w-[400px] flex flex-col gap-3 items-center mt-20 md:mt-30 mb-20">
                <h2 className="text-center mb-2 text-xl font-semibold">
                    Login
                </h2>

                {/* Email */}
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

                {/* Password */}
                <div className="flex flex-col mb-4">
                    <label className="text-[13px] mb-1 font-bold">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-[290px] h-12 px-4 pr-10 border border-gray-300 rounded-lg text-sm"
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            👁
                        </button>
                    </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2 cursor-pointer w-[290px]">
                    <input
                        type="checkbox"
                        id="remember"
                        className="cursor-pointer"
                    />
                    <label
                        htmlFor="remember"
                        className="cursor-pointer text-sm"
                    >
                        Keep me logged in
                    </label>
                </div>

                {/* Login button */}
                <button
                    onClick={handleLogin}
                    className="w-[290px] h-[50px] border border-gray-300 rounded-lg text-sm font-semibold cursor-pointer bg-black hover:bg-blue-500 text-white"
                >
                    Login now
                </button>

                {/* Forgot password */}
                <a href="#" className="flex justify-center text-sm">
                    Forgot your password?
                </a>

                {/* OR */}
                <p className="flex justify-center items-center text-base font-medium text-center w-full">
                    <span className="flex-1 border-b border-gray-300 mr-2"></span>
                    or login with
                    <span className="flex-1 border-b border-gray-300 ml-2"></span>
                </p>

                {/* Social login */}
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

                {/* Signup */}
                <p className="flex justify-center text-sm">
                    You don't have an account?
                </p>
                <button
                    onClick={() => navigate("/email")}
                    className="w-[290px] h-[50px] border border-gray-300 rounded-lg text-sm font-medium cursor-pointer"
                >
                    Create new account
                </button>
            </div>
        </div>
    );
}
