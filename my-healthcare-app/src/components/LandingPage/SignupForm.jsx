import { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc"; // Google Icon

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("Patient");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
        confirmPassword,
        userType,
      });

      alert("Signup successful! Please log in.");
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  const handleGoogleSignup = () => {
    alert("Google signup coming soon!");
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-xl border border-gray-100 transform transition duration-300">
      {/* Full Name & User Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-500 rounded-lg shadow-md focus:ring-1 focus:ring-black focus:outline-none transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-800">User Type</label>
          <select
            className="w-full p-2 border border-gray-500 rounded-lg shadow-md focus:ring-1 focus:ring-black focus:outline-none transition-all"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="Doctor">Doctor</option>
            <option value="Patient">Patient</option>
          </select>
        </div>
      </div>

      {/* Email */}
      <div className="mt-4">
        <label className="block text-sm text-gray-800">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-500 rounded-lg shadow-md focus:ring-1 focus:ring-black focus:outline-none transition-all"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password & Confirm Password */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm text-gray-800">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-500 rounded-lg shadow-md focus:ring-1 focus:ring-black focus:outline-none transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-800">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-500 rounded-lg shadow-md focus:ring-1 focus:ring-black focus:outline-none transition-all"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      {/* Sign Up Button */}
      <button
        onClick={handleSignup}
        className="w-full bg-blue-500 text-white py-2 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all mt-5"
      >
        Sign Up
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

export default SignupForm;
