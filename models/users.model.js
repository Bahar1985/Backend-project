const express = require("express");
const router = express.Router();
const { userModel } = require("../models/user.model");
const { hashPassword } = require("../utils/auth.util");

// Create
router.post("/", async (req, res) => {
  const { fullName, email, password } = req.body;
  const newUser = new userModel({
    fullName,
    email,
    password: hashPassword(password),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Read All
router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Read One
router.get("/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Update
router.patch("/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "User not found" });
    }
    if (req.body.fullName != null) {
      user.fullName = req.body.fullName;
    }
    if (req.body.email != null) {
      user.email = req.body.email;
    }
    if (req.body.password != null) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Delete
router.delete("/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.remove();
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
