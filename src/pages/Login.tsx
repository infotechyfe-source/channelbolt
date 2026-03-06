import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../lib/auth";
import { Eye, EyeOff } from "lucide-react";
import {account } from "../lib/appwrite";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { refreshUser } = useAuth();
  const navigate = useNavigate();


 const handleLogin = async () => {
  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    setLoading(true);

    // login
    await loginUser(email, password);

    // update context user
    await refreshUser();

    // get logged user
    const user = await account.get();
    console.log("Logged in user:", user);

    // redirect based on role
    if (user.prefs?.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }

  } catch (err) {
    console.error(err);
    alert("Invalid email or password");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-8 text-sm">
          Login to your account to continue
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition ${loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Links */}
        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <button className="hover:text-blue-600">
            Forgot Password?
          </button>

          <button
            onClick={() => navigate("/register")}
            className="hover:text-blue-600"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}