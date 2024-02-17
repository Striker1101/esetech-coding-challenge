const admin = require("firebase-admin");
const { user } = require("pg/lib/defaults");

// Firebase Admin SDK initialization
const db = admin.firestore();

exports.firebase_sign_up = async (req, res) => {
  try {
    // Extract user registration data from request body
    const {
      firstName,
      lastName,
      email,
      password,
      gitHub,
      linkedIn,
      portfolio,
      tagline,
    } = req.body;

    // Validate request body
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create user in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      displayName: `${firstName} ${lastName}`,
    });

    // Save additional user data to Firestore
    await db.collection("users").doc(userRecord.uid).set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      gitHub,
      linkedIn,
      portfolio,
      tagline,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.firebase_sign_in = async (req, res) => {
  try {
    // Extract user login credentials from request body
    const { email, password } = req.body;

    // Authenticate user with Firebase Authentication
    const userRecord = await admin
      .auth()
      .signInWithEmailAndPassword(email, password);

    // Get the ID token from the user credential
    const idToken = await userRecord.user.getIdToken();

    //no user with such record
    if (!userRecord) {
      res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(201).json({
      message: "User logged in successfully",
      user: userRecord,
      idToken,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.firebase_check_signin = async (req, res) => {
  try {
    const { idToken } = req.body;

    // Verify ID token using Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // If verification is successful, user is logged in
    res.status(200).json({ message: "User is logged in", user: decodedToken });
  } catch (error) {
    res.status(401).json({ error: error });
  }
};

exports.firebase_check_logout = async (req, res) => {
  try {
    const { idToken } = req.body;

    // Verify and decode the ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // Revoke the user's token
    await admin.auth().revokeRefreshTokens(decodedToken.uid);

    // Return a success response
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
