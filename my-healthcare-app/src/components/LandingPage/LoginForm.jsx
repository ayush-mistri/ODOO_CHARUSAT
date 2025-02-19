import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc"; // Google Icon

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      const userTypeFromResponse = response.data.userType;

      navigate(userTypeFromResponse === "Doctor" ? "/doctor-dashboard" : "/patient-dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    alert("Google signup coming soon!");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <label className="block text-sm text-gray-800">Email</label>
      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded-lg mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="block text-sm text-gray-800">Password</label>
      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border rounded-lg mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Error Message */}
      {error && <p className="text-red-500 mb-3">{error}</p>}

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className={`w-full bg-blue-500 text-white py-2 rounded-lg font-medium ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* OR Divider */}
      <div className="flex items-center my-5">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-2 text-sm text-gray-600">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Continue with Google */}
      <button
        onClick={handleGoogleSignup}
        className="w-full flex items-center justify-center gap-3 border border-gray-400 text-gray-700 py-3 rounded-xl shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all"
      >
        <FcGoogle className="text-2xl" />
        Continue with Google
      </button>

    </div>
  );
};

export default Login;
