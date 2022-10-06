import React from "react";
import Description from "./components/homepage/Description";

import Header from "./components/homepage/Header";
import Navbar from "./components/homepage/Navbar";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Description />
    </>
  );
};

export default HomePage;
