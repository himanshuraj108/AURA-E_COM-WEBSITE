import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: { type: Number },
    otpExpire: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.model("User", authSchema);

export default User;
