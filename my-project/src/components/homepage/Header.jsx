import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../styles/Header.css'

/** Este es el Header del homepage en modo claro. 
 * 
 */

function Header() {
  return ( 
      
    <div class="flex justify-between h-48">
      <div className="container flex justify-center">
        <h4 className="text-black-800 text-5xl">YOU FORGOT TO
          <span>
            <h4 className="text-black-800 text-6xl flex justify-end">PAY??</h4>
          </span>
        </h4>           
      </div>     
    </div>
   
    
  )
}
export default Header