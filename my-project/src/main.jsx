import React from 'react'
import ReactDOM from 'react-dom/client'
import Description from './components/homepage/Description'

import Header from './components/homepage/Header'
import Navbar from './components/homepage/Navbar'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
   
   <Navbar />
   <Header />
   <Description />

      
  </React.StrictMode>
  
)
