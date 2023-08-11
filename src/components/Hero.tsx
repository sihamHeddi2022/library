
import { Link } from 'react-router-dom'
import image from '../assets/books.png'
function Hero() {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 ml-5 lg:ml-16 md:ml-16  gap-3 lg:gap-8  '>

        <div className=' flex flex-col justify-center  text-center items-center py-2 lg:py-5'>
            <div className="my-5 lg:my-14 	  ">
                <h3 className='font-bold text-lg lg:text-2xl md:text-2Xl text-cyan-600 tracking-wider'>
                    THE BEST PLACE TO BUY BOOK
                </h3>
             <div className='hidden lg:block mx-24 my-9'>
                    <p className='text-gray-300 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur libero vitae dignissimos corporis! Sapiente, natus incidunt labore tempore 
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi dignissimos dolore aspernatur ab hic natus vel vero accusantium. Dolorem!
                        </p>
             </div>
             <div className='hidden lg:block mt-5'>
             <Link to={"/shop"} className='bg-cyan-600 text-xl hover:bg-cyan-500 text-white px-8 py-3  rounded-md '> Shop Now </Link>

             </div>
            </div>
        </div>

       <div className='flex justify-center  lg:justify-start items-center'>
          <img src={image} alt="" className='w-full mr-9  h-[400px]' />
       </div>
    </div>
  )
}

export default Hero