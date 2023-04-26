import React from 'react'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser';

import '../../styles/Image-bg-ligth.css'
const ContactForm = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_vfe7u3r','template_uw6e1sf',event.target,'jfi_d-yG8lPGdqPGR')
    .then(response =>console.log(response))
    .catch(error =>console.log(error))
  }



  return (
    <div>
      <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 dark:bg-blue-500 " onSubmit={sendEmail}>
      <h1 className="text-2xl font-bold text-blue-regular">Contactese con nosotros</h1>

      <label for="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">Nombre Completo<span className="text-red-500 dark:text-gray-50">*</span></label>
      <input type="text" name="user_name" className="bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label for="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="user_email" className="bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label for="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Asunto<span className="text-red-500">*</span></label>
      <input type="text" name="subject" className="bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label for="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Mensaje<span className="text-red-500">*</span></label>
      <textarea name="user_message" className="bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          Send
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
          </svg>
        </button>
      </div>
      
    </form>

    
    </div>
  )
}

export default ContactForm