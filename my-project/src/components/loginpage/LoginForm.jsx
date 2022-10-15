import React from "react";
import Arrow from '../../assets/media/img/arrow-buttonback.png'
import {Link} from 'react-router-dom';

export const FormTitle = ({title}) => {
  return (
    <>
      <h2 className="text-purple-half-dark text-5xl">{title}</h2>
    </>
  );
};

export const ButtonBack = () => {
  return(
    <> 
      <button><Link to="/"><img src={Arrow} alt="back"/> </Link></button>
    </>
  )
}

export const MsgInstruction = ({instruction}) => {
  return (
    <>
      <div className="text-purple-half-dark pr-24">{instruction}</div>
    </>
  );
};

export const TextAreaForm = ({textContent}) => {
  return (
    <>
      <input placeholder={textContent} className='border-2 border-purple-half-dark text-purple-half-dark rounded pr-44 pl-2 py-1 bg-transparent	'/>
      <br/>
    </>
  );
};

export const TextPassword = ({textContent}) => {
  return (
    <>
      <input type='password' placeholder={textContent} className='border-2 border-purple-half-dark text-purple-half-dark rounded pr-44 pl-2 py-1 bg-transparent	'/>
      <br/>
    </>
  );
};

export const ButtonLogin = ({content}) => {
  return (
    <>
      <button className='hover:marker border-2 border-purple-half-dark rounded bg-purple-half-dark  text-zinc-100 mt-2 pr-40 pl-40 py-1'>{content}</button>
      
    </>
  );
};

export const ButtonForm = ({content}) => {
  return (
    <>
      <button className='hover:marker border-2 border-purple-half-dark rounded text-purple-half-dark mt-8 pr-24 pl-24 py-1' >{content}</button>
      
    </>
  );
};
