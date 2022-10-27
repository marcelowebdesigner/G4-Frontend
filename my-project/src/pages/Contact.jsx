import React from 'react'
import ContactForm from '../components/homepage/ContactForm'
import '../styles/Image-bg-ligth.css'
import NavbarHomepage from '../components/homepage/NavbarHomepage'
import Footer from '../components/homepage/Footer'
const Contact = () => {

  return (
    <div className="bg-light">
       <NavbarHomepage active='contact'/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact