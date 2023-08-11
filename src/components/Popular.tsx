import { Button } from '@material-tailwind/react'
import   { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { useQuery, gql } from "@apollo/client";

const POPULAR_BOOKS_QUERY = gql`
  {
   
      popularBooks{
       title
       image
       id
       category
       stock
       price
   
     }
  }
`;
function Popular() {

  const { data, loading, error } = useQuery(POPULAR_BOOKS_QUERY);
  const [books, setbooks] = useState([])
   const [catgory, setcatgory] = useState("all")
   const init = ():any=>{
    const b = [] 

    if(data) {
      for (const book of data.popularBooks) {
         b.push(book) 
         if (b.length==6) {
          break;
         }
       }
     }
     return b
   }
   
   useEffect(() => {
   
      if(!loading) setbooks(init())  

   }, [loading])
   
   useEffect(() => {
    let bs = []
    if(catgory!='all')  bs = init().filter((b:any)=>b.category==catgory)
    else bs = init()    
   
      setbooks(bs)
    
    
     
   }, [catgory])
   
  
   const handleClick = (s:string)=>{
     
    
    setcatgory(s)

    
  }

  return (
    <div className='navbar1 my-9 bg-slate-50'>
         <h2 className='text-3xl py-10 font-bold text-center'>
            Popular Books
         </h2>
         <div className="flex justify-center gap-4 flex-wrap mb-9">
           <Button className={catgory=='all'?'bg-cyan-600 py-2 rounded-full':'border border-cyan-500  text-cyan-500 py-2 rounded-full'} onClick={()=>handleClick("all")}>
             All
           </Button>
           <Button className={catgory=='health'?'bg-cyan-600 py-2 rounded-full':'border border-cyan-500  text-cyan-500 py-2 rounded-full'} onClick={()=>handleClick("health")}>
             health
           </Button>
           <Button className={catgory=='IT'?'bg-cyan-600 py-2 rounded-full':'border border-cyan-500  text-cyan-500 py-2 rounded-full'} onClick={()=>handleClick("IT")}>
             IT
           </Button>
           <Button className={catgory=='environment'?'bg-cyan-600 py-2 rounded-full':'border border-cyan-500  text-cyan-500 py-2 rounded-full'} onClick={()=>handleClick("environment")}>
             Enviroment
           </Button>
           <Button className={catgory=='novels'?'bg-cyan-600 py-2 rounded-full':'border border-cyan-500  text-cyan-500 py-2 rounded-full'} onClick={()=>handleClick("novels")}>
             Novels
           </Button>
         </div>
         <div className="grid mx-11 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 pb-7 ">
          {
            loading?<p>loading ... </p>:<>
            {
              books?.map((book:any)=>(
                 <BookCard {...book} key={book.id}/>
              ))
            }
         
            </>
          }
          {
            error && <p>internal error server 500</p>
          }

         </div>
    </div>
  )
}

export default Popular