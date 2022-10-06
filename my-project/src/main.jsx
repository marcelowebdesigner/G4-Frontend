import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './App'
import {BrowserRouter as Route} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>    
  
      
        <Route exact path="/home">
          <HomePage />
        </Route>   


  </React.StrictMode>
  
)
