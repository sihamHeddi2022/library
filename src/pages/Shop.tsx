import React, { useState,useEffect } from 'react'
import Navbar2 from '../components/Navbar2'
import BookCard from '../components/BookCard'
import { gql, useLazyQuery } from '@apollo/client'

function Shop() {
   const [category, setcategory] = useState("all")
   const [title, settitle] = useState("")
   const [sortBy, setsortBy] = useState("title")
   
  //  const [min, setmin] = useState<number>(0.0)
  //  const [max, setmax] = useState<number>(1000.0)

 const [page, setpage] = useState(1)
 
 
   const BOOKS_QUERY = gql`query books($limit: Int!, $page: Int!, $sortBy: Sorting, $title: String, $category: Category, $minPrice: Float, $maxPrice: Float) {
    books(s: {limit: $limit, page: $page, sortBy: $sortBy, title: $title, category: $category, minPrice: $minPrice, maxPrice: $maxPrice}) {
      books {
        title
        id
        image
        price
      }
      pages
    }
  }

 `;
 
   
   const[search,{error,loading,data}]=useLazyQuery(BOOKS_QUERY)
   console.log(error);
   const pageNumbers = Array.from({ length: data?.books.pages }, (_, index) => index+1); 

    useEffect(() => {
      
      search({
        variables:{
          limit: 10,
          page: 1,
          sortBy: sortBy,
          title: title,
          category: category,
          // minPrice: min || 0,
          // maxPrice: max || 1000,
        }
      })



    }, [])
    
    useEffect(() => {
      search({
        variables:{
          limit: 10,
          page: page,
          sortBy: sortBy,
          title: title,
          category: category,
          // minPrice: min || 0,
          // maxPrice: max || 1000,
        }
      })

    }, [page])
    // useEffect(() => {
    //   console.log();
      
    //   if(min>max) alert("the min price must be less than max price")
    //    if(min<0) {
    //     alert("the min price must be positive")
    //      setmin(0) 
    //   }
    //   }, [min])
    // useEffect(() => {
    //   if(max<min) alert("the max price must be greater than min price")
    //   if(max>1000) {
    //     alert("the max price must be less than 1000")
    //     setmax(1000)
    //   }
    // }, [max])
   const handleBlur = ()=>{
    search({
      variables:{
        limit: 10,
        page: 1,
        sortBy: sortBy,
        title: title,
        category: category,
        // minPrice: min || 0,
        // maxPrice: max || 1000,
      }
    })

   }

    const prev =()=>{
      if(page>1) setpage(page-1)
    }
    
    const next = ()=> {
      if(page<data.books.pages) setpage(page+1)
    }



   return (
    <div>
        <Navbar2 title={title} settitle={settitle} handleBlur={handleBlur}/>
        <h2 className='my-8 text-4xl mx-8 font-bold'>Search Result</h2>
       <div className="flex  flex-col-reverse lg:flex-row md:flex-row">
            <div className='w-full lg:w-3/4 md:w-3/4'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full '>
             {
               loading?<p>loading ...</p>:data?.books.books.length>0 ? data.books.books.map((book:any)=>(<BookCard {...book} key={book.id}/>)):<p>No books found !! </p>
             } 

          
            </div>
            {data?.books.books.length && <div className='my-9 flex justify-center gap-3'>
             
              {
                page>1 && <button className='shadow-lg p-3 bg-slate-100 text-blue-400' onClick={prev}>
                {'<<'}
              </button>
              } 
                {
                 data.books.pages>1 && pageNumbers.map((p:any)=>
                  <button className={page==p?"shadow-lg p-3  bg-blue-400  text-slate-100":'shadow-lg p-3 bg-slate-100 text-blue-400'} onClick={()=>setpage(p)}>
                  {p}
                </button>
                  
                  )
                }
               {
                
                page<data.books.pages && <button className='shadow-lg p-3 bg-slate-100 text-blue-400' onClick={next}>
                  {'>>'}
                </button>
               }
            </div> }
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
                        <input type="radio" name="category" value="all" checked={category=='all'} id="" onChange={()=>setcategory("all")} />
                        <label htmlFor="" className='ml-2'>all</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="health" checked={category=='health'} id="" onChange={()=>setcategory("health")} />
                        <label htmlFor="" className='ml-2'>health</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="environment" checked={category=='environment'} id="" onChange={()=>setcategory("environment")}/>
                        <label htmlFor="" className='ml-2'>environment</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="IT" checked={category=='IT'} id=""onChange={()=>setcategory("IT")} />
                        <label htmlFor="" className='ml-2'>IT</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="novels" checked={category=='novels'} id="" onChange={()=>setcategory("novels")}/>
                        <label htmlFor="" className='ml-2'>Novels</label>
                     </div>
                   </div>

                   <div className='my-4'>
                      <h2 className='font-bold text-xl'>
                          Sort By
                      </h2>
                      <div className='my-3'>
                        <select name="" id="" className='w-full border outline-none p-2' value={sortBy} onChange={(e)=>setsortBy(e.target.value)}>
                          <option value="title">title</option>
                          <option value="price">price</option>
                          <option value="createdAt">date of publishing</option>
                        </select>
                     </div>
                   </div>
                   {/* <div className='my-5'>
                      <h2 className='font-bold text-xl'>
                          Price
                      </h2>
                      <div className='my-3 flex flex-col lg:flex-row justify-center'>
                          <input type="number" name="" id=""  placeholder='low price' value={min} onChange={(e:any)=>setmin(e.target.value)} className='p-2 w-full lg:w-1/3 mr-2 border outline-none'/>
                          <input type="number" placeholder='high price' value={max} onChange={(e:any)=>setmax(e.target.value)}  className='p-2 w-full mt-3 lg:mt-0 lg:w-1/3 border outline-none'/>
                     </div>
                   </div> */}
                   <button className='bg-lime-600 text-white w-full my-4 p-2' onClick={handleBlur}>
                      Search
                   </button>

               </div>
            </div>
       </div>
    </div>
  )
}

export default Shop



































