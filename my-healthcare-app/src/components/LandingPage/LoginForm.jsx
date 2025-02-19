import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      localStorage.setItem("token", response.data.token);
      const userTypeFromResponse = response.data.userType;
      alert("Login successful!");

      navigate(userTypeFromResponse === "Doctor" ? "/doctor-dashboard" : "/patient-dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <div className="col-span-2">
        <label className="block text-sm text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="col-span-2">
        <label className="block text-sm text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-2 rounded-md font-medium text-sm hover:bg-blue-600 transition mt-4"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
