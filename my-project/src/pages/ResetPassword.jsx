import React from 'react'
import '../styles/image-bg-ligth.css'
import {Link} from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className="bg-light col-12">
      <Link to="/" class="btn btn-outline-secondary">
        Back
      </Link>
            <h1 className="text-center">Reset Password</h1>        
                <div className="alert border  shadow round col-8 mx-auto p-4">
                    <form action="" className="grid cols-lg-4">
                        <h2 className="text-center">Create your new password</h2>
                        
                        <label className="text-black-800 font-light mt-8 dark:text-gray-50">Email:</label>
                        <input className=" bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" type="email" name="" placeholder="Email" id="" required/>

                        <label className="text-black-800 font-light mt-8 dark:text-gray-50">New Password:</label>
                        <input className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" type="text" name="" placeholder="New Password" id="" required/>

                        <label className="text-black-800 font-light mt-8 dark:text-gray-50">Confirm new Password:</label>
                        <input className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" type="text" name="" placeholder="Confirm new Password" id="" required/>
                        <br />
                        <div className="justify-center items-center text-center">
                            <button className="bg-purple-800 w-64">Reset Password</button>
                        </div>                        
                    </form>
                </div>                
    </div>
    
  )
}

export default ResetPassword