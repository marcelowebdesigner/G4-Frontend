import React from 'react';
import Footer from '../components/homepage/Footer';
import HowItWorkContent from '../components/homepage/HowItWorkContent';
import Navbar from '../components/homepage/Navbar';
import '../styles/Image-bg-ligth.css'

const HowItWork = () => {
  return (
    <div className="bg-light">
      <Navbar />
      <HowItWorkContent />
      <Footer />
    </div>
  )
}

export default HowItWork;