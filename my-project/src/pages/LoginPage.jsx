import React from 'react'
import {
  FormTitle,
  TextAreaForm,
  ButtonForm,
  MsgInstruction,
} from '../components/loginpage/LoginForm';
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