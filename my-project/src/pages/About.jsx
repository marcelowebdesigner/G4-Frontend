import React from 'react'
import ContenidoAbout from '../components/homepage/About'
import Footer from '../components/homepage/Footer'
import Navbar from '../components/homepage/Navbar'
import '../styles/Image-bg-ligth.css'

const About = () => {
  return (
    <div className="bg-light">
      <Navbar />
      <ContenidoAbout/>
      <Footer />  
    </div>
  )
}

export default About