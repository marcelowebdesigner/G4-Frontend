import React from 'react'
import {Link} from 'react-router-dom'
const NavbarHomepage = () => {
  return (
    <div>
      <nav class="flex items-center justify-between  text-end flex-wrap bg-white-200 p-6 font-primary">
        
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto font-bold  text-blue-regular">
          <div class="text-sm lg:flex-grow">
            <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
              Home
            </Link>
            <Link to="/howitwork" class="block mt-4 lg:inline-block lg:mt-0  mr-4">
              How it Work
            </Link>
            <Link to="/about" class="block mt-4 lg:inline-block lg:mt-0  mr-4">
              About
            </Link>
            <Link to="/contact" class="block mt-4 m-2 lg:inline-block lg:mt-0  mr-4">
              Contact
            </Link>
          </div>
          <div>
            <Link to="/Signin" class="inline-block text-sm px-4 py-2 bg-purple-900 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-purple-900 mt-4 lg:mt-0">Sing In</Link>
          </div>
          <div>
            <Link to="/Login" class="inline-block text-sm px-4 py-2 bg-purple-900 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-purple-900 mt-4 lg:mt-0">Log In</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarHomepage