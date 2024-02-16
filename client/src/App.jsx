import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Template from "./CV-template";
import Protected from "./Protected";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />

          <Protected isLoggedIn={true}>
            <Template />
          </Protected>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
