import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import HowItWork from "./pages/HowItWork";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { LoginPage } from "./pages/LoginPage";
import  SignIn  from "./pages/SignIn"; 
import ResetPassword from "./pages/ResetPassword";

function AppRouting() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HowItWork" element={<HowItWork />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default AppRouting;
