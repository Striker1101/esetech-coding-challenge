var express = require("express");
var router = express.Router();
// const multer = require("multer");
// const storage = multer.diskStorage({});
// const upload = multer({ storage: storage });

const admin = require("firebase-admin");

const authenticate = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization;

    if (!idToken) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    // Verify and decode the ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // Attach user information to the request object for further processing
    req.user = decodedToken;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(403).json({ error: "Forbidden: Invalid token" });
  }
};

const userController = require("../../controllers/userController");

router.put("/editdetails", authenticate, (req, res) => {
  userController.firebase_editDetails(req, res);
});

module.exports = router;
