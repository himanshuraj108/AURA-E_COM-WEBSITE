import React, { useState } from "react";
import loginimage from "../assets/loginimage.png";
import { Link, useNavigate } from "react-router-dom";
import ForgotPassword from "../components/ForgotPassword";

const Login = () => {
  const [state, setState] = useState("Sign In");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex gap-20 border p-10 bg-gray-100 rounded-md">
        {/* Image */}

        <img
          src={loginimage}
          alt="Login Page Image"
          className="hidden md:block w-72 lg:w-96"
        />

        {/* Login Area */}
        <div className="flex flex-col gap-5">
          <h1 className="text-center text-4xl">AURA</h1>
          <p className="text-center text-3xl font-light">Welcome Back</p>
          <form className="flex flex-col gap-4">
            {state === "Sign Up" && (
              <div className="flex flex-col gap-0.5">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="enter username"
                  id="username"
                  required
                  className="border p-2 pr-30 rounded-md"
                />
              </div>
            )}

            <div className="flex flex-col gap-0.5">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="enter email address"
                required
                id="email"
                className="border p-2 pr-30 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="enter password"
                id="password"
                required
                className="border p-2 pr-30 rounded-md"
              />
            </div>
            <button className="bg-black px-2 py-2 text-white cursor-pointer rounded-md">
              {state === "Sign In" ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p
            className="text-center cursor-pointer hover:underline"
            onClick={() => setShowForgotPassword(true)}
          >
            {state === "Sign In" ? "Forgot Password?" : ""}
          </p>
          {state === "Sign In" ? (
            <p className="text-center">
              Doesn't have an account?
              <span
                className="cursor-pointer hover:underline"
                onClick={() => setState("Sign Up")}
              >
                {" "}
                click here
              </span>
            </p>
          ) : (
            <p className="text-center">
              Already have an account?{" "}
              <span
                className="cursor-pointer hover:underline"
                onClick={() => setState("Sign In")}
              >
                click here
              </span>
            </p>
          )}
        </div>
      </div>
      {showForgotPassword && <ForgotPassword onClose={() => setShowForgotPassword(false)} />}
    </div>
  );
};

export default Login;
