import React, { useState } from "react";
import loginimage from "../assets/loginimage.png";
import ForgotPassword from "../components/ForgotPassword";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Sign In");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <Link
          to={"/"}
          className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8

          flex items-center gap-1 bg-black text-white px-3 py-2 
          sm:px-4 sm:py-2.5

          rounded-md text-sm sm:text-base hover:scale-105 hover:text-lg transition-all duration-300
        "
        >
          <IoMdArrowBack className="text-lg sm:text-xl" />
          <p className="hidden sm:inline">Back</p>
        </Link>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
        {showForgotPassword && (
          <ForgotPassword onClose={() => setShowForgotPassword(false)} />
        )}
      </div>
    </>
  );
};

export default Login;
