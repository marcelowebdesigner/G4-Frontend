import React from "react";
import {
  FormTitle,
  TextAreaForm,
  ButtonForm,
  MsgInstruction,
  ButtonBack,
  ButtonLogin,
  TextPassword,
} from "../components/loginpage/LoginForm";
import "../styles/Image-bg-ligth.css";

export const LoginPage = () => {
  return (
    <div className="login-back mx-auto text-center py-48 ">
      <div className="container columns-3">
        <div>
          <ButtonBack />
        </div>
        <div className="">
          <FormTitle title={"Login"}/>
        </div>
      </div>
        <br />
      <div className="container mx-auto px-48">
        <MsgInstruction instruction="Email or Username" />
      </div>
      <TextAreaForm textContent="Email or Username" />
        <br />
      <div className="container mx-auto px-48">
        <MsgInstruction instruction="Password" />
      </div>
      <TextPassword textContent="Password" />
        <br />
      <ButtonLogin content="Login" />
        <br />
        <br />
      <ButtonForm content="Forgot your password?" />
    </div>
  );
};
