import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, required: true, enum: ["Doctor", "Patient"] },
    mobileNo: { type: String, default: null }, 
    profilePic: { type: String, default: null },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
