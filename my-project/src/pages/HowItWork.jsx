import React from 'react';
import Footer from '../components/homepage/Footer';
import HowItWorkContent from '../components/homepage/HowItWorkContent';
import NavbarHomepage from '../components/homepage/NavbarHomepage';
import '../styles/Image-bg-ligth.css'

const HowItWork = () => {
  return (
    <div className="bg-light">
      <NavbarHomepage active='how'/>
      <HowItWorkContent />
      <Footer />
    </div>
  )
}

export default HowItWork;