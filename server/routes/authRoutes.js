import express from "express";
import User from "../User/User.js";
import multer from "multer";
import path from "path";
import bcrypt from "bcrypt";
const router = express.Router();
const saltRounds = 10;
// Multer Config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, `${name}-${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });
// SIGNUP
router.post("/signup", upload.single("profilePhoto"), async (req, res) => {
  try {
    const { fullName, userName, emailAddress, phoneNumber, passWord } =
      req.body;
    const existingUser = await User.findOne({ emailAddress });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(passWord, saltRounds);
    const newUser = new User({
      fullName,
      userName,
      emailAddress,
      phoneNumber,
      passWord: hashedPassword,
      profilePhoto: req.file ? req.file.path : "",
    });
    await newUser.save();
    res.status(201).json({
      message: "✅ User registered successfully",
      user: {
        _id: newUser._id,
        userName: newUser.userName,
        fullName: newUser.fullName,
        emailAddress: newUser.emailAddress,
        phoneNumber: newUser.phoneNumber,
        profilePhoto: newUser.profilePhoto,
      },
    });
  } catch (error) {
    console.error(`❌ ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { emailAddress, userName, passWord } = req.body;
    const user = await User.findOne({ emailAddress });
    if (!user) {
      return res.status(400).json({ message: "❌ Check email address" });
    }
    if (user.userName !== userName) {
      return res.status(400).json({ message: "❌ Check username" });
    }
    const isPasswordMatch = await bcrypt.compare(passWord, user.passWord);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "❌ Check password" });
    }
    res.status(200).json({
      message: "✅ Login Successful",
      user: {
        _id: user._id,
        userName: user.userName,
        fullName: user.fullName,
        emailAddress: user.emailAddress,
        phoneNumber: user.phoneNumber,
        profilePhoto: user.profilePhoto,
      },
    });
  } catch (error) {
    console.error(`❌ ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.get("/user/:userName", async (req, res) => {
  try {
    const { userName } = req.params;
    const user = await User.findOne({ userName: userName }).select();

    if (!user) {
      return res.status(404).json({ message: "❌ User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(`❌ ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.put("/user/id/:id", upload.single("profilePhoto"), async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (updates.fullName) existingUser.fullName = updates.fullName;
    if (updates.userName) existingUser.userName = updates.userName;
    if (updates.emailAddress) existingUser.emailAddress = updates.emailAddress;
    if (updates.phoneNumber) existingUser.phoneNumber = updates.phoneNumber; // hash this if needed
    if (req.file) existingUser.profilePhoto = req.file.path;
    await existingUser.save();
    res.status(200).json({ message: "Profile updated", user: existingUser });
  } catch (error) {
    console.error("❌ Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// Get user by ID
router.get("/user/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-passWord"); // exclude password

    if (!user) {
      return res.status(404).json({ message: "❌ User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(`❌ ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
});
export default router;
