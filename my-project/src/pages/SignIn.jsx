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

const SignIn = () => {
  return (
    <div className="login-back mx-auto text-center py-48 ">
      <div className="container columns-3">
        <div>
          <ButtonBack />
        </div>
        <div className="">
          <FormTitle title={"SignIn"}/>
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
          <div className="container mx-auto px-48">
            <MsgInstruction instruction="Confim Password" />
          </div>
            <TextPassword textContent="Confirm Password" />
              <br />
            <ButtonLogin content="SignIn" />
              <br />
              <br />
              <div className="relative flex py-5 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="flex-shrink mx-4 text-gray-400 text-purple-dark font-semibold">Or login</span>
                  <div className="flex-grow border-t border-gray-400"></div>
              </div>
            <ButtonForm content="Login" />
    </div>
  );
};

export default SignIn;