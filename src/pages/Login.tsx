import React from 'react'
import Navbar2 from '../components/Navbar2'

function Login() {
  return (
    <div>
       
         <Navbar2/>
        
        <div className='flex justify-center'>
             <div className='mx-3 w-full lg:w-1/2 md:w-1/2 lg:mx-0 md:mx-0'>
                    <h1 className='text-center my-9 text-3xl font-bold'>
                        Login
                    </h1>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                        <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>


                    <div >
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">password</label>
                        <div className="mt-2">
                        <input id="password" name="password" type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <button className='w-full  bg-slate-700 text-white p-1 my-4'>
                        Submit
                    </button>

             </div>


        </div>
        
        
    </div>
  )
}

export default Login