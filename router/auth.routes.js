const { Router } = require("express");
const { login, register } = require("../controller/auth.controller.js");

const router = Router();
router.post("/login", login);
router.post("/register", register);

module.exports = {
  AuthRouters: router,
};
