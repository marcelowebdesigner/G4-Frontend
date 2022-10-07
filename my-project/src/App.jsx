import React from "react";

import Description from "./components/homepage/Description";
import SectionCards from "./components/homepage/SectionCards";
import Header from "./components/homepage/Header";
import Navbar from "./components/homepage/Navbar";
import "./index.css";
import {FormTitle, LoginForm} from "./components/loginpage/LoginForm";

export const HomePage = () => {
  return (
    <React-Fragment>
      <Navbar />
      
      <Header />
      <Description />
      <SectionCards/>
    </React-Fragment>
  );
};

export const LoginPage = () => {
    return (
        <>
        <FormTitle/>
        <LoginForm/>
        

        </>
        

    )
}


