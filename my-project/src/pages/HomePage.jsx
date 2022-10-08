import React from 'react'
import Navbar from '../components/homepage/Navbar'
import Header from '../components/homepage/Header'
import SectionCards from '../components/homepage/SectionCards'
import Description from '../components/homepage/Description'
import { LoginPage } from './LoginPage'
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Description/>
      <SectionCards/>
      <LoginPage/>
    </div>
  )
}

export default HomePage