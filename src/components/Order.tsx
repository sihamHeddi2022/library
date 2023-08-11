import { useFormik } from 'formik';
 
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { resetCard } from '../store/card';

const CREATE_ORDER = gql`
    mutation createOrder($email:String!,$first:String!,$last:String!,$country:String!,$street:String!,$city:String!,$state:String!,$zip:Int!,$o:[Order]){
        createOrder(c:{
          email:$email,
          FirstName:$first,
          LastName:$last,
          Country:$country,
          Street:$street,
          City:$city,
          State:$state,
          ZIP:$zip
        },o:{
          orders:$o
        })
    }
`;
function Order() {
  const [createOrder, { data, loading, error }] = useMutation(CREATE_ORDER);
  const card = useSelector((state:any) => state.card);
  const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email :""  ,
            FirstName:"",
            LastName:"" ,
             Country:"",
             Street:"",
             City:"" ,
             State:"" ,
             ZIP :0
        }, 
        validationSchema: Yup.object({
            FirstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
              LastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            Country:Yup.string()
            .required('Required'),
            Street:Yup.string()
            .required('Required'),
            City:Yup.string()
            .required('Required') ,
            State:Yup.string()
            .required('Required') ,
            ZIP :Yup.number()
            .required('Required')
          }),
        onSubmit: values => {
      
           
          const orders = card.map(((c:any)=>({bookID:parseInt(c.id),quantity:parseInt(c.quantity)})))

          createOrder({ variables: { email:values.email,first:values.FirstName,last:values.LastName,
            country:values.Country,street:values.Street,
            city:values.City,state:values.State,zip:values.ZIP,o:orders} });
           
     
            setTimeout(() => {
              dispatch(resetCard())
              window.location.reload()
            }, 3000);
           
        },
      });
    if(loading) return <><p>loading ...</p></>
    if(error) return <><p>error occured in server ... </p></>
    if (data?.createOrder) return <><p>{data.createOrder}</p></>
  return (
    <form onSubmit={formik.handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div className="mt-2">
                <input type="text" name="FirstName" id="first-name" value={formik.values.FirstName} onChange={formik.handleChange}   autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                {formik.touched.FirstName && formik.errors.FirstName ? (
                                <div className='text-red-500'>{formik.errors.FirstName}</div>
                  ) : null}

                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div className="mt-2">
                <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.LastName} name="LastName" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                {formik.touched.LastName && formik.errors.LastName ? (
                                <div className='text-red-500'>{formik.errors.LastName}</div>
                  ) : null} 
                </div>
            </div>

            <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                <input id="email" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.email} name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                {formik.touched.email && formik.errors.email ? (
                                <div className='text-red-500'>{formik.errors.email}</div>
                  ) : null} 
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                <div className="mt-2">
                <select id="country" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.Country} name="Country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>
                {formik.touched.Country && formik.errors.Country ? (
                                <div className='text-red-500'>{formik.errors.Country}</div>
                  ) : null} 
                </div>
            </div>

            <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                <div className="mt-2">
                <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.Street} name="Street" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                {formik.touched.Street && formik.errors.Street ? (
                                <div className='text-red-500'>{formik.errors.Street}</div>
                  ) : null} 
                </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div className="mt-2">
                <input type="text"onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.City} name="City" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                {formik.touched.City && formik.errors.City ? (
                                <div className='text-red-500'>{formik.errors.City}</div>
                  ) : null} 
                </div>
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                <div className="mt-2">
                <input type="text"onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.State} name="State" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                {formik.touched.State && formik.errors.State ? (
                                <div className='text-red-500'>{formik.errors.State}</div>
                  ) : null} 
                </div>
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                <div className="mt-2">
                <input type="number" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.ZIP} name="ZIP" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                {formik.touched.ZIP && formik.errors.ZIP ? (
                                <div className='text-red-500'>{formik.errors.ZIP}</div>
                  ) : null} 
        
                </div>
            </div>
        
            </div>
        
        </div>
            <button className='w-full  bg-slate-700 text-white p-1 my-4' type='submit'>
                Submit
            </button>
  </form>
  )
}

export default Order