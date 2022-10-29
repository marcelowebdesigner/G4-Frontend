import React from 'react'
import Header from '../components/homepage/Header'
import SectionCards from '../components/homepage/SectionCards'
import Description from '../components/homepage/Description'
import Footer from '../components/homepage/Footer'
import '../styles/Image-bg-ligth.css'
import NavbarHomepage from '../components/homepage/NavbarHomepage'

const HomePage = () => {
  return (
    <div className="bg-light-homepage h-screen flex flex-col justify-between">
      <NavbarHomepage active='home'/>
      <Header/>
      <Description/>
      <SectionCards/>
      <Footer />      
    </div>
  )
}

export default HomePage