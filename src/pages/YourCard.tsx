import React from 'react'
import Navbar2 from '../components/Navbar2'
import Item from '../components/Item'

function YourCard() {
  return (
    <div>
        <Navbar2/>
      <div className='mx-11 mt-9 mb-4'>
         <h1 className='my-3 font-bold text-2xl'>
            Shopping Card
        </h1>
        <hr />
        <Item/>
        <Item/>
        <Item/>
      </div>
      <div className='bg-slate-200'>
         <h1>summary (3 items ) </h1>
         <h1>Total price : 34 $</h1>
      </div>
    </div>
  )
}

export default YourCard