import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./User/Homepage";
import Login from "./User/Login";
import Register from "./User/Register";
import Protected from "./Protected";
import DashboardApp from "./Dashboard/App"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />

        <Route
          path="/dashboard/*"
          element={
            //check if user is logged in
            <Protected isLoggedIn={true}>
              <DashboardApp />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

