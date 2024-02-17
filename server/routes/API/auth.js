var express = require("express");
var router = express.Router();
var authenticate = require("../middleware/auth")
const admin = require("firebase-admin");

const userController = require("../../controllers/authController");

router.post("/sign-up", userController.firebase_sign_up);

router.post("/log-in", userController.firebase_sign_in);

router.post("/check", userController.firebase_check_signin);

router.post("/logout", authenticate, (req, res) => {
  userController.firebase_logout(req, res);
});

module.exports = router;
