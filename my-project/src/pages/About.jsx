import React from 'react'
import ContenidoAbout from '../components/homepage/About'
import Footer from '../components/homepage/Footer'
import NavbarHomepage from '../components/homepage/NavbarHomepage'
import '../styles/Image-bg-ligth.css'

const About = () => {
  return (
    <div className="bg-light">
      <NavbarHomepage active='about' />
      <ContenidoAbout/>
      <Footer />  
    </div>
  )
}

export default About