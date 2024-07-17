const { Router } = require("express");
const { getProfile } = require("../controller/profile.controller.js");
const validateObjectId = require("../middleware/validate-objectId.js");
const { userModel } = require("../models/user.model.js");

const router = Router();

router.get("/profile", getProfile); // Beispielroute, um das Profil zu erhalten
router.get("/:id", validateObjectId, async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = {
  ProfileRoutes: router,
};
