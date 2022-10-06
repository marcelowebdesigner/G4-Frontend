import React from "react";

import Description from "./components/homepage/Description";
import SectionCards from "./components/homepage/SectionCards";
import Header from "./components/homepage/Header";
import Navbar from "./components/homepage/Navbar";
import "./index.css";

const HomePage = () => {
  return (
    <React-Fragment>
      <Navbar />
      
      <Header />
      <Description />
      <SectionCards/>
    </React-Fragment>
  );
};

export default HomePage;
