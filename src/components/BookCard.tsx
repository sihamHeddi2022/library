
  
  
  import { Link } from "react-router-dom";
import { addCard } from "../store/card";
import { useDispatch } from "react-redux";
  
  
  export default function BookCard(props) {
    const dispatch = useDispatch();
    const {id,title,image,price,stock} = props

    const addMe = ()=>{
      dispatch(addCard( {id,title,image,price,stock}))
    }
    return (
      <div className="bg-white flex flex-col items-center shadow shadow-gray-100">
        <div>
            <img src={image} alt="" className="w-full max-h-[160px]"/>
        </div>
        <h2 className="my-4 text-lg font-bold ">
            {title}
        </h2>
        <p className="my-5">
            price - {price} $
        </p>
        <button className="text-slate-500 font-bold" onClick={addMe}>
          Add To Card
        </button>
        <Link className="text-cyan-600 underline my-3" to="/book/1" >
            view the book
        </Link>
      </div>
    );
  }