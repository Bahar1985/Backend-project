const { Router } = require("express");
const { AuthRouters } = require("./auth.routes.js");
const { ProfileRoutes } = require("./profile.routes.js");
const { checkAuth } = require("../middleware/check-auth.js");
const userRouter = require("../models/users.model.js");


const router = Router();
router.use("/auth", AuthRouters);
router.use("/user",checkAuth, ProfileRoutes);
router.use("/users", userRouter,);
checkAuth, ProfileRoutes;
module.exports = {
  AllRouters: router,
};
