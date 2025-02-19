import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/AuthModels.js";

// Signup Controller
export const signup = async (req, res) => {
  try {
      console.log("Request Body:", req.body); // Debugging log

      const { name, email, password, confirmPassword, userType } = req.body;

      // Check if all fields are provided
      if (!name || !email || !password || !confirmPassword || !userType) {
          return res.status(400).json({ message: "All fields are required" });
      }

      // Validate user type
      if (!["Doctor", "Patient"].includes(userType)) {
          return res.status(400).json({ message: "Invalid user type" });
      }

      // Check if passwords match
      if (password !== confirmPassword) {
          return res.status(400).json({ message: "Passwords do not match" });
      }

      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: "Email already in use" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({
          name,
          email,
          password: hashedPassword,
          userType,
      });

      await newUser.save();
      res.status(201).json({ message: "User registered successfully. Please log in." });
  } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: "Something went wrong" });
  }
};


// Login Controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, userType: user.userType }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token, userType: user.userType });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
