import React from 'react'
import image from "../assets/made-to-stick-1024x688 1.png";

function Item() {
  return (
    <div className='flex flex-col lg:flex-row md:flex-row my-5'>
        <img src={image} alt="" className='w-24 lg:w-2/12 md:w-2/12'/>
        <div className='flex   flex-col gap-3 items-start justify-center'>
            <h1 className='text-xl'>
               Title of the book
            </h1>
            <div className='flex gap-1'>
                <button className='rounded-full p-1 bg-slate-500 text-white'>-</button>
                <p>1</p>
                <button className='rounded-full p-1 bg-slate-500 text-white'>+</button>
            </div>
            <p>
                price : 90 $
            </p>
            <button className='text-red-400 font-bold'>
                - Delete Item
            </button>
        </div>
    
    </div>
  )
}

export default Item