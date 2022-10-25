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
    <div className="login-back text-center pt-40 pb-48">
      <div className="w-72 inline-flex pr-16 mr-10">
        <div className="py-2 mr-16 pt-4 pr-2 pl-1">
          <ButtonBack />
        </div>
        <div className="pl-2 pb-5">
          <FormTitle title={"Login"} />
        </div>
      </div>
      <br />
      <form action="">
        <div className="mr-10 ml-1 mb-1 pl-0 pr-24">
          <MsgInstruction instruction="Email or Username" />
        </div>
        <TextAreaForm textContent="Email or Username" />
        <br />
        <div className="mr-10 ml-0 mb-1 pl-0 pr-40">
          <MsgInstruction instruction="Password" />
        </div>
        <TextPassword textContent="Password" />
      </form>
      <br />
      <ButtonLogin content="Login" />
      <br />
      <ButtonForm content="Forgot your password?" />
    </div>
  );
};
