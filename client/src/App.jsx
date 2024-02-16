import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Template from "./CV-template";
import Protected from "./Protected";
import NavBar from "./Pages/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  //get if user is logged in
  return (
    <div className="App">
      <NavBar isLoggedIn={false} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          //SPA
          <Route
            path="/cv"
            element={
              <Protected isLoggedIn={true}>
                <Template />
              </Protected>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
