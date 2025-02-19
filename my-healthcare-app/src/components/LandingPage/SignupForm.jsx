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
    // Add your Google authentication logic here
    alert("Google signup coming soon!");
  };

  return (
    <div>
      {/* Full Name */}
      <div>
        <label className="block text-sm text-gray-700">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* User Type */}
      <div>
        <label className="block text-sm text-gray-700">User Type</label>
        <select
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="Doctor">Doctor</option>
          <option value="Patient">Patient</option>
        </select>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm text-gray-700">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {/* Sign Up Button */}
      <button
        onClick={handleSignup}
        className="w-full bg-blue-500 text-white py-2 rounded-md font-medium text-sm hover:bg-blue-600 transition mt-4"
      >
        Sign Up
      </button>

      {/* OR Divider */}
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-2 text-sm text-gray-600">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Continue with Google */}
      <button
        onClick={handleGoogleSignup}
        className="w-full flex items-center justify-center gap-3 border border-gray-400 text-gray-700 py-2 rounded-md hover:bg-gray-100 transition"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SignupForm;
