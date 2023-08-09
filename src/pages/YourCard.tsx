import React, { useState } from 'react'
import Navbar2 from '../components/Navbar2'
import Item from '../components/Item'
import Order from '../components/Order'
import { useSelector } from 'react-redux';

function YourCard() {
  const card = useSelector((state:any) => state.card);
  const [show, setshow] = useState(false)
  console.log(card);
  
  const getTotalPrice = ()=>{
     return card.reduce((total:any,element:any)=> total+element.price*element.quantity,0)
  }

  return (
    <div>
        <Navbar2/>
      <div className='mx-11 mt-28 mb-4'>
          <h1 className='my-3 font-bold text-2xl'>
              Shopping Card
          </h1>
          <hr />
          {
            card.length>0?
            
            <>
            
            
            {  card.map((c:any)=><Item {...c}/>)}
              
            <div className='bg-slate-200 p-3'>
                <h1>summary ({card.length} items ) </h1>
                <h1>Total price : {getTotalPrice()} $</h1>
                <button className='w-full mx-1 p-1 bg-slate-700 text-white my-2' onClick={()=> setshow(!show)}>
                    Buy
                </button>
            </div>
          </>:<p className='text-center my-6 text-xl'>No Book added to your card</p>
          }
        
        
        {
          show &&   
          <div>
               <h1 className='my-5 text-2xl font-bold'>
                  Order Now
               </h1>
               <Order/>
          </div>
        }
      </div>
   
    </div>
  )
}

export default YourCard