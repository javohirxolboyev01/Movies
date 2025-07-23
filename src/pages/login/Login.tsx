import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "@/components/redux/feature/usersSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(" Login muvaffaqiyatsiz! Harakatni qayta urinib ko‘ring.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login to{" "}
          <span
            onClick={() => nav("/")}
            className="text-red-500 cursor-pointer select-none"
          >
            Movies
          </span>
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <p className="text-red-500 bg-red-100 dark:bg-red-900 p-2 rounded text-sm text-center">
              {error}
            </p>
          )}

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-black dark:border-white text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-black dark:border-white text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white dark:bg-gray-900 px-2 text-gray-500">
              or continue with
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credential = credentialResponse.credential;
              if (credential) {
                const userInfo: any = jwtDecode(credential);
                console.log("Google user:", userInfo);
                dispatch(setUser(userInfo));
              }
            }}
            onError={() => {
              console.log("Google login failed");
            }}
            theme="filled_black"
            size="large"
            shape="pill"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);
