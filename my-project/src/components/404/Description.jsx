import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'

function Description404() {
  return ( 
      
    <div className="flex justify-center flex-col mx-auto py-52 px-52">  
      <div className="flex justify-center flex-col mx-auto font-sans">
        <h5 className="flex justify-center text-2xl">Oops! You are lost</h5>
        <h2 className="flex justify-center text-xl">Error 404 - page not found</h2>
        <h1 className="flex justify-center text-lg">Sorry the page you are looking for does not exist</h1>
      </div>   
      <div className="flex justify-center mx-auto flex-col">
        <Link to="/" className="flex justify-center object-center ml-2 px-10 mt-8 py-2 bg-purple-800 text-gray-50 font-light rounded-md text-2xl">
          Back to Home 
        </Link>  
      </div>  
    </div>  
    
  )
}
export default Description404