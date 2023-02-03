import React, {useState} from "react";
import "../styles/Image-bg-ligth.css";
//import Arrow from '../../assets/media/img/arrow-buttonback.png';
import {Link} from 'react-router-dom';
import register from "../services/register";
 

    const SignIn = () => {
          const [datos, setDatos] = useState({
              email: '',
              first_name: '',
              last_name: '',
              password: '',
              re_password: ''
          }) 
          
    const handleInputChange = (event) => {
      setDatos({
        ...datos, 
        [event.target.name] : event.target.value
      })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos)
    }

    // (async () => {
    //   const rawResponse = await fetch('http://127.0.0.1:8000/auth/users/', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(datos)  
          
    //   });
    //   const content = await rawResponse.json();    
    //   console.log(content);
    // })();

  return (
    <form className="login-back mx-auto text-center py-48 " method="post"  onSubmit={enviarDatos}>   
      <div className="container columns-3">
        <div>
          {/* <button><Link to="/"><img src={Arrow} alt="back"/> </Link></button> */}
        </div>
        <div className="">
          <h2 className="text-purple-half-dark text-5xl">Register</h2>
        </div>
      </div>
        <br />
          <div className="container mx-auto px-48">
            <label className="text-purple-half-dark pr-24"></label>
          </div>
          <input placeholder="mail"
            type="email" 
            name="email"
            
            id="email"
            onChange={handleInputChange}
            required
            className='border-2 border-purple-half-dark text-purple-half-dark rounded pr-44 pl-2 py-1 bg-transparent'/>
              <br /> 
          <div className="container mx-auto px-48">
            <label className="text-purple-half-dark pr-24"></label>
          </div>
          <input placeholder="primer nombre" 
            type="text"
            id="first_name"
           
            name="first_name"
            onChange={handleInputChange}
            required
            className='border-2 border-purple-half-dark text-purple-half-dark rounded pr-44 pl-2 py-1 bg-transparent'/>
          <br /> 
          <div className="container mx-auto px-48">
            <label className="text-purple-half-dark pr-24"></label>
          </div>
          <input placeholder="segundo nombre" 
            type="text"
            id="last_name"
            name="last_name"
            
            onChange={handleInputChange}
            required
            className='border-2 border-purple-half-dark text-purple-half-dark rounded pr-44 pl-2 py-1 bg-transparent'/>
          <br /> 
          <div className="container mx-auto px-48">
            <label className="text-purple-half-dark pr-24"></label>
          </div>
          <input placeholder="contraseña"
            type="password"
            id="password"
            
            name="password"
            onChange={handleInputChange}
            required
            className='border-2 border-purple-half-dark text-purple-half-dark rounded pr-44 pl-2 py-1 bg-transparent'/>
          <div className="container mx-auto px-48">
          <label className="text-purple-half-dark pr-24"></label>
          </div>
          <input placeholder="repetir contraseña"
            type="password"
            id="re_password"
           
            name="re_password"
            onChange={handleInputChange}
            required
            className='border-2 border-purple-half-dark text-purple-half-dark rounded pr-44 pl-2 py-1 bg-transparent'/>
              <br />
              {/* <Link to="/HomePage"><button className='hover:marker border-2 border-purple-half-dark rounded bg-purple-half-dark  text-zinc-100 mt-2 pr-40 pl-40 py-1'>{content}</button></Link> */}
              <br />
              <br />
              <div className="relative flex py-5 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="flex-shrink mx-4 text-purple-dark font-semibold">Or login</span>
                  <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <button 
                type="submit" 
                onChange={register()}
                className='hover:marker border-2 border-purple-half-dark rounded text-purple-half-dark mt-8 pr-24 pl-24 py-1'>
                  Registrar
              </button>
    </form>
  );
};

export default SignIn;