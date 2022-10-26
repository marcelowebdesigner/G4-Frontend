import React from 'react'
import ContactForm from '../components/homepage/ContactForm'
import '../styles/Image-bg-ligth.css'
import NavbarHomepage from '../components/homepage/NavbarHomepage'
const Contact = () => {

  return (
    <div className="bg-light">
       <NavbarHomepage active='contact'/>
      <ContactForm className="bg-light"/>
    </div>
  )
}

export default Contact