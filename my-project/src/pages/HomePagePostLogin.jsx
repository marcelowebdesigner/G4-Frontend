import React from "react";
import Navbar from "../components/dashboard/Navbar";
import Header from "../components/homepage/Header";



const HomePagePostLogin = () => {
  return (
    <div className="login-back h-screen">
      <div className="ml-10">
        <Navbar />
      </div>
      <div className="py-20 mx-20">
        <Header />
      </div>
    </div>
  );
};

export default HomePagePostLogin;
