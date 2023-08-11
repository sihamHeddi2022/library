import   { useEffect } from 'react'
import Navbar2 from '../components/Navbar2'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { settoken } from '../store/token';
import { useNavigate } from 'react-router-dom';
const REGISTER = gql`
mutation register($full:String!,$email:String!,$password:String!){
    register(user:{
      fullName:$full,
      email:$email,
      password:$password
    }){
      token
    }
  }
`;
function Register() {
  const token = useSelector((state:any)=>state.token)

    const navigate = useNavigate()
    const [register, { data, error }] = useMutation(REGISTER);
    const dispatch = useDispatch()
    useEffect(() => {
      if(token)  navigate("/dashboard")  

        if (data?.register?.token) {
          dispatch(settoken({token:data?.register?.token}))
          setTimeout(() => {
            alert("you have succefully registered !! ")
            window.location.reload()

        }, 2000);
        }
    }, [data])
    


    const formik = useFormik({
        initialValues: {
            email :""  ,
            fullName:"",
            password:""
        }, 
        validationSchema: Yup.object({
            fullName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password:Yup.string()  .min(5, 'Must be at least 5 carachters')
            .required('Required'),
          
          }),
        onSubmit: ({email,fullName,password}) => {
          
            register({variables:{
               full:fullName,email:email,password:password
             }})
           
        },
      });


  return (
    <div>
       
    <Navbar2/>
   
   <div className='flex justify-center mt-24'>
        <div className='mx-3 w-full lg:w-1/2 md:w-1/2 lg:mx-0 md:mx-0'>
               <h1 className='text-center my-9 text-3xl font-bold'>
                   Register
               </h1>
             {
                error && <div className='text-red-600'>{error.message}</div>
             } 
              <form onSubmit={formik.handleSubmit} >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Library Name</label>
                        <div className="mt-2">
                        <input id="name" name="fullName" value={formik.values.fullName} onChange={formik.handleChange}  type="text"className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        {formik.touched.fullName && formik.errors.fullName ? (
                                        <div className='text-red-500'>{formik.errors.fullName}</div>
                        ) : null}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                        <input id="email" name="email" value={formik.values.email} onChange={formik.handleChange}  type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        {formik.touched.email && formik.errors.email ? (
                                        <div className='text-red-500'>{formik.errors.email}</div>
                        ) : null}
                        </div>
                    </div>


                    <div >
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">password</label>
                        <div className="mt-2">
                        <input id="password" name="password" type="password" value={formik.values.password} onChange={formik.handleChange}   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        {formik.touched.password && formik.errors.password ? (
                                        <div className='text-red-500'>{formik.errors.password}</div>
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

export default Register