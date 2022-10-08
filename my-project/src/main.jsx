import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouting from './AppRouting'




ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>    
  <BrowserRouter>
     <AppRouting/>
  </BrowserRouter> 
        
  </React.StrictMode>
  
)
