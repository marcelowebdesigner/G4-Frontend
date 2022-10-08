import React from "react";

export const FormTitle = () => {
  return (
    <>
      <h2>Login</h2>
    </>
  );
};

export const TextAreaForm = ({textContent}) => {
  return (
    <>
      <div>{textContent}</div>
    </>
  );
};

export const ButtonForm = ({content}) => {
  return (
    <>
      <button className="hover:marker">{content}</button>
    </>
  );
};

export const MsgInstruction = ({instruction}) => {
  return (
    <>
      <div>{instruction}</div>
    </>
  );
};
