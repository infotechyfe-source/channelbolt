import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../lib/auth";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);
            // 1️⃣ Create user
            await registerUser(email, password);

            // 2️⃣ Automatically log them in
            await loginUser(email, password);

            navigate("/sell");
        } catch (err: any) {
            alert(err.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Create Account
                </h2>
                <p className="text-center text-gray-500 mb-8 text-sm">
                    Register to start selling and managing accounts
                </p>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password Input */}
                <div className="mb-6 relative">
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                        Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                {/* Register Button */}
                <button
                    onClick={handleRegister}
                    disabled={loading}
                    className={`w-full bg-blue-600 text-white p-3 rounded-lg font-semibold cursor-pointer shadow hover:bg-blue-700 transition ${loading ? "opacity-60 cursor-not-allowed" : ""
                        }`}
                >
                    {loading ? "Registering..." : "Register"}
                </button>

                {/* Login Link */}
                <div className="flex justify-center mt-4 text-sm text-gray-500">
                    Already have an account?{" "}
                    <button
                        onClick={() => navigate("/login")}
                        className="ml-1 text-blue-600 font-semibold hover:underline transition cursor-pointer"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}