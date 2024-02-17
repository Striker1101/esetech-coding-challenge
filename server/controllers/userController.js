// const { body, validationResult } = require("express-validator");
// const User = require("../models/user");
// const bcrypt = require("bcryptjs");
// const passport = require("passport");
// const { uploadToCloudinary, removeFromCloudinary } = require("./cloudinary");
const admin = require("firebase-admin");

// Firebase Admin SDK initialization
const db = admin.firestore();

exports.firebase_editDetails = async (req, res) => {
  router.post("/edit", async (req, res) => {
    try {
      const { userId, newData } = req.body;

      // Update user details in Firestore collection "users"
      await admin.firestore().collection("users").doc(userId).update(newData);

      // Return a success response
      res.status(200).json({ message: "User details updated successfully" });
    } catch (error) {
      console.error("Error editing user details:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
};

exports.firebase_getDetails = async (req, res) => {
  try {
    const { uid } = req.params;

    // Fetch the user document with the specified UID from Firestore
    const userDoc = await admin.firestore().collection("users").doc(uid).get();

    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the user document data as JSON response
    res.status(200).json({ id: userDoc.id, ...userDoc.data() });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
