import React from 'react'
import ReactDOM from 'react-dom/client'
import {HomePage, LoginPage} from './App'
import {BrowserRouter as Route} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>    
  
      
        <Route exact path="/home">
          <HomePage />
        </Route> 
        <Route exact path="/login"><LoginPage/></Route>
        


  </React.StrictMode>
  
)
