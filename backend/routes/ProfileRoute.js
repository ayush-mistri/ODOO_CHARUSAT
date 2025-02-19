import express from "express";
import multer from "multer";
import { getUserProfile, updateUserProfile } from "../controllers/ProfileController.js";

const router = express.Router();

// Multer configuration for file uploads (Profile Picture)
const storage = multer.diskStorage({});
const upload = multer({ storage });

// Get user profile by email
router.get("/:email", getUserProfile);

// Update profile (Mobile No & Profile Picture)
router.put("/", upload.single("profilePic"), updateUserProfile);

export default router;
