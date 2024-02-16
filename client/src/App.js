import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Login";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Protected from "./Protected";
import NavBar from "./Pages/Nav";
import Template from "./CV-template";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route
          path="/cv"
          element={
            //check if user is logged in
            <Protected isLoggedIn={true}>
              <Template />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
