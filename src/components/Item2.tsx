import React from 'react'

function Item2(props:any) {
    const {title,image,price,id} = props
  return (
    <div className='flex flex-col lg:flex-row md:flex-row my-5'>
    <img src={image} alt="" className='w-24 lg:w-2/12 md:w-2/12'/>
    <div className='flex   flex-col gap-3 items-start justify-center'>
        <h1 className='text-xl'>
          {title}
        </h1>
   
        <p>
            price : {price} $
        </p>
        <div className="flex gap-5">
            <button className='text-slate-400 font-bold'>
                Edit
            </button>
            <button className='text-red-400 font-bold'>
                - Delete 
            </button>
        </div>
    </div>

</div>
  )
}

export default Item2