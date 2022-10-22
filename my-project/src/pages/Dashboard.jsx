import React from 'react'
import Navbar from '../components/dashboard/Navbar'
import SidebarLeft from '../components/dashboard/Sidebar-left'
import SidebarRight from '../components/dashboard/Sidebar-right'
import Suscription from '../components/dashboard/Suscription'
import '../styles/Image-bg-ligth.css'

const Dashboard = () => {
  return (
    <div className="bg-light">
      <Navbar/>
      <SidebarLeft />
      <Suscription />
      <SidebarRight />
    </div>
  )
}

export default Dashboard