import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './componentes/Navbar'
import './index.css'
import NavbarHomepage from './componentes/claro/homepage/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
   
   <Navbar />
   <NavbarHomepage/>

      
  </React.StrictMode>
  
)
