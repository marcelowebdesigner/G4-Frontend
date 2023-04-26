import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../styles/Header.css'

/** Este es el Header del homepage en modo claro. 
 * 
 */

function Header() {
  return ( 
      
    <div class="flex justify-between">
      <div className="container flex justify-center">
        <h4 className="text-purple-dark text-7xl font-secondary">YOU FORGOT TO
          <span className='flex justify-end'>PAY??</span>
        </h4>           
      </div>     
    </div>
   
    
  )
}
export default Header