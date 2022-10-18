import React from 'react'
import Description404 from '../components/404/Description'
import Navbar from '../components/dashboard/Navbar'
import '../styles/Image-bg-ligth.css'

const Error404 = () => {
  return (
    <div className="bg-light">
      <Navbar />
      <Description404 />
    </div>
  )
}

export default Error404