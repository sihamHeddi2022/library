import React from 'react'
import Navbar2 from '../components/Navbar2'
import Item from '../components/Item'
import Order from '../components/Order'

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
          <div className='bg-slate-200 p-3'>
            <h1>summary (3 items ) </h1>
            <h1>Total price : 34 $</h1>
            <button className='w-full mx-1 p-1 bg-slate-700 text-white my-2'>
                Buy
            </button>
          </div>
          <div>
               <h1 className='my-5 text-2xl font-bold'>
                  Order Now
               </h1>
               <Order/>
          </div>
      </div>
   
    </div>
  )
}

export default YourCard