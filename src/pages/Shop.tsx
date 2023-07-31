import React from 'react'
import Navbar2 from '../components/Navbar2'
import BookCard from '../components/BookCard'

function Shop() {
  return (
    <div>
        <Navbar2/>
        <h2 className='my-8 text-4xl mx-8 font-bold'>Search Result</h2>
       <div className="flex  flex-col-reverse lg:flex-row md:flex-row">
          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full lg:w-3/4 md:w-3/4'>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
              <BookCard/>
            </div>
            <div className=' lg:w-1/4 md:1/4'>
               <div className=' border-slate-100 m-3 ml-6'>
                   <h1 className='text-center font-bold text-2xl'>
                    Filter
                   </h1>
                   <div className='my-4'>
                      <h2 className='font-bold text-xl'>
                          Category
                      </h2>
                     <div className='my-3'>
                        <input type="radio" name="category" value="all" id="" />
                        <label htmlFor="" className='ml-2'>all</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="health" id="" />
                        <label htmlFor="" className='ml-2'>health</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="environement " id="" />
                        <label htmlFor="" className='ml-2'>environement</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="it" id="" />
                        <label htmlFor="" className='ml-2'>IT</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="it" id="" />
                        <label htmlFor="" className='ml-2'>Novels</label>
                     </div>
                   </div>

                   <div className='my-4'>
                      <h2 className='font-bold text-xl'>
                          Sort By
                      </h2>
                      <div className='my-3'>
                        <select name="" id="" className='w-full border outline-none p-2'>
                          <option value="">title</option>
                          <option value="">price</option>
                          <option value="">date of publishing</option>
                        </select>
                     </div>
                   </div>
                   <div className='my-5'>
                      <h2 className='font-bold text-xl'>
                          Price
                      </h2>
                      <div className='my-3 flex flex-col lg:flex-row justify-center'>
                          <input type="number" name="" id=""  placeholder='low price' className='p-2 w-full lg:w-1/3 mr-2 border outline-none'/>
                          <input type="number" placeholder='high price'  className='p-2 w-full mt-3 lg:mt-0 lg:w-1/3 border outline-none'/>
                     </div>
                   </div>
                   <button className='bg-lime-600 text-white w-full my-4 p-2'>
                      Search
                   </button>

               </div>
            </div>
       </div>
    </div>
  )
}

export default Shop



































