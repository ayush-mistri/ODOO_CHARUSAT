import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const isLogin = params.get("type") !== "signup"; // Default is login

  const toggleAuthType = () => {
    const newType = isLogin ? "signup" : "login";
    navigate(`?type=${newType}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-400">
      {isLogin ? (
        // Login Layout (Left Side Text + Form)
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
          {/* Left Side - Text */}
          <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-blue-500 text-white p-6">
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <p className="text-l text-center">Log in to access your account and manage your data easily.</p>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h2>
            <LoginForm />
            <button
              onClick={toggleAuthType}
              className="w-full mt-4 text-blue-500 text-center text-sm hover:underline"
            >
              Create an account
            </button>
          </div>
        </div>
      ) : (
        // Signup Layout (Image on Side + Form)
        
        <div className="relative top-5 flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
          {/* Left Side - Image */}
          <div className="hidden md:block w-1/2 bg-blue-500 p-6">
            <img src="Login.png" alt="Signup Illustration" className="relative top-14 h-[500px]" />
          </div>

          {/* Right Side - Signup Form */}
          <div className="w-full p-8">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Create an Account</h2>
            <SignupForm />
            <button
              onClick={toggleAuthType}
              className="w-full mt-4 text-blue-500 text-center text-sm hover:underline"
            >
              Already have an account?
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
