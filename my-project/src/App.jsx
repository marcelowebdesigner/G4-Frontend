import React from "react";

import Description from "./components/homepage/Description";
import SectionCards from "./components/homepage/SectionCards";
import Header from "./components/homepage/Header";
import NavbarHomepage from "./components/homepage/NavbarHomepage";
import "./index.css";
import {
  FormTitle,
  TextAreaForm,
  ButtonForm,
  MsgInstruction,
} from "./components/loginpage/LoginForm";

export const HomePage = () => {
  return (
    <React-Fragment>
      <NavbarHomepage active='home'/>

      <Header />
      <Description />
      <SectionCards />
    </React-Fragment>
  );
};

export const LoginPage = () => {
  return (
    <div className="container mx-auto text-center py-24">
      <FormTitle />
      <MsgInstruction instruction="Email or Username"/>
      <TextAreaForm textContent="Email or Username"/>
      <MsgInstruction instruction="Password"/>
      <MsgInstruction instruction="Forgot Password?"/>
      <TextAreaForm textContent="Password" />
      <ButtonForm content="Log In"/>
      <MsgInstruction instruction="Or sign"/>
      <ButtonForm content="Sig In"/>
    </div>
  );
};
