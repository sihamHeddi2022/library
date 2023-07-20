import { Button } from '@material-tailwind/react'
import React from 'react'
import BookCard from './BookCard'

function Popular() {
  return (
    <div className='navbar1 my-9 bg-slate-50'>
         <h2 className='text-3xl py-10 font-bold text-center'>
            Popular Books
         </h2>
         <div className="flex justify-center gap-4 flex-wrap mb-9">
           <Button className='bg-cyan-600 py-2 rounded-full'>
             All
           </Button>
           <Button className='border border-cyan-500  text-cyan-500 py-2 rounded-full'>
             health
           </Button>
           <Button className='border border-cyan-500 text-cyan-500 py-2 rounded-full'>
             IT
           </Button>
           <Button className='border border-cyan-500 text-cyan-500 py-2 rounded-full'>
             Enviroment
           </Button>
           <Button className='border border-cyan-500 text-cyan-500 py-2 rounded-full'>
             Novels
           </Button>
         </div>
         <div className="grid mx-11 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 pb-7 ">
           <BookCard/>
           <BookCard/>
           <BookCard/>
        
           <BookCard/>
           <BookCard/>
           <BookCard/>

         </div>
    </div>
  )
}

export default Popular