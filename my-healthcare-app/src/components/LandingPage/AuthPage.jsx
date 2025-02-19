import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialForm = params.get("type") === "signup" ? false : true; // Default is login

  const [isLogin, setIsLogin] = useState(initialForm);

  useEffect(() => {
    setIsLogin(params.get("type") !== "signup");
  }, [location.search]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-l from-blue-100 to-blue-500">
      <div className="flex w-100 max-w-lg shadow-lg rounded-lg bg-white p-6">
        <div className="w-full">
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {isLogin ? <LoginForm /> : <SignupForm />}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-blue-500 mt-3 text-center text-sm block hover:underline"
          >
            {isLogin ? "Create an account" : "Already have an account?"}
          </button>
        </div>
      </div>

      <div className="hidden md:flex relative left-40 bottom-5 p-6">
        <img src="login_image.png" alt="Auth Illustration" className="w-170" />
      </div>
    </div>
  );
};

export default AuthPage;
