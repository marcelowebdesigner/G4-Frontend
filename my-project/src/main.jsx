import React from 'react'
import ReactDOM from 'react-dom/client'
import Description from './components/claro/homepage/Description'

import Header from './components/claro/homepage/Header'
import Navbar from './components/claro/homepage/Navbar'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
   
   <Navbar />
   <Header />
   <Description />

      
  </React.StrictMode>
  
)
