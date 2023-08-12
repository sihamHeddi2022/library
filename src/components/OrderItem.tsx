import { gql, useMutation } from '@apollo/client';
import  {useState} from 'react'

const CHANGE_STATUS = gql `
mutation updateStatusOrder($id:ID!,$status:Boolean!)
 {
  updateStatusOrder(id:$id,status:$status)
}`


function OrderItem(props:any) {
   
  const [changeStatus] = useMutation(CHANGE_STATUS)


  const {title,image,price } = props.book
  const {id,status,quantity} = props
  
  const [status1, setstatus1] = useState(status)
  

  const handleChange = (e)=> {
   
    
      setstatus1(e.target.value)
      if (e.target.value) changeStatus({
        variables:{
          id:id,
          status: JSON.parse(e.target.value)        
        }
       
        
       }).then(()=>  alert("the order was succefully changed the status"))
  
  }


  
  return (
    <div className='flex flex-col lg:flex-row md:flex-row my-5'>
    
    <img src={image} alt="" className='mx-5 w-24 lg:w-2/12 md:w-2/12 object-contain h-[98px]'/>
    <div className='flex   flex-col gap-3 items-start justify-center'>
        <h1 className='text-xl'>
          {title}
        </h1>

        <p>
            price : {price} $ - quantity : {quantity}
        </p>
     {
      !status1 &&     <select name="" id="" value={status1} onChange={handleChange} >
            <option value="true">Accepted</option>
            <option value="false">Rejected</option>
        </select>
     }
 
</div>
</div>
  )
}

export default OrderItem