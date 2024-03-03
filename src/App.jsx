import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Final from "./Final";
import RegisterPage from "./components/Register";
import Navbar from "./Navbar";
import { Signup } from "./pages/signup/Signup";
import { Login } from "./pages/login/Login";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/createresume" element={<Home />} />
        <Route path="/final" element={<Final />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
