import React from 'react'
import Navbar2 from '../components/Navbar2'
import image from "../assets/made-to-stick-1024x688 1.png";
import OrderItem from '../components/OrderItem';

function YourOrders() {
  return (
    <div>
       <Navbar2/>
      
       <h1 className='mb-8 mt-28 text-center text-xl font-bold'>
          Your Orders
       </h1>
       
       <OrderItem/>
       <OrderItem/>
       <OrderItem/>
        </div>


  )
}

export default YourOrders