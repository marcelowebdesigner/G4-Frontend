import React from 'react'
import Navbar from '../components/homepage/Navbar'
import ContactForm from '../components/homepage/ContactForm'
import '../styles/Image-bg-ligth.css'
const Contact = () => {

  return (
    <div className="bg-light">
       <Navbar/>
      <ContactForm className="bg-light"/>
    </div>
  )
}

export default Contact