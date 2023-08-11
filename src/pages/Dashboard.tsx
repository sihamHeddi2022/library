import React, { useEffect } from 'react'
import Navbar2 from '../components/Navbar2'
import Item2 from '../components/Item2'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { gql, useQuery } from '@apollo/client'


const   GET_USER_BOOKS = gql`query{
  booksOfUser{
    id
    image
    title
    price
  }
}`

function Dashboard() {
   const {data,loading,error} = useQuery(GET_USER_BOOKS)
   const token = useSelector((state:any)=>state.token)
   const navigate = useNavigate()
   
      useEffect(() => {
        if(!token)  navigate("/login")  
      }, [])
  
  return (
    <div>
        <Navbar2/>
        <h1 className='b-8 mt-28 font-bold text-3xl text-center'>
            Dashboard
        </h1>
        <Link to={"/add"} className='ml-5 font-bold text-xl'>
          + Add Book
        </Link>
        <hr />
          {
            error && <p className='text-red-400'>{error.message}</p>
          }
          {
            loading && <p>loading ... </p>
          }

       {
        data && data?.booksOfUser.length>0? data?.booksOfUser.map((book:any)=><Item2 {...book} key={book.id}/>)
        : <p className='text-center text-xl my-10'>
            you don't have any book yet 
        </p> 
      }
     
    </div>
  )
}

export default Dashboard