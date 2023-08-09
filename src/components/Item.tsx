import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementQuantity, deleteItem, incrementQuantity } from '../store/card';

function Item(props) {
    const {id,title,image,price,quantity,stock} = props
    const dispatch = useDispatch();

  return (
    <div className='flex flex-col lg:flex-row md:flex-row my-5'>
        <img src={image} alt="" className='w-24 lg:w-2/12 md:w-2/12 h-[155px] mr-6'/>
        <div className='flex   flex-col gap-3 items-start justify-center'>
            <h1 className='text-xl'>
              {title}
            </h1>
            <div className='flex gap-1'>
                <button className='rounded-full p-1 bg-slate-500 text-white' onClick={()=>dispatch(decrementQuantity({id,stock}))}>-</button>
                <p>{quantity}</p>
                <button className='rounded-full p-1 bg-slate-500 text-white' onClick={()=>dispatch(incrementQuantity({id}))}>+</button>
            </div>
            <p>
                price : {price*quantity} $
            </p>
            <button className='text-red-400 font-bold' onClick={()=>dispatch(deleteItem({id}))}>
                - Delete Item
            </button>
        </div>
    
    </div>
  )
}

export default Item