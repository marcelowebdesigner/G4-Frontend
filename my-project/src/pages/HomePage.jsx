import React from 'react'
import Navbar from '../components/homepage/Navbar'
import Header from '../components/homepage/Header'
import SectionCards from '../components/homepage/SectionCards'
import Description from '../components/homepage/Description'
import Footer from '../components/homepage/Footer'
import '../styles/Image-bg-ligth.css'

const HomePage = () => {
  return (
    <div className="bg-light">
      <Navbar/>
      <Header/>
      <Description/>
      <SectionCards/>
      <Footer />      
    </div>
  )
}

export default HomePage