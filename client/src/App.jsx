import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Template from "./CV-template";
import Protected from "./Protected";
import NavBar from "./Pages/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import axios from "axios";

export default function App() {
  // Get user from local storage
  const userFromLocal = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userFromLocal.token}`;

    if (userFromLocal && userFromLocal.token) {
      axios
        .post(process.env.REACT_APP_URL + "/api/auth/check", {
          idToken: userFromLocal.token,
        })
        .then(function (response) {
          if (response.status === 200) {
            setIsLoggedIn(true);
          }
        })
        .catch(function (error) {
          setIsLoggedIn(false);
        });
    }

    // Retrieve UID from local storage
    const uid = userFromLocal ? userFromLocal.id : null;

    // Make sure UID exists
    if (!uid) {
      console.error("UID not found in local storage");
      return;
    }

    // Get user details from the backend
    axios
      .get(process.env.REACT_APP_URL + `/api/user/${uid}`)
      .then((response) => {
        setUser(response.data); // Update state with user data
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, [userFromLocal]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile user={user} />} />
          {/* SPA */}
          <Route
            path="/cv"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Template user={user} />
              </Protected>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
