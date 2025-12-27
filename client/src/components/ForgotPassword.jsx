import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({ onClose }) => {
  const backend = import.meta.env.VITE_BACKEND_URI;

  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (step == 1) {
        const { data } = await axios.post(
          backend + "/api/user/forgot-password",
          { email }
        );

        if (data.success) {
          toast.success(data.message);
          setStep(2);
          setLoading(false);
        } else {
          toast.error(data.message);
        }
      }
      if (step == 2) {
        const { data } = await axios.post(backend + "/api/user/verify-otp", {
          email,
          otp,
        });

        if (data.success) {
          toast.success(data.message);
          setStep(3);
          setLoading(false);
        } else {
          toast.error(data.message);
        }
      }
      if (step === 3) {
        if (password !== confirmPassword) {
          toast.error("Password doesn't match");
          setLoading(false);
          return;
        }

        const { data } = await axios.post(
          backend + "/api/user/reset-password",
          { email, otp, password }
        );

        if (data.success) {
          toast.success(data.message);
          setPassword("");
          setConfirmPassword("");
          setLoading(false);
          onClose();
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm transition-all">
        <h2 className="text-xl font-semibold text-center mb-4">
          Forgot Password
        </h2>

        <form className="flex flex-col gap-3" onSubmit={onSubmitHandler}>
          {step === 1 && (
            <>
              <label htmlFor="email" className="text-sm">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="enter email address"
                className="border px-3 py-2 rounded-md text-sm"
                required
              />
            </>
          )}

          {step === 2 && (
            <>
              <label htmlFor="otp" className="text-sm">
                OTP
              </label>

              <input
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                id="otp"
                placeholder="enter otp"
                className="border px-3 py-2 rounded-md text-sm"
                required
              />
            </>
          )}

          {step === 3 && (
            <>
              <label htmlFor="password" className="text-sm">
                New Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="enter new password"
                className="border px-3 py-2 rounded-md text-sm"
                required
              />

              <label htmlFor="confirm-password" className="text-sm">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirm-password"
                placeholder="enter confirm password"
                className="border px-3 py-2 rounded-md text-sm"
                required
              />
            </>
          )}

          <button
            disabled={loading}
            className="bg-black text-white py-2 rounded-md text-sm hover:bg-black/80 cursor-pointer"
          >
            {loading ? (
              <Loading />
            ) : step === 1 ? (
              "Send OTP"
            ) : step === 2 ? (
              "Verify OTP"
            ) : (
              "Reset Password"
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-sm cursor-pointer text-gray-500 hover:underline text-center"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
