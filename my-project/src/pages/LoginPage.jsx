import React from "react";
import { Link } from "react-router-dom";
import "../styles/Image-bg-ligth.css";

export const LoginPage = () => {
  return (
    <div className="login-back text-center pt-40 pb-48">
      <div className="w-72 inline-flex pr-16 mr-10">
        <Link to="/" class="btn btn-outline-secondary">
          Back
        </Link>
        <div className="text-purple-half-dark text-5xl pl-2 pb-5">
          Login
        </div>
      </div>
      <br />
      <form action="">
        <div className="text-purple-half-dark mr-10 ml-1 mb-1 pl-0 pr-24">
          Email or Username:
        </div>
          <input type="text" placeholder="Email or Username" className='border-2 border-purple-half-dark text-purple-half-dark rounded pr-44 pl-2 py-1 bg-transparent	'/>
        <br />
        <div className="text-purple-half-dark mr-10 ml-1 mb-1 pl-0 pr-24">
          Password:
        </div>
        <input type="text" placeholder="Password" className="border-2 border-purple-half-dark text-purple-half-dark rounded pr-44 pl-2 py-1 bg-transparent	"/>
      </form>
      <br />
      <Link to="/Dashboard">
        <button className='hover:marker border-2 border-purple-half-dark rounded bg-purple-half-dark  text-zinc-100 mt-2 pr-40 pl-40 py-1'>
        Login</button>
        </Link>
      <br />
      <button className='hover:marker border-2 border-purple-half-dark rounded text-purple-half-dark mt-8 pr-24 pl-24 py-1' >
        Forgot your password?
      </button>
    </div>
  );
};
