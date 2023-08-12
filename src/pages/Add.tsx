import  { useState} from 'react'
import Navbar2 from '../components/Navbar2'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { gql, useMutation } from '@apollo/client';

const ADD_BOOK = gql`
mutation addBook($title: String!, $author: String!, $description: String!, $price: Float!, $image: String!, $stock: Int!, $category: Category!) {
  addBook(book: {title: $title, author: $author, description: $description, price: $price, image: $image, stock: $stock, category: $category}) {
    data {
      id
    }
  }
}

`

function Add() {
   const [addBook,{error}]=useMutation(ADD_BOOK)
  const [image, setimage] = useState(null)
  const formik = useFormik({
    initialValues: {
      title :""  ,
      author:"",
      description:"",
      price:0.0,
      stock:0,
      category:"health"
    }, 
    validationSchema: Yup.object({
      title: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      author:Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
      description:Yup.string()
      .required('Required'),
      price:Yup.number().min(5,"the price must be greater than or equal 5").required("Required"),
      stock:Yup.number().min(1,"the stock must be greater than or equal 1").required("Required"),
      category: Yup.string().oneOf(["health","environment","IT","novels"])
      }),
    onSubmit: ({title,author,description,price, stock ,category}) => {
      if(image){
        const formData = new FormData()
        formData.append("file",image)
    
        
        formData.append("upload_preset","bookmeup")
        axios.post("https://api.cloudinary.com/v1_1/dn554acxj/image/upload",formData)
        .then((res)=>{
    
          const i = res.data.secure_url
        
          
           addBook({
            variables:{
              title,
              image:i,
              description,
              author,
              price,
              category,
              stock
            }
           })
         alert("the book is succefully added")
        })
        .catch(err=>console.log(err))
      
      }
      
      
       
    },
  });

  return (
    <div>
       
    <Navbar2/>
   
   <div className='flex justify-center mt-24'>
        <div className='mx-3 w-full lg:w-1/2 md:w-1/2 lg:mx-0 md:mx-0'>
               <h1 className='text-center my-9 text-3xl font-bold'>
                   Add Book
               </h1>
              {
                error && <p className='text-red-400'>
                  {error.message}
                </p>
              }
              <form onSubmit={formik.handleSubmit} >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">title</label>
                        <div className="mt-2">
                        <input id="name" name="title" value={formik.values.title} onChange={formik.handleChange}  type="text"className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        {formik.touched.title && formik.errors.title ? (
                                        <div className='text-red-500'>{formik.errors.title}</div>
                        ) : null}
                        </div>
                    </div>
                    <div className='my-4'>
                      <h2 className='font-bold text-xl'>
                          Category
                      </h2>
          
                     <div className='my-3'>
                        <input type="radio" name="category" value="health" checked={formik.values.category=="health"} id="" onChange={formik.handleChange} />
                        <label htmlFor="" className='ml-2'>health</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="environment" checked={formik.values.category=='environment'} id="" onChange={formik.handleChange}/>
                        <label htmlFor="" className='ml-2'>environment</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="IT" checked={formik.values.category=='IT'} id="" onChange={formik.handleChange} />
                        <label htmlFor="" className='ml-2'>IT</label>
                     </div>
                     <div className='my-3'>
                        <input type="radio" name="category" value="novels" checked={formik.values.category=='novels'} id="" onChange={formik.handleChange}/>
                        <label htmlFor="" className='ml-2'>Novels</label>
                     </div>
                     { formik.errors.category ? (
                                        <div className='text-red-500'>{formik.errors.category}</div>
                        ) : null}
                   </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">description</label>
                      <div className="mt-2.5">
                        <textarea name="description" value={formik.values.description} onChange={formik.handleChange} id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        {formik.touched.description && formik.errors.description ? (
                                        <div className='text-red-500'>{formik.errors.description}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="image" className="block text-sm font-semibold leading-6 text-gray-900">image</label>
                       <input type="file" name="image" id="" required onChange={(e)=>setimage(e.target.files[0])} />
                    </div>
                    <div>
                        <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">author</label>
                        <div className="mt-2">
                        <input id="author" name="author" value={formik.values.author} onChange={formik.handleChange}  type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        {formik.touched.author && formik.errors.author ? (
                                        <div className='text-red-500'>{formik.errors.author}</div>
                        ) : null}
                        </div>
                    </div>

                    <div >
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">price</label>
                        <div className="mt-2">
                            <input id="price" name="price" type="number" value={formik.values.price} onChange={formik.handleChange}   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            {formik.touched.price && formik.errors.price ? (
                                            <div className='text-red-500'>{formik.errors.price}</div>
                            ) : null}
                        </div>
                    </div>

                      <div >
                        <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">stock</label>
                        <div className="mt-2">
                            <input id="stock" name="stock" type="number" value={formik.values.stock} onChange={formik.handleChange}   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            {formik.touched.stock && formik.errors.stock ? (
                                            <div className='text-red-500'>{formik.errors.stock}</div>
                            ) : null}
                        </div>
                    </div>
                    <button className='w-full  bg-slate-700 text-white p-1 my-4'>
                        Submit
                    </button>
              </form>

        </div>


   </div>
   
   
</div>
  )
}

export default Add