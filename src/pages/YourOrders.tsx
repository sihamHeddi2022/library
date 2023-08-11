import  {useEffect} from 'react'
import Navbar2 from '../components/Navbar2'
import OrderItem from '../components/OrderItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_USER_ORDERS=gql`
query{
  getOrdersOfUser{
    book{
      id
      image
      price
      title
    }
    quantity
    status
    id
  }
  }

`


function YourOrders() {
   const {data,loading,error} = useQuery(GET_USER_ORDERS)
  const token = useSelector((state:any)=>state.token)
  const navigate = useNavigate()
  
     useEffect(() => {
       if(!token)  navigate("/login")  
     }, [])
  return (
    <div>
       <Navbar2/>
      
       <h1 className='mb-8 mt-28 text-center text-xl font-bold'>
          Your Orders
       </h1>
          {
            error && <p className='text-red-400'>{error.message}</p>
          }
          {
            loading && <p>loading ... </p>
          }

       {
        !loading && data && data?.getOrdersOfUser.length>0? data?.getOrdersOfUser.map((order:any)=><OrderItem {...order} key={order.id}/>)
        : <p className='text-center text-xl my-10'>
            you don't have any book yet 
        </p> 
      }

        </div>


  )
}

export default YourOrders