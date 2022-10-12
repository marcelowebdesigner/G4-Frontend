import React from "react";
import Arrow from '../../assets/media/img/arrow-buttonback.png'
import {Link} from 'react-router-dom';

export const FormTitle = ({title}) => {
  return (
    <>
      <h2 className="text-purple-half-dark text-4xl">{title}</h2>
    </>
  );
};

export const ButtonBack = () => {
  return(
    <> 
      <button><Link to="/"><img src={Arrow} alt="back" /> </Link></button>
    </>
  )
}

export const MsgInstruction = ({instruction}) => {
  return (
    <>
      <div className="text-purple-half-dark text-left p">{instruction}</div>
    </>
  );
};

export const TextAreaForm = ({textContent}) => {
  return (
    <>
      <input placeholder={textContent} className='border-2 border-purple-half-dark text-purple-half-dark rounded px-8 bg-transparent	'/>
      <br/>
    </>
  );
};

export const TextPassword = ({textContent}) => {
  return (
    <>
      <input type='password' placeholder={textContent} className='border-2 border-purple-half-dark text-purple-half-dark rounded px-8 bg-transparent	'/>
      <br/>
    </>
  );
};

export const ButtonLogin = ({content}) => {
  return (
    <>
      <button className='hover:marker border-2 border-purple-half-dark bg-purple-half-dark text-zinc-100 rounded px-24' >{content}</button>
      
    </>
  );
};

export const ButtonForm = ({content}) => {
  return (
    <>
      <button className='hover:marker border-2 border-purple-half-dark rounded px-8 text-purple-half-dark' >{content}</button>
      
    </>
  );
};
