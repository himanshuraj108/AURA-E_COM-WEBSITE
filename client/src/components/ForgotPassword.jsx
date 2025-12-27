import React, { useState } from "react";

const ForgotPassword = ({ onClose }) => {
  const [showOTPfield, setShowOTPfield] = useState("GET OTP");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-center mb-4">
          Forgot Password
        </h2>

        <form className="flex flex-col gap-3">
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>

          <input
            type="email"
            id="email"
            placeholder="enter email address"
            className="border px-3 py-2 rounded-md text-sm"
            required
          />

          {showOTPfield === "Verify OTP" && (
            <>
              <label htmlFor="otp" className="text-sm">
                OTP
              </label>

              <input
                type="number"
                id="otp"
                placeholder="enter otp"
                className="border px-3 py-2 rounded-md text-sm"
              />
            </>
          )}

          <button
            onClick={() => setShowOTPfield("Verify OTP")}
            className="bg-black text-white py-2 rounded-md text-sm"
          >
            {showOTPfield === "GET OTP" ? "GET OTP" : "Verify OTP"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-500 hover:underline text-center"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
