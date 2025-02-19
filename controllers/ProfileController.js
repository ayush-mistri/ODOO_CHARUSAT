import User from "../models/AuthModels.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary Config
cloudinary.v2.config({
    cloud_name: 'dk2pgy4rg',
    api_key: '813622143381873',
    api_secret: 'Qly2fVSeffK1rawFYBpDAmNhRYw',
});

// Get user profile by email
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }).select("-password -__v");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
    try {
      const { mobileNo, email } = req.body;
      const updatedData = { mobileNo };
  
      if (req.file) {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "profile_pictures",
        });
        updatedData.profilePic = result.secure_url;
      }
  
      let user = await User.findOneAndUpdate(
        { email },
        updatedData,
        { new: true }
      );
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
