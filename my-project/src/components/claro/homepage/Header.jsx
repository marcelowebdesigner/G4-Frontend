import React from 'react'
import ReactDOM from 'react-dom/client'
import './Header.css'

/** Este es el Header del homepage en modo claro. 
 * 
 */

function Header() {
  return ( 
      
    <div class="flex justify-between">
      <div className="img1_header"> 
        <img src="./src/components/claro/homepage/media/HomePage-Person.svg"  />       
      </div>
      <div className="container flex justify-center">
        <h4 className="text-black-800 text-5xl">YOU FORGOT TO
          <span>
            <h4 className="text-black-800 text-6xl flex justify-end ">PAY??</h4>
          </span>
        </h4>           
      </div>
      <div className="img2_header flex justify-end">
        <img src="./src/components/claro/homepage/media/HomePage-Brain.svg" />
      </div>      
    </div>
   
    
  )
}
export default Header