import React from 'react'
import second from '../assets/logo.png'
import { Button, Input } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { FaBars, FaShopify } from "react-icons/fa";
function Navbar2() {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(!open);
  
  return (
    <div >
      <div className='navbar1 flex gap-8 items-center py-3 shadow shadow-gray-300 text-cyan-700 '>
      <div >
                  <img src={second} alt="logo" className='max-w-[80px] lg:max-w-[111px] md:max-w-[111px]' />
                </div>
                <div className="w-3/4 lg:w-2/4">
                   <Input placeholder='search title of book ...' className='py-2  rounded-full px-2 outline-none'  />
                </div>
                <div className=" gap-4 justify-end w-2/4 mr-5 hidden lg:flex">
                     <Link className='flex gap-1 items-center' to="/card"> <FaShopify/> Your Card</Link>      
                     <Link  to={"/login"}   className='bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 text-lg rounded-md '>Login</Link>
                     <Link  to={"/register"}  className='bg-purple-700 hover:bg-purple-500 text-white px-6 py-2 text-lg  rounded-md'>Register</Link>
               </div>

               <div className='	 py-3 px-4 md:hidden lg:hidden '>
                 
                    <div>
                        <Button onClick={openDrawer} className='text-black border border-gray-200'>
                            <FaBars/>
                        </Button>
                  </div>
                </div>
      </div>
           
                
    <div className="mb-2 flex flex-col items-center justify-between p-4 bg-white z-30 shadow shadow-slate-100	" style={open?{display:'flex'}:{display:'none'}}>
                <Link to={"/login"} className='hover:text-cyan-500'>
                  Login
                </Link>
                <Link to={"/register"} className='hover:text-cyan-500'>
                  Register
                </Link>
           
                <Link to={"/card"} className='hover:text-cyan-500'>
                  Your card
                </Link>
         
     </div>
     
    </div>
  )
}

export default Navbar2