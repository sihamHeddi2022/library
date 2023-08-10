import React from 'react'
import Navbar2 from '../components/Navbar2'
import Item2 from '../components/Item2'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <Navbar2/>
        <h1 className='b-8 mt-28 font-bold text-3xl text-center'>
            Dashboard
        </h1>
        <Link to={"/add"} className='ml-5 font-bold text-xl'>
          + Add Book
        </Link>
        <hr />
         <Item2/>
         <Item2/>
         <Item2/>
         <Item2/>
    </div>
  )
}

export default Dashboard